"use client"

import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import { AlertCircle, ArrowLeft, ArrowRight, Award, Brain, CheckCircle, ChevronDown, ChevronRight, Circle, Code, Eye, FileQuestion, Lightbulb, Menu, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
// Sheet removed - using inline sidebar
import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism"
import { courses } from "@/data/courses"
import { useProgress } from "@/hooks/useProgress"

function LessonContent({ lesson, moduleTitle, courseId, isCompleted, onMarkComplete, onMarkIncomplete }: {
  lesson: any; moduleTitle: string; courseId: string;
  isCompleted: boolean; onMarkComplete: () => void; onMarkIncomplete: () => void
}) {
  const [showQuizResult, setShowQuizResult] = useState(false)
  const [quizScore, setQuizScore] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({})
  const [submitted, setSubmitted] = useState(false)
  const [selectedCodeIndex, setSelectedCodeIndex] = useState(0)

  const content = lesson?.content
  const quiz = content?.quiz

  if (!content) return <div className="text-center py-20"><h2 className="text-2xl font-bold">Content unavailable</h2></div>

  const handleAnswerSelect = (questionId: string, optionIndex: number) => {
    if (submitted) return
    setSelectedAnswers((prev) => ({ ...prev, [questionId]: optionIndex }))
  }

  const handleSubmitQuiz = () => {
    if (!quiz) return
    let score = 0
    quiz.questions.forEach((q: any) => {
      if (selectedAnswers[q.id] === q.correctAnswer) score++
    })
    setQuizScore(score)
    setShowQuizResult(true)
    setSubmitted(true)
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
      <div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <span>{moduleTitle}</span>
          <span>/</span>
          <span className="text-foreground font-medium">{lesson.title}</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-3">{lesson.title}</h1>
        <p className="text-muted-foreground text-lg">{lesson.description}</p>
        <div className="flex items-center gap-3 mt-4">
          <Badge variant="secondary">{lesson.duration}</Badge>
          {quiz && <Badge variant="secondary">{quiz.questions.length} Questions</Badge>}
        </div>
      </div>

      <Card className="border-primary/20 bg-primary/5">
        <CardContent className="p-6">
          <div className="flex items-start gap-3">
            <Lightbulb className="h-6 w-6 text-primary shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold mb-2">Introduction</h3>
              <p className="text-muted-foreground leading-relaxed">{content.introduction}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {content.sections?.map((section: any, index: number) => (
        <Card key={index}>
          <CardHeader><CardTitle className="text-xl">{section.title}</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">{section.explanation}</p>
            {section.example && (
              <div className="bg-muted rounded-lg p-4 border-l-4 border-primary">
                <p className="text-sm italic">&ldquo;{section.example}&rdquo;</p>
              </div>
            )}
          </CardContent>
        </Card>
      ))}

      {content.codeExamples?.length > 0 && (
        <Card>
          <CardHeader><CardTitle className="flex items-center gap-2"><Code className="h-5 w-5" /> Code Examples</CardTitle></CardHeader>
          <CardContent>
            {content.codeExamples.length > 1 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {content.codeExamples.map((ex: any, i: number) => (
                  <Button key={i} variant={selectedCodeIndex === i ? "default" : "outline"} size="sm" onClick={() => setSelectedCodeIndex(i)}>{ex.title}</Button>
                ))}
              </div>
            )}
            {content.codeExamples[selectedCodeIndex] && (
              <div className="space-y-4">
                <div className="rounded-lg overflow-hidden border">
                  <div className="bg-muted px-4 py-2 text-sm font-medium flex items-center gap-2">
                    <Code className="h-4 w-4" />
                    {content.codeExamples[selectedCodeIndex].title}
                    <Badge variant="outline" className="ml-auto">{content.codeExamples[selectedCodeIndex].language}</Badge>
                  </div>
                  <SyntaxHighlighter
                    language={content.codeExamples[selectedCodeIndex].language}
                    style={oneDark}
                    customStyle={{ margin: 0, borderRadius: 0, fontSize: "0.9rem" }}
                    showLineNumbers
                  >
                    {content.codeExamples[selectedCodeIndex].code}
                  </SyntaxHighlighter>
                </div>
                {content.codeExamples[selectedCodeIndex].output && (
                  <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900 rounded-lg p-4">
                    <div className="flex items-center gap-2 text-sm font-medium text-green-700 dark:text-green-400 mb-2">
                      <Eye className="h-4 w-4" /> Output
                    </div>
                    <p className="text-sm">{content.codeExamples[selectedCodeIndex].output}</p>
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {content.notes?.length > 0 && (
        <Card>
          <CardHeader><CardTitle className="flex items-center gap-2"><FileQuestion className="h-5 w-5" /> Important Notes</CardTitle></CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {content.notes.map((note: string, i: number) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-primary mt-1.5">•</span>
                  <span className="text-muted-foreground">{note}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {content.commonMistakes?.length > 0 && (
        <Card>
          <CardHeader><CardTitle className="flex items-center gap-2 text-destructive"><AlertCircle className="h-5 w-5" /> Common Mistakes</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            {content.commonMistakes.map((cm: any, i: number) => (
              <div key={i} className="border rounded-lg p-4">
                <div className="mb-2">
                  <Badge variant="destructive" className="mb-1">❌ Mistake</Badge>
                  <p className="text-sm mt-1">{cm.mistake}</p>
                </div>
                <div>
                  <Badge variant="success" className="mb-1">✅ Correction</Badge>
                  <p className="text-sm mt-1">{cm.correction}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      {content.interviewQuestions?.length > 0 && (
        <Card>
          <CardHeader><CardTitle className="flex items-center gap-2"><MessageSquare className="h-5 w-5" /> Interview Questions</CardTitle></CardHeader>
          <CardContent>
            <ol className="space-y-3 list-decimal list-inside">
              {content.interviewQuestions.map((q: string, i: number) => (
                <li key={i} className="text-muted-foreground">{q}</li>
              ))}
            </ol>
          </CardContent>
        </Card>
      )}

      {content.practiceExercises?.length > 0 && (
        <Card>
          <CardHeader><CardTitle className="flex items-center gap-2"><Award className="h-5 w-5" /> Practice Exercises</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            {content.practiceExercises.map((ex: any, i: number) => (
              <div key={i} className="border rounded-lg p-4">
                <div className="flex items-start justify-between mb-2">
                  <p className="font-medium text-sm">Exercise {i + 1}: {ex.question}</p>
                  <Badge variant={ex.difficulty === "easy" ? "success" : ex.difficulty === "medium" ? "warning" : "destructive"} className="shrink-0 ml-2">{ex.difficulty}</Badge>
                </div>
                {ex.hint && <p className="text-sm text-muted-foreground mt-2">💡 Hint: {ex.hint}</p>}
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      {quiz && (
        <Card className="border-primary/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Brain className="h-5 w-5" /> {quiz.title}</CardTitle>
            <CardDescription>Apni knowledge test karein. {quiz.questions.length} questions hain.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {quiz.questions.map((q: any, qIndex: number) => {
              const selected = selectedAnswers[q.id]
              const showResult = submitted && selected !== undefined
              return (
                <div key={q.id} className="space-y-3">
                  <p className="font-medium">{qIndex + 1}. {q.question}</p>
                  <div className="space-y-2">
                    {q.options.map((option: string, oIndex: number) => {
                      const isSelected = selected === oIndex
                      const isCorrect = oIndex === q.correctAnswer
                      let btnClass = "w-full justify-start text-left h-auto py-3 px-4"
                      if (showResult && isCorrect) btnClass += " bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 border-green-500"
                      else if (showResult && isSelected && !isCorrect) btnClass += " bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400 border-red-500"
                      return (
                        <Button
                          key={oIndex}
                          variant={showResult && isCorrect ? "default" : showResult && isSelected ? "secondary" : "outline"}
                          className={btnClass}
                          onClick={() => handleAnswerSelect(q.id, oIndex)}
                          disabled={submitted}
                        >
                          <span className="w-6 h-6 rounded-full border flex items-center justify-center text-xs mr-3 shrink-0">{String.fromCharCode(65 + oIndex)}</span>
                          {option}
                        </Button>
                      )
                    })}
                  </div>
                  {showResult && (
                    <div className={`text-sm p-3 rounded-lg ${selected === q.correctAnswer ? "bg-green-50 dark:bg-green-950/20 text-green-700" : "bg-red-50 dark:bg-red-950/20 text-red-700"}`}>
                      {selected === q.correctAnswer ? "✅ Sahi jawab!" : "❌ Galat jawab!"}
                      <br /><span className="text-muted-foreground">{q.explanation}</span>
                    </div>
                  )}
                </div>
              )
            })}
            {!submitted && (
              <Button onClick={handleSubmitQuiz} className="w-full" size="lg" disabled={Object.keys(selectedAnswers).length !== quiz.questions.length}>
                Submit Quiz
              </Button>
            )}
            {showQuizResult && (
              <div className="text-center py-6 space-y-4">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10">
                  <span className="text-3xl font-bold text-primary">{quizScore}/{quiz.questions.length}</span>
                </div>
                <p className="text-lg font-medium">
                  {quizScore === quiz.questions.length ? "🎉 Perfect Score! Shandar!" : quizScore >= quiz.questions.length / 2 ? "👏 Aacha hai! Thoda aur practice karein." : "💪 Practice makes perfect! Dobara try karein."}
                </p>
                <Progress value={(quizScore / quiz.questions.length) * 100} className="h-2 max-w-xs mx-auto" />
                <Button variant="outline" onClick={() => { setSubmitted(false); setSelectedAnswers({}); setShowQuizResult(false) }}>Dobara Try Karein</Button>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      <div className="flex items-center gap-4 py-6">
        {isCompleted ? (
          <div className="flex items-center gap-3">
            <CheckCircle className="h-6 w-6 text-green-500" />
            <span className="font-medium text-green-600 dark:text-green-400">Lesson Completed!</span>
            <Button variant="outline" size="sm" onClick={onMarkIncomplete}>Mark as Incomplete</Button>
          </div>
        ) : (
          <Button size="lg" className="gap-2" onClick={onMarkComplete}>
            <CheckCircle className="h-5 w-5" /> Mark as Completed
          </Button>
        )}
      </div>
    </div>
  )
}

function LessonSidebar({ modules, courseId, currentLessonId }: { modules: any[]; courseId: string; currentLessonId: string }) {
  const { isLessonComplete } = useProgress(courseId)

  return (
    <div className="w-72 shrink-0 border-r bg-muted/30 hidden lg:block">
      <ScrollArea className="h-[calc(100vh-4rem)]">
        <div className="p-4 space-y-2">
          <Link href={`/courses/${courseId}`} className="block text-sm font-medium text-muted-foreground hover:text-foreground mb-4 px-3 py-2 rounded-lg hover:bg-accent transition-colors">
            ← Back to Course
          </Link>
          {modules.map((module: any) => {
            const isModuleActive = module.lessons.some((l: any) => l.id === currentLessonId)
            return (
              <Collapsible key={module.id} defaultOpen={isModuleActive}>
                <CollapsibleTrigger className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-accent transition-colors">
                  <span className="truncate">{module.title}</span>
                  {isModuleActive ? <ChevronDown className="h-4 w-4 shrink-0" /> : <ChevronRight className="h-4 w-4 shrink-0" />}
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="ml-2 mt-1 space-y-0.5">
                    {module.lessons.map((lesson: any) => {
                      const isActive = lesson.id === currentLessonId
                      const isCompleted = isLessonComplete(lesson.id)
                      return (
                        <Link key={lesson.id} href={`/courses/${courseId}/${module.id}/${lesson.id}`}
                          className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${isActive ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground hover:text-foreground hover:bg-accent"}`}>
                          {isCompleted ? <CheckCircle className="h-4 w-4 text-green-500 shrink-0" /> : isActive ? <Circle className="h-4 w-4 fill-primary shrink-0" /> : <Circle className="h-4 w-4 shrink-0" />}
                          <span className="truncate">{lesson.title}</span>
                        </Link>
                      )
                    })}
                  </div>
                </CollapsibleContent>
              </Collapsible>
            )
          })}
        </div>
      </ScrollArea>
    </div>
  )
}

export default function LessonPage() {
  const params = useParams()
  const router = useRouter()
  const courseId = params.courseId as string
  const lessonId = params.lessonId as string

  const course = courses.find((c) => c.id === courseId)
  const { isLessonComplete, markLessonComplete, markLessonIncomplete } = useProgress(courseId)

  if (!course) {
    return <div className="container mx-auto px-4 py-20 text-center"><h2 className="text-2xl font-bold mb-4">Course nahi mila</h2><Link href="/courses"><Button>Courses par jayein</Button></Link></div>
  }

  let currentModule = course.modules.find((m) => m.id === params.moduleId)
  if (!currentModule) {
    currentModule = course.modules.find((m) => m.lessons.some((l) => l.id === lessonId))
  }
  if (!currentModule) {
    return <div className="container mx-auto px-4 py-20 text-center"><h2 className="text-2xl font-bold">Lesson nahi mila</h2></div>
  }

  const lesson = currentModule.lessons.find((l) => l.id === lessonId)
  if (!lesson) {
    return <div className="container mx-auto px-4 py-20 text-center"><h2 className="text-2xl font-bold">Lesson nahi mila</h2></div>
  }

  const allLessons = course.modules.flatMap((m) => m.lessons)
  const currentIndex = allLessons.findIndex((l) => l.id === lessonId)
  const prevLesson = currentIndex > 0 ? allLessons[currentIndex - 1] : null
  const nextLesson = currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null
  const completed = isLessonComplete(lessonId)

  function findModuleIdForLesson(lessonId: string): string | null {
    if (!course) return null
    for (const m of course.modules) {
      if (m.lessons.some((l) => l.id === lessonId)) return m.id
    }
    return null
  }

  return (
    <div className="flex min-h-[calc(100vh-4rem)]">
      <LessonSidebar modules={course.modules} courseId={courseId} currentLessonId={lessonId} />

      <div className="flex-1 min-w-0">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between mb-8">
            <Link href={`/courses/${courseId}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4" /> {course.title}
            </Link>
            <div className="flex items-center gap-2">
              {prevLesson && (() => {
                const modId = findModuleIdForLesson(prevLesson.id)
                return modId ? <Button variant="outline" size="sm" className="gap-1" onClick={() => router.push(`/courses/${courseId}/${modId}/${prevLesson.id}`)}><ArrowLeft className="h-4 w-4" /> Previous</Button> : null
              })()}
              {nextLesson && (() => {
                const modId = findModuleIdForLesson(nextLesson.id)
                return modId ? <Button size="sm" className="gap-1" onClick={() => router.push(`/courses/${courseId}/${modId}/${nextLesson.id}`)}>Next <ArrowRight className="h-4 w-4" /></Button> : null
              })()}
            </div>
          </div>

          <LessonContent
            lesson={lesson}
            moduleTitle={currentModule.title}
            courseId={courseId}
            isCompleted={completed}
            onMarkComplete={() => markLessonComplete(lessonId)}
            onMarkIncomplete={() => markLessonIncomplete(lessonId)}
          />

          <div className="flex items-center justify-between mt-12 pt-8 border-t">
            <div className="flex gap-2">
              {prevLesson && (() => {
                const modId = findModuleIdForLesson(prevLesson.id)
                return modId ? <Button variant="outline" className="gap-2" onClick={() => router.push(`/courses/${courseId}/${modId}/${prevLesson.id}`)}><ArrowLeft className="h-4 w-4" /> Previous Lesson</Button> : null
              })()}
            </div>
            <div className="flex gap-2">
              {nextLesson && (() => {
                const modId = findModuleIdForLesson(nextLesson.id)
                return modId ? <Button className="gap-2" onClick={() => router.push(`/courses/${courseId}/${modId}/${nextLesson.id}`)}>Next Lesson <ArrowRight className="h-4 w-4" /></Button> : null
              })()}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
