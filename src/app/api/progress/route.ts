import { NextResponse } from "next/server"

type UserProgress = {
  courseId: string
  completedLessons: string[]
  lastLessonId?: string
  quizScores: Record<string, number>
  startedAt: string
  completedAt?: string
}

const progressStore = new Map<string, UserProgress>()

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const courseId = searchParams.get("courseId")
  const userId = searchParams.get("userId") || "default"
  const key = `${userId}-${courseId || "all"}`

  if (courseId) {
    const data = progressStore.get(`${userId}-${courseId}`)
    return NextResponse.json(data || { courseId, completedLessons: [], quizScores: {}, startedAt: new Date().toISOString() })
  }

  const allProgress = Array.from(progressStore.entries())
    .filter(([k]) => k.startsWith(`${userId}-`))
    .map(([, v]) => v)

  return NextResponse.json(allProgress)
}

export async function POST(request: Request) {
  const body = await request.json()
  const { courseId, completedLessons, lastLessonId, quizScores, completedAt, userId = "default" } = body

  if (!courseId) {
    return NextResponse.json({ error: "courseId required" }, { status: 400 })
  }

  const key = `${userId}-${courseId}`
  const existing: UserProgress = progressStore.get(key) || {
    courseId,
    completedLessons: [],
    quizScores: {},
    startedAt: new Date().toISOString(),
  }

  progressStore.set(key, {
    ...existing,
    completedLessons: completedLessons ?? existing.completedLessons,
    lastLessonId: lastLessonId ?? existing.lastLessonId,
    quizScores: quizScores ?? existing.quizScores,
    completedAt: completedAt ?? existing.completedAt,
  })

  return NextResponse.json(progressStore.get(key))
}
