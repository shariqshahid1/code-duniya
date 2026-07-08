"use client"

import Link from "next/link"
import { BookOpen, ExternalLink, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { courses } from "@/data/courses"

const courseIcons: Record<string, string> = {
  html: "🔴", css: "🔵", javascript: "🟡", typescript: "🔷", react: "💠", nextjs: "⬛",
  nodejs: "🟢", express: "⬜", mongodb: "🟩", sql: "🗄️", python: "🐍", "c-lang": "⚙️",
  cpp: "⚡", csharp: "💜", java: "☕", php: "🐘", laravel: "🔥", flutter: "📱",
  dart: "🎯", git: "🔀", dsa: "📊", "ai-ml": "🤖", cybersecurity: "🛡️",
}

export default function AdminCoursesPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Courses</h1>
          <p className="text-muted-foreground mt-1">Manage all courses</p>
        </div>
        <Button className="gap-2"><Plus className="h-4 w-4" /> Add Course</Button>
      </div>

      <div className="grid gap-4">
        {courses.map((course) => (
          <Card key={course.id}>
            <CardContent className="p-4">
              <div className="flex items-center gap-4">
                <span className="text-3xl">{courseIcons[course.id] || "📚"}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold">{course.title}</h3>
                    <Badge variant={course.difficulty === "beginner" ? "success" : course.difficulty === "intermediate" ? "warning" : "destructive"} className="text-xs">{course.difficulty}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-1">{course.description}</p>
                  <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                    <span>{course.modules.length} modules</span>
                    <span>{course.lessonsCount} lessons</span>
                    <span>{course.duration}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <Link href={`/admin/courses/${course.id}`}>
                    <Button variant="outline" size="sm">Edit</Button>
                  </Link>
                  <Link href={`/courses/${course.id}`} target="_blank">
                    <Button variant="ghost" size="icon" className="h-8 w-8"><ExternalLink className="h-4 w-4" /></Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
