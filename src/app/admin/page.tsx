"use client"

import Link from "next/link"
import { BookOpen, FileCode, Brain, ArrowRight, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { courses } from "@/data/courses"

export default function AdminDashboard() {
  const totalLessons = courses.reduce((s, c) => s + c.lessonsCount, 0)
  const totalQuizzes = courses.reduce((s, c) => s + c.modules.reduce((ms, m) => ms + m.lessons.filter(l => l.content.quiz).length, 0), 0)

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="text-muted-foreground mt-1">CodeDuniya platform manage karein</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Total Courses", value: courses.length, icon: BookOpen, color: "text-blue-500" },
          { label: "Total Lessons", value: totalLessons, icon: FileCode, color: "text-green-500" },
          { label: "Total Quizzes", value: totalQuizzes, icon: Brain, color: "text-purple-500" },
          { label: "Categories", value: 7, icon: Users, color: "text-orange-500" },
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

      <div className="grid md:grid-cols-3 gap-6">
        <Link href="/admin/courses">
          <Card className="hover:shadow-lg transition-all cursor-pointer group">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-blue-500" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold group-hover:text-primary transition-colors">Manage Courses</h3>
                  <p className="text-sm text-muted-foreground">{courses.length} courses available</p>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </CardContent>
          </Card>
        </Link>
        <Link href="/admin/lessons">
          <Card className="hover:shadow-lg transition-all cursor-pointer group">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center">
                  <FileCode className="h-6 w-6 text-green-500" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold group-hover:text-primary transition-colors">Manage Lessons</h3>
                  <p className="text-sm text-muted-foreground">{totalLessons} lessons across courses</p>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </CardContent>
          </Card>
        </Link>
        <Link href="/admin/quizzes">
          <Card className="hover:shadow-lg transition-all cursor-pointer group">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center">
                  <Brain className="h-6 w-6 text-purple-500" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold group-hover:text-primary transition-colors">Manage Quizzes</h3>
                  <p className="text-sm text-muted-foreground">{totalQuizzes} quizzes available</p>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">All Courses Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-left text-muted-foreground">
                  <th className="pb-3 font-medium">Course</th>
                  <th className="pb-3 font-medium">Modules</th>
                  <th className="pb-3 font-medium">Lessons</th>
                  <th className="pb-3 font-medium">Difficulty</th>
                  <th className="pb-3 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((course) => (
                  <tr key={course.id} className="border-b last:border-0">
                    <td className="py-3 font-medium">{course.title}</td>
                    <td className="py-3 text-muted-foreground">{course.modules.length}</td>
                    <td className="py-3 text-muted-foreground">{course.lessonsCount}</td>
                    <td className="py-3">
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                        course.difficulty === "beginner" ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" :
                        course.difficulty === "intermediate" ? "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400" :
                        "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                      }`}>{course.difficulty}</span>
                    </td>
                    <td className="py-3">
                      <div className="flex gap-2">
                        <Link href={`/admin/courses/${course.id}`}>
                          <Button variant="outline" size="sm">Edit</Button>
                        </Link>
                        <Link href={`/courses/${course.id}`} target="_blank">
                          <Button variant="ghost" size="sm">View</Button>
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
