"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, BookOpen, FileCode, Plus, Brain, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { courses } from "@/data/courses"

export default function AdminEditCoursePage() {
  const params = useParams()
  const course = courses.find((c) => c.id === params.courseId)

  if (!course) {
    return <div className="text-center py-20"><h2 className="text-2xl font-bold">Course nahi mila</h2><Link href="/admin/courses"><Button variant="outline" className="mt-4">Back</Button></Link></div>
  }

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/admin/courses"><Button variant="ghost" size="icon"><ArrowLeft className="h-5 w-5" /></Button></Link>
          <div>
            <h1 className="text-2xl font-bold">Edit Course: {course.title}</h1>
            <p className="text-muted-foreground text-sm">Course details edit karein</p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader><CardTitle>Course Details</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Course Title</label>
                  <Input defaultValue={course.title} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Course ID</label>
                  <Input defaultValue={course.id} disabled />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Description</label>
                <Textarea defaultValue={course.description} rows={3} />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Long Description</label>
                <Textarea defaultValue={course.longDescription} rows={4} />
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Difficulty</label>
                  <Input defaultValue={course.difficulty} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Duration</label>
                  <Input defaultValue={course.duration} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Category</label>
                  <Input defaultValue={course.category} />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2"><BookOpen className="h-5 w-5" /> Modules & Lessons</CardTitle>
                <Button size="sm" className="gap-1"><Plus className="h-4 w-4" /> Add Module</Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {course.modules.map((module, mIndex) => (
                <div key={module.id} className="border rounded-lg overflow-hidden">
                  <div className="bg-muted/50 px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center justify-center w-7 h-7 rounded-full bg-primary/10 text-primary text-xs font-bold">{module.order}</span>
                      <span className="font-medium text-sm">{module.title}</span>
                      <Badge variant="outline" className="text-xs">{module.lessons.length} lessons</Badge>
                    </div>
                    <div className="flex items-center gap-1">
                      <Button variant="ghost" size="sm" className="h-7 text-xs"><FileCode className="h-3 w-3 mr-1" /> Add Lesson</Button>
                      <Button variant="ghost" size="icon" className="h-7 w-7 text-destructive"><Trash2 className="h-3.5 w-3.5" /></Button>
                    </div>
                  </div>
                  <div className="divide-y">
                    {module.lessons.map((lesson) => (
                      <div key={lesson.id} className="px-4 py-2.5 flex items-center justify-between text-sm hover:bg-muted/30">
                        <div className="flex items-center gap-3">
                          <span className="text-xs text-muted-foreground w-5">{lesson.order}.</span>
                          <span>{lesson.title}</span>
                          <span className="text-xs text-muted-foreground">{lesson.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Button variant="ghost" size="icon" className="h-6 w-6"><FileCode className="h-3 w-3" /></Button>
                          {lesson.content.quiz && <Brain className="h-3 w-3 text-purple-500" />}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader><CardTitle>Course Stats</CardTitle></CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="flex justify-between"><span className="text-muted-foreground">Modules</span><span className="font-medium">{course.modules.length}</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Lessons</span><span className="font-medium">{course.lessonsCount}</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Difficulty</span><Badge variant={course.difficulty === "beginner" ? "success" : course.difficulty === "intermediate" ? "warning" : "destructive"}>{course.difficulty}</Badge></div>
              <Separator />
              <Button className="w-full" variant="default">Save Changes</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
