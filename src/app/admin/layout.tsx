"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BookOpen, FileCode, Brain, LayoutDashboard, ArrowLeft } from "lucide-react"
import { cn } from "@/lib/utils"

const sidebarLinks = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/courses", label: "Courses", icon: BookOpen },
  { href: "/admin/lessons", label: "Lessons", icon: FileCode },
  { href: "/admin/quizzes", label: "Quizzes", icon: Brain },
]

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <div className="flex min-h-[calc(100vh-4rem)]">
      <aside className="w-64 border-r bg-muted/30 hidden md:block shrink-0">
        <div className="p-4 space-y-1">
          <Link href="/" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 px-3 py-2 rounded-lg hover:bg-accent transition-colors">
            <ArrowLeft className="h-4 w-4" /> Main Site
          </Link>
          <div className="px-3 py-2 mb-4">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Admin Panel</p>
          </div>
          {sidebarLinks.map((link) => {
            const Icon = link.icon
            const isActive = pathname === link.href || (link.href !== "/admin" && pathname.startsWith(link.href))
            return (
              <Link key={link.href} href={link.href}
                className={cn("flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors", isActive ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground hover:bg-accent")}>
                <Icon className="h-5 w-5" /> {link.label}
              </Link>
            )
          })}
        </div>
      </aside>
      <main className="flex-1 min-w-0 p-6">{children}</main>
    </div>
  )
}
