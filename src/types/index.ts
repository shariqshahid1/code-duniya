export interface Course {
  id: string
  title: string
  description: string
  longDescription: string
  category: string
  icon: string
  color: string
  difficulty: "beginner" | "intermediate" | "advanced"
  lessonsCount: number
  duration: string
  modules: Module[]
  prerequisites?: string[]
}

export interface Module {
  id: string
  title: string
  description: string
  order: number
  lessons: Lesson[]
}

export interface Lesson {
  id: string
  title: string
  description: string
  order: number
  content: LessonContent
  duration: string
}

export interface LessonContent {
  introduction: string
  sections: LessonSection[]
  codeExamples: CodeExample[]
  notes: string[]
  commonMistakes: CommonMistake[]
  interviewQuestions: string[]
  practiceExercises: PracticeExercise[]
  quiz: Quiz
}

export interface LessonSection {
  title: string
  explanation: string
  example?: string
}

export interface CodeExample {
  title: string
  code: string
  language: string
  output?: string
}

export interface CommonMistake {
  mistake: string
  correction: string
}

export interface PracticeExercise {
  question: string
  hint?: string
  difficulty: "easy" | "medium" | "hard"
}

export interface Quiz {
  id: string
  title: string
  questions: QuizQuestion[]
}

export interface QuizQuestion {
  id: string
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

export interface UserProgress {
  courseId: string
  completedLessons: string[]
  lastLessonId?: string
  quizScores: Record<string, number>
  startedAt: string
  completedAt?: string
}

export interface UserNote {
  id: string
  courseId: string
  lessonId: string
  content: string
  createdAt: string
  updatedAt: string
}

export interface Certificate {
  id: string
  courseId: string
  courseName: string
  issuedAt: string
  userId: string
  userName: string
}

export interface Category {
  id: string
  name: string
  slug: string
  description: string
  icon: string
  color: string
  courseCount: number
}
