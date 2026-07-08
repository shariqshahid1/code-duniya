import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "CodeDuniya - Free Programming Courses in Roman English",
    template: "%s | CodeDuniya",
  },
  description: "CodeDuniya par free mein programming seekhein Roman English mein. HTML, CSS, JavaScript, React, Python aur bhi bahut si languages seekhein beginner se advanced level tak.",
  keywords: ["programming", "coding", "Roman English", "free courses", "HTML", "CSS", "JavaScript", "React", "Next.js", "Python"],
  openGraph: {
    title: "CodeDuniya - Free Programming Courses in Roman English",
    description: "CodeDuniya par free mein programming seekhein Roman English mein.",
    type: "website",
    siteName: "CodeDuniya",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header />
          <main className="flex-1">{children}</main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
