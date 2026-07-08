import { NextResponse } from "next/server"
import { courses } from "@/data/courses"

export async function GET(_request: Request, { params }: { params: Promise<{ courseId: string }> }) {
  const { courseId } = await params
  const course = courses.find((c) => c.id === courseId)
  if (!course) return NextResponse.json({ error: "Course not found" }, { status: 404 })
  return NextResponse.json(course)
}
