"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Brain, Search, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { courses } from "@/data/courses"

export default function AdminQuizzesPage() {
  const [search, setSearch] = useState("")
  const [filterCourse, setFilterCourse] = useState("all")

  const allQuizzes = courses.flatMap((course) =>
    course.modules.flatMap((module) =>
      module.lessons.filter((lesson) => lesson.content.quiz).map((lesson) => ({
        quiz: lesson.content.quiz!,
        lessonTitle: lesson.title,
        courseId: course.id,
        courseTitle: course.title,
        moduleTitle: module.title,
        lessonId: lesson.id,
      }))
    )
  )

  const filtered = allQuizzes.filter((q) => {
    const matchesSearch = q.quiz.title.toLowerCase().includes(search.toLowerCase()) || q.lessonTitle.toLowerCase().includes(search.toLowerCase())
    const matchesCourse = filterCourse === "all" || q.courseId === filterCourse
    return matchesSearch && matchesCourse
  })

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Quizzes</h1>
          <p className="text-muted-foreground mt-1">Manage all quizzes across courses</p>
        </div>
        <div className="flex items-center gap-2">
          <Select value={filterCourse} onValueChange={setFilterCourse}>
            <SelectTrigger className="w-44">
              <SelectValue placeholder="Filter by course" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Courses</SelectItem>
              {courses.map((c) => <SelectItem key={c.id} value={c.id}>{c.title}</SelectItem>)}
            </SelectContent>
          </Select>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search quizzes..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-10 w-64" />
          </div>
        </div>
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-left text-muted-foreground bg-muted/50">
                  <th className="p-4 font-medium">Quiz</th>
                  <th className="p-4 font-medium">Lesson</th>
                  <th className="p-4 font-medium">Course</th>
                  <th className="p-4 font-medium">Questions</th>
                  <th className="p-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((q) => (
                  <tr key={q.quiz.id} className="border-b last:border-0 hover:bg-muted/30">
                    <td className="p-4 font-medium flex items-center gap-2"><Brain className="h-4 w-4 text-purple-500" /> {q.quiz.title}</td>
                    <td className="p-4 text-muted-foreground">{q.lessonTitle}</td>
                    <td className="p-4 text-muted-foreground">{q.courseTitle}</td>
                    <td className="p-4"><Badge variant="secondary">{q.quiz.questions.length} questions</Badge></td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">Edit Quiz</Button>
                        <Link href={`/courses/${q.courseId}`} target="_blank">
                          <Button variant="ghost" size="icon" className="h-8 w-8"><ExternalLink className="h-4 w-4" /></Button>
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 text-center text-sm text-muted-foreground border-t">
            Total {filtered.length} quizzes
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
