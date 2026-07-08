"use client"

import { useMemo } from "react"
import Link from "next/link"
import { BookOpen, CheckCircle, Award, BarChart3, PlayCircle, ArrowRight, TrendingUp, BookMarked } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { courses } from "@/data/courses"

const courseIcons: Record<string, string> = {
  html: "🔴", css: "🔵", javascript: "🟡", typescript: "🔷", react: "💠", nextjs: "⬛",
  nodejs: "🟢", express: "⬜", mongodb: "🟩", sql: "🗄️", python: "🐍", "c-lang": "⚙️",
  cpp: "⚡", csharp: "💜", java: "☕", php: "🐘", laravel: "🔥", flutter: "📱",
  dart: "🎯", git: "🔀", dsa: "📊", "ai-ml": "🤖", cybersecurity: "🛡️",
}

export default function DashboardPage() {
  const totalStats = useMemo(() => {
    let totalLessons = 0, totalCompleted = 0, completedCourses = 0, inProgressCourses = 0
    if (typeof window === "undefined") return { totalLessons: 0, totalCompleted: 0, completedCourses: 0, inProgressCourses: 0 }
    courses.forEach((course) => {
      const ls = course.modules.reduce((s, m) => s + m.lessons.length, 0)
      totalLessons += ls
      try {
        const saved = localStorage.getItem(`progress-${course.id}`)
        if (saved) {
          const p = JSON.parse(saved)
          const c = p.completedLessons?.length || 0
          totalCompleted += c
          if (c === ls) completedCourses++
          else if (c > 0) inProgressCourses++
        }
      } catch {}
    })
    return { totalLessons, totalCompleted, completedCourses, inProgressCourses }
  }, [])

  const getCourseProgress = (courseId: string) => {
    try {
      const saved = localStorage.getItem(`progress-${courseId}`)
      if (!saved) return null
      const p = JSON.parse(saved)
      const course = courses.find((c) => c.id === courseId)
      if (!course) return null
      const total = course.modules.reduce((s, m) => s + m.lessons.length, 0)
      const completed = p.completedLessons?.length || 0
      const percent = total > 0 ? Math.round((completed / total) * 100) : 0
      return { completed, total, percent }
    } catch { return null }
  }

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground mt-1">Apni learning progress yahan dekhein</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Courses", value: courses.length, icon: BookOpen, color: "text-blue-500" },
          { label: "Completed", value: totalStats.completedCourses, icon: CheckCircle, color: "text-green-500" },
          { label: "In Progress", value: totalStats.inProgressCourses, icon: TrendingUp, color: "text-orange-500" },
          { label: "Lessons Done", value: totalStats.totalCompleted, icon: BarChart3, color: "text-purple-500" },
        ].map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.label}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <Icon className={`h-5 w-5 ${stat.color}`} />
                </div>
                <p className="text-3xl font-bold">{stat.value}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <PlayCircle className="h-5 w-5 text-primary" /> Continue Learning
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map((course) => {
            const prog = getCourseProgress(course.id)
            if (!prog || prog.percent === 0) return null
            return (
              <Link key={course.id} href={`/courses/${course.id}`}>
                <Card className="hover:shadow-md transition-all cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">{courseIcons[course.id] || "📚"}</span>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm truncate">{course.title}</p>
                        <p className="text-xs text-muted-foreground">{prog.completed}/{prog.total} lessons</p>
                      </div>
                      <Badge variant={prog.percent === 100 ? "success" : "secondary"}>{prog.percent === 100 ? "Completed" : `${prog.percent}%`}</Badge>
                    </div>
                    <Progress value={prog.percent} className="h-1.5" />
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
        {totalStats.inProgressCourses === 0 && (
          <Card className="bg-muted/50 border-dashed">
            <CardContent className="p-12 text-center">
              <BookOpen className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium mb-2">Koi course in progress nahi hai</h3>
              <p className="text-muted-foreground mb-4">Ek course join karein aur seekhna shuru karein</p>
              <Link href="/courses"><Button>Browse Courses</Button></Link>
            </CardContent>
          </Card>
        )}
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <Link href="/notes">
          <Card className="hover:shadow-md transition-all cursor-pointer group">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <BookMarked className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold group-hover:text-primary transition-colors">My Notes</h3>
                <p className="text-sm text-muted-foreground">Apni personal notes dekhein aur edit karein</p>
              </div>
              <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </CardContent>
          </Card>
        </Link>
        <Link href="/certificates">
          <Card className="hover:shadow-md transition-all cursor-pointer group">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-yellow-500/10 flex items-center justify-center">
                <Award className="h-6 w-6 text-yellow-500" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold group-hover:text-primary transition-colors">Certificates</h3>
                <p className="text-sm text-muted-foreground">Apne certificates dekhein aur download karein</p>
              </div>
              <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  )
}
