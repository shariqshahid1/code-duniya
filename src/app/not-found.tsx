import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center px-6">
        <div className="text-8xl mb-6">🌍</div>
        <h1 className="text-6xl font-black mb-4">404</h1>
        <h2 className="text-2xl font-bold mb-4">Yeh page exist nahi karta</h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Ho sakta hai yeh page delete ho gaya ho, ya URL galat ho. 
          Wapas home page se start karein.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
        >
          ← Home par jayein
        </Link>
      </div>
    </div>
  )
}
