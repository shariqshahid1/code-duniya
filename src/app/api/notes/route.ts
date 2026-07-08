import { NextResponse } from "next/server"
import { v4 as uuidv4 } from "uuid"

const notes = new Map<string, { id: string; courseId: string; lessonId: string; content: string; createdAt: string; updatedAt: string }[]>()

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const courseId = searchParams.get("courseId")
  const userId = searchParams.get("userId") || "default"

  const userNotes = notes.get(userId) || []
  if (courseId) {
    return NextResponse.json(userNotes.filter((n) => n.courseId === courseId))
  }
  return NextResponse.json(userNotes)
}

export async function POST(request: Request) {
  const body = await request.json()
  const { courseId, lessonId, content, userId = "default" } = body

  if (!courseId || !content) {
    return NextResponse.json({ error: "courseId and content required" }, { status: 400 })
  }

  const newNote = {
    id: uuidv4(),
    courseId,
    lessonId: lessonId || "general",
    content,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }

  const userNotes = notes.get(userId) || []
  userNotes.push(newNote)
  notes.set(userId, userNotes)

  return NextResponse.json(newNote, { status: 201 })
}
