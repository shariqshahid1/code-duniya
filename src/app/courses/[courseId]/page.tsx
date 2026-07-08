"use client"

import { useState } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { ArrowLeft, BookOpen, CheckCircle, ChevronDown, ChevronRight, Clock, FileText, Trophy, PlayCircle, GraduationCap, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { courses } from "@/data/courses"
import { useProgress } from "@/hooks/useProgress"

const courseIcons: Record<string, string> = {
  html: "🔴", css: "🔵", javascript: "🟡", typescript: "🔷", react: "💠", nextjs: "⬛",
  nodejs: "🟢", express: "⬜", mongodb: "🟩", sql: "🗄️", python: "🐍", "c-lang": "⚙️",
  cpp: "⚡", csharp: "💜", java: "☕", php: "🐘", laravel: "🔥", flutter: "📱",
  dart: "🎯", git: "🔀", dsa: "📊", "ai-ml": "🤖", cybersecurity: "🛡️",
}

export default function CourseOverviewPage() {
  const params = useParams()
  const courseId = params.courseId as string
  const course = courses.find((c) => c.id === courseId)
  const { progress, isLessonComplete, getProgressPercent } = useProgress(courseId)
  const [expandedModules, setExpandedModules] = useState<string[]>([])

  if (!course) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Course nahi mila</h2>
        <p className="text-muted-foreground mb-6">Ye course exist nahi karta</p>
        <Link href="/courses"><Button>Courses par jayein</Button></Link>
      </div>
    )
  }

  const toggleModule = (moduleId: string) => {
    setExpandedModules((prev) =>
      prev.includes(moduleId) ? prev.filter((id) => id !== moduleId) : [...prev, moduleId]
    )
  }

  const totalLessons = course.modules.reduce((sum, m) => sum + m.lessons.length, 0)
  const progressPercent = getProgressPercent(totalLessons)
  const allLessons = course.modules.flatMap((m) => m.lessons)
  const completedCount = progress.completedLessons.length

  const firstIncompleteLesson = allLessons.find((l) => !isLessonComplete(l.id))
  const continueLesson = firstIncompleteLesson || allLessons[0]
  const findModuleIdForLesson = (lessonId: string): string | null => {
    for (const m of course.modules) {
      if (m.lessons.some((l) => l.id === lessonId)) return m.id
    }
    return null
  }

  return (
    <div className="animate-fade-in">
      <div className="bg-gradient-to-br from-primary/5 to-transparent border-b">
        <div className="container mx-auto px-4 py-8">
          <Link href="/courses" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6">
            <ArrowLeft className="h-4 w-4" /> Back to Courses
          </Link>
          <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">{courseIcons[course.id] || "📚"}</span>
                <h1 className="text-3xl md:text-4xl font-bold">{course.title}</h1>
              </div>
              <p className="text-muted-foreground text-lg mb-4">{course.longDescription}</p>
              <div className="flex flex-wrap gap-3 mb-6">
                <Badge variant={course.difficulty === "beginner" ? "success" : course.difficulty === "intermediate" ? "warning" : "destructive"}>
                  {course.difficulty}
                </Badge>
                <Badge variant="secondary">{course.lessonsCount} Lessons</Badge>
                <Badge variant="secondary">{course.duration}</Badge>
              </div>
            </div>

            <Card className="lg:w-80 shrink-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><BarChart3 className="h-5 w-5" /> Your Progress</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">{progressPercent}%</div>
                  <p className="text-sm text-muted-foreground">Complete</p>
                </div>
                <Progress value={progressPercent} className="h-3" />
                <div className="flex justify-between text-sm">
                  <span>{completedCount} completed</span>
                  <span>{totalLessons} total</span>
                </div>
                {continueLesson && (() => {
                  const modId = findModuleIdForLesson(continueLesson.id)
                  return modId ? (
                    <Link href={`/courses/${course.id}/${modId}/${continueLesson.id}`}>
                      <Button className="w-full gap-2">
                        <PlayCircle className="h-4 w-4" />
                        {progressPercent > 0 ? "Continue Learning" : "Start Learning"}
                      </Button>
                    </Link>
                  ) : null
                })()}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <BookOpen className="h-6 w-6" /> Course Curriculum
            </h2>
            <p className="text-muted-foreground">{totalLessons} lessons • {course.modules.length} modules</p>

            {course.modules.map((module) => {
              const moduleLessons = module.lessons
              const completedModuleLessons = moduleLessons.filter((l) => isLessonComplete(l.id)).length
              const isExpanded = expandedModules.includes(module.id)

              return (
                <Collapsible key={module.id} open={isExpanded} onOpenChange={() => toggleModule(module.id)}>
                  <Card className="overflow-hidden">
                    <CollapsibleTrigger className="w-full">
                      <CardHeader className="cursor-pointer hover:bg-muted/50 transition-colors">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary font-semibold">
                              {module.order}
                            </div>
                            <div className="text-left">
                              <CardTitle className="text-lg">{module.title}</CardTitle>
                              <CardDescription>{module.description}</CardDescription>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-sm text-muted-foreground">
                              {completedModuleLessons}/{moduleLessons.length}
                            </span>
                            {isExpanded ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
                          </div>
                        </div>
                      </CardHeader>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <Separator />
                      <CardContent className="p-0">
                        {moduleLessons.map((lesson, index) => {
                          const completed = isLessonComplete(lesson.id)
                          const moduleId = module.id
                          return (
                            <Link
                              key={lesson.id}
                              href={`/courses/${course.id}/${moduleId}/${lesson.id}`}
                              className={`flex items-center gap-4 px-6 py-4 hover:bg-muted/50 transition-colors ${index < moduleLessons.length - 1 ? "border-b" : ""}`}
                            >
                              <div className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium ${completed ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" : "bg-muted text-muted-foreground"}`}>
                                {completed ? <CheckCircle className="h-4 w-4" /> : lesson.order}
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className={`text-sm font-medium truncate ${completed ? "text-muted-foreground line-through" : ""}`}>
                                  {lesson.title}
                                </p>
                                <p className="text-xs text-muted-foreground">{lesson.duration}</p>
                              </div>
                              {completed && <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />}
                            </Link>
                          )
                        })}
                      </CardContent>
                    </CollapsibleContent>
                  </Card>
                </Collapsible>
              )
            })}
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Trophy className="h-5 w-5 text-yellow-500" /> Course Stats
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { label: "Total Lessons", value: totalLessons, icon: FileText },
                  { label: "Completed", value: completedCount, icon: CheckCircle },
                  { label: "Modules", value: course.modules.length, icon: BookOpen },
                  { label: "Duration", value: course.duration, icon: Clock },
                ].map((stat) => {
                  const Icon = stat.icon
                  return (
                    <div key={stat.label} className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm">
                        <Icon className="h-4 w-4 text-muted-foreground" />
                        {stat.label}
                      </div>
                      <span className="font-semibold">{stat.value}</span>
                    </div>
                  )
                })}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
