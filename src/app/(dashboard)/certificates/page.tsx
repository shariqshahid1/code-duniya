"use client"

import { useMemo } from "react"
import Link from "next/link"
import { Award, Download, Share2, GraduationCap, CheckCircle, Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { courses } from "@/data/courses"
import { useCertificates } from "@/hooks/useCertificates"

function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric" }).format(date)
}

export default function CertificatesPage() {
  const { certificates, addCertificate, hasCertificate } = useCertificates()

  const completedCourses = useMemo(() => {
    if (typeof window === "undefined") return []
    return courses.filter((course) => {
      const totalLessons = course.modules.reduce((s, m) => s + m.lessons.length, 0)
      try {
        const saved = localStorage.getItem(`progress-${course.id}`)
        if (saved) {
          const p = JSON.parse(saved)
          return p.completedLessons?.length === totalLessons
        }
      } catch {}
      return false
    })
  }, [])

  const handleGenerateCertificate = (courseId: string, courseName: string) => {
    if (!hasCertificate(courseId)) {
      addCertificate(courseId, courseName, "Student")
    }
  }

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold">Certificates</h1>
        <p className="text-muted-foreground mt-1">Apne course completion certificates yahan dekhein</p>
      </div>

      {certificates.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2"><Trophy className="h-5 w-5 text-yellow-500" /> Earned Certificates</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert) => (
              <Dialog key={cert.id}>
                <DialogTrigger asChild>
                  <Card className="cursor-pointer hover:shadow-xl transition-all group">
                    <CardContent className="p-8 text-center space-y-4">
                      <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center">
                        <Award className="h-10 w-10 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{cert.courseName}</h3>
                        <p className="text-sm text-muted-foreground">Completed on {formatDate(new Date(cert.issuedAt))}</p>
                      </div>
                      <Badge variant="success" className="mx-auto">Verified</Badge>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle className="text-center">Certificate of Completion</DialogTitle>
                    <DialogDescription className="text-center">CodeDuniya</DialogDescription>
                  </DialogHeader>
                  <div className="text-center space-y-4 p-6">
                    <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center">
                      <Award className="h-12 w-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">{cert.courseName}</h3>
                    <p className="text-muted-foreground">Ye certificate {cert.userName} ko diya gaya hai course {cert.courseName} successfully complete karne par.</p>
                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                      <GraduationCap className="h-4 w-4" /><span>CodeDuniya</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Button variant="outline" className="gap-2"><Download className="h-4 w-4" /> Download</Button>
                      <Button variant="outline" className="gap-2"><Share2 className="h-4 w-4" /> Share</Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      )}

      <div>
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2"><GraduationCap className="h-5 w-5" /> Available Certificates</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {completedCourses.length === 0 ? (
            <Card className="col-span-full bg-muted/50 border-dashed">
              <CardContent className="p-12 text-center">
                <Award className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium mb-2">Koi certificate available nahi</h3>
                <p className="text-muted-foreground mb-4">Courses complete karein aur certificates hasil karein</p>
                <Link href="/courses"><Button>Courses Dekhein</Button></Link>
              </CardContent>
            </Card>
          ) : (
            completedCourses.map((course) => {
              const alreadyHas = hasCertificate(course.id)
              return (
                <Card key={course.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">{course.id === "html" ? "🔴" : course.id === "css" ? "🔵" : course.id === "javascript" ? "🟡" : "📚"}</span>
                      <div>
                        <h3 className="font-semibold">{course.title}</h3>
                        <p className="text-xs text-muted-foreground">Course Completed</p>
                      </div>
                    </div>
                    {alreadyHas ? (
                      <Badge variant="success" className="w-full justify-center py-1.5"><CheckCircle className="h-4 w-4 mr-1" /> Certificate Generated</Badge>
                    ) : (
                      <Button className="w-full gap-2" onClick={() => handleGenerateCertificate(course.id, course.title)}><Award className="h-4 w-4" /> Generate Certificate</Button>
                    )}
                  </CardContent>
                </Card>
              )
            })
          )}
        </div>
      </div>
    </div>
  )
}
