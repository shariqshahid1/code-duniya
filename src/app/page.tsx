import Link from "next/link"
import { ArrowRight, BookOpen, CheckCircle, Code, GraduationCap, Languages, Play, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SearchBar } from "@/components/search-bar"
import { courses } from "@/data/courses"
import { categories } from "@/data/categories"
import { features } from "@/data/features"

const courseIcons: Record<string, string> = {
  html: "🔴", css: "🔵", javascript: "🟡", typescript: "🔷", react: "💠", nextjs: "⬛",
  nodejs: "🟢", express: "⬜", mongodb: "🟩", sql: "🗄️", python: "🐍", "c-lang": "⚙️",
  cpp: "⚡", csharp: "💜", java: "☕", php: "🐘", laravel: "🔥", flutter: "📱",
  dart: "🎯", git: "🔀", dsa: "📊", "ai-ml": "🤖", cybersecurity: "🛡️",
}

const categoryIcons: Record<string, React.ReactNode> = {
  Monitor: <Code className="h-6 w-6" />,
  Server: <Code className="h-6 w-6" />,
  Smartphone: <Code className="h-6 w-6" />,
  Brain: <Code className="h-6 w-6" />,
  Code: <Code className="h-6 w-6" />,
  Shield: <Code className="h-6 w-6" />,
  Database: <Code className="h-6 w-6" />,
}

const iconMap: Record<string, React.ReactNode> = {
  Languages: <Languages className="h-6 w-6" />,
  Code: <Code className="h-6 w-6" />,
  ArrowRight: <ArrowRight className="h-6 w-6" />,
  Brain: <Code className="h-6 w-6" />,
  Play: <Play className="h-6 w-6" />,
  ChartBar: <Code className="h-6 w-6" />,
}

export default function HomePage() {
  const featuredCourses = courses.slice(0, 8)

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-background border-b">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        <div className="container mx-auto px-4 py-20 md:py-32 relative">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border bg-muted/50 text-sm text-muted-foreground">
              <GraduationCap className="h-4 w-4" />
              <span>Free Programming Courses in Roman English</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight">
              Programming Seekhein{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400">
                Roman English
              </span>{" "}
              Mein
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              CodeDuniya par free mein programming seekhein. Asaan Roman English mein har programming language ka beginner se advanced level tak complete course.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <SearchBar />
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-green-500" /> {courses.length}+ Courses</span>
              <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-green-500" /> Free Forever</span>
              <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-green-500" /> Roman English</span>
              <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-green-500" /> Beginner Friendly</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: courses.length, label: "Courses", icon: BookOpen },
              { value: courses.reduce((s, c) => s + c.lessonsCount, 0), label: "Lessons", icon: BookOpen },
              { value: 23, label: "Topics", icon: Code },
              { value: "100%", label: "Free", icon: Users },
            ].map((stat) => {
              const Icon = stat.icon
              return (
                <div key={stat.label} className="text-center space-y-1">
                  <div className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</div>
                  <div className="flex items-center justify-center gap-1.5 text-sm text-muted-foreground">
                    <Icon className="h-4 w-4" /> {stat.label}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Categories</h2>
            <p className="text-muted-foreground">Apni interest ke hisaab se category choose karein aur seekhna shuru karein</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {categories.map((category) => (
              <Link key={category.id} href={`/courses?category=${category.slug}`}>
                <Card className="group h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden">
                  <div className={`h-1.5 bg-gradient-to-r ${category.color}`} />
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                      {categoryIcons[category.icon] || <Code className="h-6 w-6" />}
                    </div>
                    <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">{category.name}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{category.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{category.courseCount} courses</span>
                      <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-16 md:py-24 bg-muted/30 border-y">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Courses</h2>
              <p className="text-muted-foreground max-w-xl">Yeh hain hamare most popular courses jo aapko zaroor seekhne chahiye</p>
            </div>
            <Link href="/courses" className="hidden sm:flex items-center gap-2 text-sm font-medium text-primary hover:underline">
              All Courses <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredCourses.map((course) => (
              <Link key={course.id} href={`/courses/${course.id}`}>
                <Card className="group h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden flex flex-col">
                  <div className={`h-2 bg-gradient-to-r ${course.color}`} />
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <span className="text-3xl">{courseIcons[course.id] || "📚"}</span>
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
                  <CardFooter className="mt-auto flex items-center justify-between text-sm text-muted-foreground">
                    <span>{course.lessonsCount} Lessons</span>
                    <span>{course.duration}</span>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8 sm:hidden">
            <Link href="/courses">
              <Button variant="outline" className="gap-2">
                All Courses <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Kyun CodeDuniya?</h2>
            <p className="text-muted-foreground">Yeh kuch reasons hain ki kyun aapko CodeDuniya par seekhna chahiye</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <Card key={feature.title} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${feature.color}`}>
                    {iconMap[feature.icon] || <Code className="h-6 w-6" />}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-800 dark:to-blue-800">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Aaj Hi Seekhna Shuru Karein</h2>
            <p className="text-lg text-purple-100">Free mein programming seekhein Roman English mein. Koi credit card nahi, koi hidden fee nahi.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/courses">
                <Button size="lg" variant="secondary" className="gap-2 text-base px-8">
                  <BookOpen className="h-5 w-5" /> Courses Dekhein
                </Button>
              </Link>
              <Link href="/playground">
                <Button size="lg" variant="outline" className="gap-2 text-base px-8 bg-transparent text-white border-white hover:bg-white/20">
                  <Play className="h-5 w-5" /> Try Playground
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-primary-foreground font-bold text-sm">
                  C
                </div>
                <span className="font-bold text-lg">Code<span className="text-primary">Duniya</span></span>
              </div>
              <p className="text-sm text-muted-foreground">Free programming courses in Roman English. Sab ke liye coding seekhna asaan aur accessible.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Courses</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/courses/html" className="hover:text-foreground transition-colors">HTML</Link></li>
                <li><Link href="/courses/css" className="hover:text-foreground transition-colors">CSS</Link></li>
                <li><Link href="/courses/javascript" className="hover:text-foreground transition-colors">JavaScript</Link></li>
                <li><Link href="/courses/react" className="hover:text-foreground transition-colors">React</Link></li>
                <li><Link href="/courses/python" className="hover:text-foreground transition-colors">Python</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/courses" className="hover:text-foreground transition-colors">All Courses</Link></li>
                <li><Link href="/playground" className="hover:text-foreground transition-colors">Code Playground</Link></li>
                <li><Link href="/dashboard" className="hover:text-foreground transition-colors">Dashboard</Link></li>
                <li><Link href="/notes" className="hover:text-foreground transition-colors">Notes</Link></li>
                <li><Link href="/certificates" className="hover:text-foreground transition-colors">Certificates</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Categories</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/courses?category=frontend" className="hover:text-foreground transition-colors">Frontend</Link></li>
                <li><Link href="/courses?category=backend" className="hover:text-foreground transition-colors">Backend</Link></li>
                <li><Link href="/courses?category=mobile" className="hover:text-foreground transition-colors">Mobile</Link></li>
                <li><Link href="/courses?category=ai-data-science" className="hover:text-foreground transition-colors">AI & Data Science</Link></li>
                <li><Link href="/courses?category=cyber-security" className="hover:text-foreground transition-colors">Cyber Security</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} CodeDuniya. All rights reserved. Free programming education for everyone.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
