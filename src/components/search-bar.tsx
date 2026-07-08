"use client"

import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Search, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { courses } from "@/data/courses"
import { cn } from "@/lib/utils"

export function SearchBar({ className }: { className?: string }) {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<{ id: string; title: string; category: string; matchType: string }[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  useEffect(() => {
    if (query.length < 2) {
      setResults([])
      return
    }
    const q = query.toLowerCase()
    const searchResults: typeof results = []

    courses.forEach((course) => {
      if (course.title.toLowerCase().includes(q)) {
        searchResults.push({ id: course.id, title: course.title, category: course.category, matchType: "Course" })
      }
      course.modules.forEach((module) => {
        module.lessons.forEach((lesson) => {
          if (lesson.title.toLowerCase().includes(q)) {
            searchResults.push({
              id: `/courses/${course.id}/${module.id}/${lesson.id}`,
              title: lesson.title,
              category: course.title,
              matchType: "Lesson",
            })
          }
        })
      })
    })

    setResults(searchResults.slice(0, 8))
    setIsOpen(true)
  }, [query])

  return (
    <div ref={wrapperRef} className={cn("relative w-full max-w-xl", className)}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Courses aur topics search karein..."
          className="pl-10 pr-10 h-12 rounded-xl bg-background border-2 focus-visible:ring-primary"
          onFocus={() => query.length >= 2 && setIsOpen(true)}
        />
        {query && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8"
            onClick={() => { setQuery(""); setResults([]) }}
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>

      {isOpen && results.length > 0 && (
        <div className="absolute top-full mt-2 w-full bg-popover border rounded-xl shadow-2xl overflow-hidden z-50 animate-scale-in">
          {results.map((result) => (
            <button
              key={result.id}
              onClick={() => {
                setIsOpen(false)
                setQuery("")
                const path = result.matchType === "Course" ? `/courses/${result.id}` : result.id
                router.push(path)
              }}
              className="w-full flex items-center gap-3 px-4 py-3 hover:bg-accent transition-colors text-left"
            >
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{result.title}</p>
                <p className="text-xs text-muted-foreground">
                  {result.matchType} in {result.category}
                </p>
              </div>
              <span className="text-xs text-muted-foreground shrink-0">
                {result.matchType === "Course" ? "Course" : "Lesson"}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
