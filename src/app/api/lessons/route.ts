import { NextResponse } from "next/server"
import { courses } from "@/data/courses"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const courseId = searchParams.get("courseId")
  const lessonId = searchParams.get("lessonId")

  if (courseId && lessonId) {
    const course = courses.find((c) => c.id === courseId)
    if (!course) return NextResponse.json({ error: "Course not found" }, { status: 404 })

    for (const module of course.modules) {
      const lesson = module.lessons.find((l) => l.id === lessonId)
      if (lesson) {
        return NextResponse.json({ lesson, moduleTitle: module.title })
      }
    }
    return NextResponse.json({ error: "Lesson not found" }, { status: 404 })
  }

  if (courseId) {
    const course = courses.find((c) => c.id === courseId)
    if (!course) return NextResponse.json({ error: "Course not found" }, { status: 404 })
    const allLessons = course.modules.flatMap((m) => m.lessons)
    return NextResponse.json(allLessons)
  }

  const allLessons = courses.flatMap((c) =>
    c.modules.flatMap((m) =>
      m.lessons.map((l) => ({ ...l, courseId: c.id, courseTitle: c.title, moduleTitle: m.title }))
    )
  )
  return NextResponse.json(allLessons)
}
