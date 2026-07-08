"use client"

import { Suspense, useState, useEffect } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { ArrowLeft, FileCode, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { courses } from "@/data/courses"
import { categories } from "@/data/categories"

const courseIcons: Record<string, string> = {
  html: "🔴", css: "🔵", javascript: "🟡", typescript: "🔷", react: "💠", nextjs: "⬛",
  nodejs: "🟢", express: "⬜", mongodb: "🟩", sql: "🗄️", python: "🐍", "c-lang": "⚙️",
  cpp: "⚡", csharp: "💜", java: "☕", php: "🐘", laravel: "🔥", flutter: "📱",
  dart: "🎯", git: "🔀", dsa: "📊", "ai-ml": "🤖", cybersecurity: "🛡️",
}

function CoursesPageContent() {
  const searchParams = useSearchParams()
  const [search, setSearch] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(searchParams.get("category") || null)

  useEffect(() => {
    const cat = searchParams.get("category")
    if (cat) setSelectedCategory(cat)
  }, [searchParams])

  const filtered = courses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(search.toLowerCase()) ||
      course.description.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = !selectedCategory || course.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="animate-fade-in">
      <div className="bg-muted/50 border-b">
        <div className="container mx-auto px-4 py-12">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-4">
            <ArrowLeft className="h-4 w-4" /> Home
          </Link>
          <h1 className="text-4xl font-bold mb-4">All Courses</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            {courses.length} courses available in Roman English.
          </p>
          <div className="relative mt-6 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Courses search karein..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 h-12"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-2 mb-8">
          <Button
            variant={!selectedCategory ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(null)}
          >
            All
          </Button>
          {categories.map((cat) => (
            <Button
              key={cat.id}
              variant={selectedCategory === cat.slug ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(selectedCategory === cat.slug ? null : cat.slug)}
            >
              {cat.name}
            </Button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <FileCode className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium mb-2">Koi course nahi mila</h3>
            <p className="text-muted-foreground">Different search terms try karein</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((course) => (
              <Link key={course.id} href={`/courses/${course.id}`}>
                <Card className="group h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${course.color}`} />
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="text-3xl">{courseIcons[course.id] || "📚"}</div>
                      <Badge variant={course.difficulty === "beginner" ? "success" : course.difficulty === "intermediate" ? "warning" : "destructive"}>
                        {course.difficulty}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl mt-2 group-hover:text-primary transition-colors">
                      {course.title}
                    </CardTitle>
                    <CardDescription className="text-sm line-clamp-2">
                      {course.description}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{course.lessonsCount} Lessons</span>
                    <span>{course.duration}</span>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default function CoursesPage() {
  return (
    <Suspense fallback={<div className="container mx-auto px-4 py-12"><p>Loading...</p></div>}>
      <CoursesPageContent />
    </Suspense>
  )
}
