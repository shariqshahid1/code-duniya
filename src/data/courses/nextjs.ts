import { Course } from "@/types"

export const nextjsCourse: Course = {
  id: "nextjs",
  title: "Next.js",
  description: "Next.js seekhein - Full-stack React framework master karein",
  longDescription: "Next.js ek React framework hai jo production-ready web applications banane ke liye use hota hai. Is course mein aap App Router, server components, data fetching, routing, SEO, deployment seekhenge.",
  category: "frontend",
  icon: "FileJson",
  color: "from-black to-gray-800",
  difficulty: "intermediate",
  lessonsCount: 22,
  duration: "7 hours",
  prerequisites: ["React ka solid knowledge", "JavaScript ES6+"],
  modules: [
    {
      id: "nextjs-core",
      title: "Next.js Core",
      description: "Next.js fundamentals aur App Router",
      order: 1,
      lessons: [
        {
          id: "nextjs-what-is",
          title: "Next.js Kya Hai?",
          description: "Next.js ka matlab aur features samjhein",
          order: 1,
          content: {
            introduction: "Next.js ek React framework hai jo production-ready web applications banane mein help karta hai. Ye server-side rendering, static generation, API routes, aur bahut si features provide karta hai.",
            sections: [
              { title: "Next.js Kya Hai?", explanation: "Next.js Vercel ka ek React framework hai. Ye React ke upar build hota hai aur additional features provide karta hai - routing, data fetching, built-in optimization, bundling, compiling. React library hai, Next.js framework hai.", example: "Next.js = React + Routing + Data Fetching + Optimization" },
              { title: "Main Features", explanation: "Key features: File-based routing, SSR aur SSG dono support, API routes, Middleware, Image optimization, Font optimization, SEO support, Built-in CSS/Tailwind support, Server Components.", example: "App Router (2023+) aur Pages Router (old) - two routing approaches." },
              { title: "Next.js vs React", explanation: "React sirf UI library hai - routing, optimization, performance ka khud setup karna padta hai. Next.js sab built-in deta hai. Next.js production ke liye ready framework hai jisme developer experience bahut achha hai.", example: "React mein React Router alag lagana padta, Next.js mein file-based routing built-in hai." },
            ],
            codeExamples: [
              { title: "Next.js App Structure", language: "typescript", code: "// app/layout.tsx - Required layout file\nexport default function RootLayout({ children }) {\n    return (\n        <html lang=\"hi\">\n            <body>{children}</body>\n        </html>\n    );\n}\n\n// app/page.tsx - Home page\nexport default function Home() {\n    return <h1>Namaste Next.js!</h1>;\n}\n\n// app/about/page.tsx - /about route\nexport default function About() {\n    return <h1>About Page</h1>;\n}", output: "Basic Next.js app with home aur about route." },
            ],
            notes: ["Next.js React framework hai", "File-based routing use karta hai", "SSR, SSG, ISR sab support karta hai", "Vercel ne banaya hai"],
            commonMistakes: [{ mistake: "Next.js ko React se replace karna", correction: "Next.js React ke upar framework hai, replace nahi" }],
            interviewQuestions: ["Next.js kya hai?", "React aur Next.js mein kya antar hai?", "Next.js ke main features kaun se hain?"],
            practiceExercises: [{ question: "Next.js app create karein aur 3 pages banayein - home, about, contact.", difficulty: "easy" }],
            quiz: { id: "quiz-nextjs-intro", title: "Next.js Intro Quiz", questions: [
              { id: "q1", question: "Next.js kaunsa type ka framework hai?", options: ["CSS framework", "React framework", "Node framework", "Database"], correctAnswer: 1, explanation: "Next.js React framework hai." },
              { id: "q2", question: "Next.js ko kisne banaya?", options: ["Google", "Facebook", "Vercel", "Netlify"], correctAnswer: 2, explanation: "Next.js Vercel ne banaya." },
            ]},
          },
          duration: "15 min",
        },
        {
          id: "nextjs-app-router",
          title: "App Router",
          description: "Next.js App Router aur file-based routing",
          order: 2,
          content: {
            introduction: "Next.js App Router file system par based hai. app/ folder ke structure se routes automatically create hote hain. Ye Next.js 13.4+ ka recommended routing approach hai.",
            sections: [
              { title: "File System Routing", explanation: "app/ folder ke andar page.tsx files routes create karti hain. /about route ke liye app/about/page.tsx. Nested folders se nested routes. layout.tsx shared layout deta hai.", example: "app/about/page.tsx -> /about route" },
              { title: "Layouts aur Templates", explanation: "Layout.tsx nested routes ke liye shared wrapper hai. State preserve karta hai (re-mount nahi hota). Template.tsx bhi wrapper hai but har navigation par re-mount hota hai.", example: "app/layout.tsx -> Root layout, app/blog/layout.tsx -> Blog layout" },
            ],
            codeExamples: [
              { title: "App Router Structure", language: "typescript", code: "// app/layout.tsx (Root layout)\nexport default function RootLayout({ children }) {\n    return (\n        <html>\n            <body>\n                <header>My Site</header>\n                {children}\n                <footer>Footer</footer>\n            </body>\n        </html>\n    );\n}\n\n// app/page.tsx (Home page)\nexport default function Home() {\n    return <h1>Home Page</h1>;\n}\n\n// app/blog/page.tsx (/blog)\nexport default function Blog() {\n    return <h1>Blog Page</h1>;\n}\n\n// app/blog/[slug]/page.tsx (Dynamic route: /blog/hello-world)\nexport default function BlogPost({ params }) {\n    return <h1>Post: {params.slug}</h1>;\n}", output: "File-based routing with nested layouts aur dynamic routes." },
            ],
            notes: ["app/ folder mein page.tsx route create karta hai", "layout.tsx shared layout deta hai", "Dynamic routes [param] syntax se", "Nested folders nested routes banate hain"],
            commonMistakes: [{ mistake: "page.tsx ke bajaye index.tsx banana", correction: "App Router mein page.tsx use karein" }],
            interviewQuestions: ["App Router kya hai?", "Pages Router aur App Router mein kya difference hai?", "Layout.tsx aur template.tsx mein kya antar hai?"],
            practiceExercises: [{ question: "App Router ke saath nested layouts aur dynamic routes implement karein.", difficulty: "medium" }],
            quiz: { id: "quiz-nextjs-router", title: "App Router Quiz", questions: [
              { id: "q1", question: "App Router mein route create karne ke liye kaunsi file chahiye?", options: ["index.tsx", "route.tsx", "page.tsx", "view.tsx"], correctAnswer: 2, explanation: "page.tsx route create karta hai." },
              { id: "q2", question: "Dynamic route ke liye kaunsa syntax use hota hai?", options: ["[param]", "{param}", ":param", "$param"], correctAnswer: 0, explanation: "[param] dynamic route syntax hai." },
            ]},
          },
          duration: "20 min",
        },
        {
          id: "nextjs-data-fetching",
          title: "Data Fetching",
          description: "Next.js mein data fetch karna seekhein",
          order: 3,
          content: {
            introduction: "Next.js mein data fetch karne ke multiple tarike hain - server-side fetch, static generation, incremental static regeneration.",
            sections: [
              { title: "Server-Side Fetching", explanation: "Server Components mein directly async function se data fetch kar sakte hain. fetch() API Next.js mein extended hai jo automatic caching aur deduplication provide karta hai.", example: "async function getData() { const res = await fetch(url); return res.json(); }" },
              { title: "Caching Strategies", explanation: "fetch() ka cache: 'force-cache' (default, SSG), cache: 'no-store' (dynamic), next: { revalidate: 60 } (ISR). force-cached data build par fetch hota hai, no-store har request par, revalidate periodically.", example: "fetch(url, { next: { revalidate: 3600 } })" },
            ],
            codeExamples: [
              { title: "Data Fetching", language: "typescript", code: "// Server Component - Direct fetch (Recommended)\nasync function getPosts() {\n    const res = await fetch('https://api.example.com/posts', {\n        next: { revalidate: 60 } // ISR: every 60 seconds\n    });\n    if (!res.ok) throw new Error('Failed to fetch');\n    return res.json();\n}\n\nexport default async function BlogPage() {\n    const posts = await getPosts();\n    \n    return (\n        <div>\n            {posts.map(post => (\n                <article key={post.id}>\n                    <h2>{post.title}</h2>\n                    <p>{post.body}</p>\n                </article>\n            ))}\n        </div>\n    );\n}\n\n// Loading state\n// app/blog/loading.tsx\nexport default function Loading() {\n    return <div>Loading...</div>;\n}\n\n// Error state\n// app/blog/error.tsx\n'use client';\nexport default function Error({ error, reset }) {\n    return (\n        <div>\n            <h2>Error: {error.message}</h2>\n            <button onClick={reset}>Try Again</button>\n        </div>\n    );\n}", output: "Data fetch with ISR, loading state aur error boundary." },
            ],
            notes: ["Server Components mein direct fetch use karein", "fetch() caching built-in hai", "loading.tsx aur error.tsx automatic boundaries hain", "ISR: Incremental Static Regeneration"],
            commonMistakes: [{ mistake: "Client Components mein heavy data fetching karna", correction: "Server Components mein fetch karein, client sirf UI interactivity ke liye" }],
            interviewQuestions: ["Next.js mein data fetching ke tarike?", "ISR kya hai?", "Server aur Client Components mein data fetching mein kya antar hai?"],
            practiceExercises: [{ question: "Blog page banaye jo API se posts fetch kare with ISR, loading aur error states.", difficulty: "medium" }],
            quiz: { id: "quiz-nextjs-data", title: "Data Fetching Quiz", questions: [
              { id: "q1", question: "ISR ke liye fetch mein kaunsa option use hota hai?", options: ["revalidate", "cache", "ttl", "fresh"], correctAnswer: 0, explanation: "next: { revalidate: seconds }" },
              { id: "q2", question: "Dynamic data ke liye kaunsa cache option use karein?", options: ["force-cache", "no-store", "default", "only-cache"], correctAnswer: 1, explanation: "cache: 'no-store' har request par fetch karega." },
            ]},
          },
          duration: "20 min",
        },
        {
          id: "nextjs-components",
          title: "Server aur Client Components",
          description: "Server aur Client components ka difference samjhein",
          order: 4,
          content: {
            introduction: "Next.js 13+ mein do types ke components hain - Server Components (default) aur Client Components. Server Components server par render hote hain, Client Components browser mein.",
            sections: [
              { title: "Server Components", explanation: "Server Components default hain. Ye server par render hote hain. Directly database ya API access kar sakte hain. Bundle size mein include nahi hote. Sensitive data secure rehta hai.", example: "export default async function Page() { const data = await db.query(); return <div>...</div>; }" },
              { title: "Client Components", explanation: "Client Components browser mein render hote hain. 'use client' directive se declare karte hain. Hooks (useState, useEffect) use kar sakte hain. Event listeners, browser APIs access kar sakte hain.", example: "'use client'; export default function Counter() { const [count, setCount] = useState(0); return <button onClick={() => setCount(c => c+1)}>{count}</button>; }" },
            ],
            codeExamples: [
              { title: "Server vs Client Components", language: "typescript", code: "// Server Component (default) - app/page.tsx\nimport ClientButton from './ClientButton';\n\nexport default async function Home() {\n    // Direct database/api access\n    const posts = await fetch('https://api.example.com/posts').then(r => r.json());\n    \n    return (\n        <div>\n            <h1>Posts</h1>\n            {posts.map(post => (\n                <div key={post.id}>\n                    <h2>{post.title}</h2>\n                    <p>{post.body}</p>\n                    <ClientButton postId={post.id} />\n                </div>\n            ))}\n        </div>\n    );\n}\n\n// Client Component - 'use client'\n// app/ClientButton.tsx\n'use client';\nimport { useState } from 'react';\n\nexport default function ClientButton({ postId }) {\n    const [liked, setLiked] = useState(false);\n    \n    return (\n        <button onClick={() => setLiked(!liked)}>\n            {liked ? 'Liked' : 'Like'} ({postId})\n        </button>\n    );\n}", output: "Server Component data fetch karega, Client Component interactivity handle karega." },
            ],
            notes: ["Server Components default hain", "Client Components ke liye 'use client' directive", "Server Component lighter bundle deta hai", "Client Component hooks aur events use kar sakta hai"],
            commonMistakes: [{ mistake: "Har component mein 'use client' laga dena", correction: "Sirf interactivity wale components mein 'use client' lagayein" }],
            interviewQuestions: ["Server aur Client Component mein kya antar hai?", "'use client' kab use karein?", "Server Components ke kya fayde hain?"],
            practiceExercises: [{ question: "Server Component mein data fetch karein aur Client Component mein interactive like button lagayein.", difficulty: "medium" }],
            quiz: { id: "quiz-nextjs-components", title: "Components Quiz", questions: [
              { id: "q1", question: "Next.js mein default component kaunsa hai?", options: ["Client", "Server", "Static", "Dynamic"], correctAnswer: 1, explanation: "Default Server Components hain." },
              { id: "q2", question: "Client Component declare karne ke liye kaunsa directive use hota hai?", options: ["'use client'", "'use server'", "'use browser'", "'use frontend'"], correctAnswer: 0, explanation: "'use client' se client component declare karte hain." },
            ]},
          },
          duration: "20 min",
        },
        {
          id: "nextjs-api-routes",
          title: "API Routes",
          description: "Next.js API routes banana seekhein",
          order: 5,
          content: {
            introduction: "Next.js API routes se aap backend API endpoints bana sakte hain. Ye route handlers hain jo server par run hote hain aur API endpoints provide karte hain.",
            sections: [
              { title: "Route Handlers", explanation: "Route handlers app/api folder mein route.ts files se bante hain. GET, POST, PUT, DELETE, PATCH methods handle karte hain. Request aur Response objects use karte hain.", example: "app/api/users/route.ts -> /api/users endpoint" },
              { title: "API Routes Implementation", explanation: "Route handler export named functions (GET, POST, etc). Request object se params, body access karte hain. NextResponse se response bhejte hain. CORS headers bhi set kar sakte hain.", example: "export async function GET(request) { return NextResponse.json({ message: 'Hello' }); }" },
            ],
            codeExamples: [
              { title: "API Route", language: "typescript", code: "// app/api/users/route.ts\nexport async function GET(request) {\n    const users = [\n        { id: 1, name: 'Rahul' },\n        { id: 2, name: 'Priya' },\n    ];\n    return NextResponse.json(users);\n}\n\nexport async function POST(request) {\n    const body = await request.json();\n    // Save to database\n    return NextResponse.json({ message: 'User created', user: body }, { status: 201 });\n}\n\n// app/api/users/[id]/route.ts\nexport async function GET(request, { params }) {\n    const user = { id: params.id, name: 'Rahul' };\n    return NextResponse.json(user);\n}", output: "API endpoints for GET all users, POST create user, GET user by ID." },
            ],
            notes: ["Route handlers app/api folder mein hain", "Named exports (GET, POST) methods handle karte hain", "NextResponse.json() se response bhejte hain", "Dynamic routes bhi support karte hain"],
            commonMistakes: [{ mistake: "Route handler mein NextResponse import bhoolna", correction: "import { NextResponse } from 'next/server'" }],
            interviewQuestions: ["API routes kya hain?", "Route handler mein GET aur POST kaise handle karte hain?", "Dynamic API routes kaise banate hain?"],
            practiceExercises: [{ question: "CRUD API banaye users ke liye - GET, POST, PUT, DELETE endpoints.", difficulty: "medium" }],
            quiz: { id: "quiz-nextjs-api", title: "API Routes Quiz", questions: [
              { id: "q1", question: "API route handler mein GET request ke liye kaunsa named export use hota hai?", options: ["handleGET", "GET", "getHandler", "onGET"], correctAnswer: 1, explanation: "GET named export use hota hai." },
              { id: "q2", question: "Response JSON bhejne ke liye kaunsa method use karte hain?", options: ["Response.json()", "NextResponse.json()", "JSON.stringify()", "JSON.send()"], correctAnswer: 1, explanation: "NextResponse.json() se JSON response bhejte hain." },
            ]},
          },
          duration: "20 min",
        },
        {
          id: "nextjs-middleware",
          title: "Middleware",
          description: "Next.js middleware seekhein",
          order: 6,
          content: {
            introduction: "Middleware Next.js mein ek function hai jo request ke beech mein execute hota hai. Ye request process hone se pehle run karta hai. Authentication, redirects, rewrite, headers modify karne ke liye use hota hai.",
            sections: [
              { title: "Middleware Kya Hai?", explanation: "Middleware ek file hai src/middleware.ts ya middleware.ts root par. Har request ke liye run hota hai (ya specific paths ke liye). Request intercept karta hai, modify kar sakta hai, redirect ya rewrite kar sakta hai.", example: "export function middleware(request) { return NextResponse.redirect('/login'); }" },
              { title: "Middleware Use Cases", explanation: "Common use cases: Authentication check, URL redirects, A/B testing, Bot detection, Header modification, Geo-location redirect, Internationalization.", example: "matcher config se specify paths jahan middleware run hoga." },
            ],
            codeExamples: [
              { title: "Middleware Example", language: "typescript", code: "// middleware.ts\nexport function middleware(request) {\n    const token = request.cookies.get('token')?.value;\n    const { pathname } = request.nextUrl;\n\n    // Authentication check\n    if (pathname.startsWith('/dashboard') && !token) {\n        return NextResponse.redirect(new URL('/login', request.url));\n    }\n\n    // Add custom header\n    const response = NextResponse.next();\n    response.headers.set('x-custom-header', 'hello');\n    \n    return response;\n}\n\n// Config: specific paths ke liye middleware\nexport const config = {\n    matcher: ['/dashboard/:path*', '/profile/:path*']\n};", output: "Dashboard route par authentication check hoga aur custom header add hoga." },
            ],
            notes: ["Middleware request ke beech mein run hota hai", "src/middleware.ts ya root middleware.ts", "matcher config se paths specify karte hain", "Edge runtime par run hota hai"],
            commonMistakes: [{ mistake: "Middleware mein heavy computation karna", correction: "Middleware light hona chahiye, heavy tasks ke liye API routes use karein" }],
            interviewQuestions: ["Middleware kya hai?", "Middleware ke use cases kaun se hain?", "Matcher config kya karta hai?"],
            practiceExercises: [{ question: "Middleware implement karein jo /dashboard route ko protect kare authentication check ke saath.", difficulty: "medium" }],
            quiz: { id: "quiz-nextjs-middleware", title: "Middleware Quiz", questions: [
              { id: "q1", question: "Middleware kaunsa file name hoti hai?", options: ["middleware.ts", "next.config.ts", "app.tsx", "layout.tsx"], correctAnswer: 0, explanation: "middleware.ts middleware file hai." },
              { id: "q2", question: "Middleware kahan run hota hai?", options: ["Browser", "Server", "Edge", "Database"], correctAnswer: 2, explanation: "Middleware Edge runtime par run hota hai." },
            ]},
          },
          duration: "15 min",
        },
        {
          id: "nextjs-routing-more",
          title: "Advanced Routing",
          description: "Groups, parallel routes, intercepting routes",
          order: 7,
          content: {
            introduction: "Next.js App Router mein advanced routing features hain - route groups, parallel routes, intercepting routes jo complex layouts banane mein help karte hain.",
            sections: [
              { title: "Route Groups", explanation: "Route groups folder ko (folderName) syntax se define karte hain. Ye URL mein include nahi hote. Layouts organize karne ke liye use hote hain. Different layouts different sections ke liye.", example: "app/(marketing)/about/page.tsx -> /about (URL mein (marketing) nahi dikhta)" },
              { title: "Parallel Routes", explanation: "Parallel routes @@ syntax se. Ek hi layout mein multiple pages simultaneous render hoti hain. Dashboard ya complex layouts ke liye useful. Default.tsx fallback ke liye.", example: "app/@sidebar/page.tsx, app/@main/page.tsx -> parallel rendering" },
            ],
            codeExamples: [
              { title: "Advanced Routing", language: "typescript", code: "// Route Group: app/(auth)/login/page.tsx\n// URL: /login (route group folder URL mein nahi aata)\n\n// Parallel Routes: app/layout.tsx\nexport default function Layout({ children, sidebar, main }) {\n    return (\n        <div style={{ display: 'flex' }}>\n            <aside>{sidebar}</aside>\n            <main>{main}</main>\n        </div>\n    );\n}\n\n// app/@sidebar/page.tsx\nexport default function Sidebar() {\n    return <nav>Sidebar Navigation</nav>;\n}\n\n// app/@main/page.tsx\nexport default function Main() {\n    return <article>Main Content</article>;\n}", output: "Route groups clean URL maintain karte hain, parallel routes complex layouts." },
            ],
            notes: ["Route groups URL mein dikhte nahi", "Parallel routes simultaneous rendering", "Intercepting routes modal-like navigation", "Default.tsx parallel route fallback"],
            commonMistakes: [{ mistake: "Route group ko regular folder samajhna", correction: "Route groups (parentheses) mein hote hain" }],
            interviewQuestions: ["Route groups kya hain?", "Parallel routes kya karte hain?", "Intercepting routes kab use karein?"],
            practiceExercises: [{ question: "Dashboard layout banaye parallel routes ke saath - sidebar aur main content.", difficulty: "hard" }],
            quiz: { id: "quiz-nextjs-adv-routing", title: "Advanced Routing Quiz", questions: [
              { id: "q1", question: "Route group folder kaunsa syntax use karta hai?", options: ["[group]", "(group)", "{group}", "<group>"], correctAnswer: 1, explanation: "(groupName) route group syntax hai." },
            ]},
          },
          duration: "15 min",
        },
      ],
    },
    {
      id: "nextjs-production",
      title: "Production aur Deployment",
      description: "SEO, optimization aur deployment",
      order: 2,
      lessons: [
        {
          id: "nextjs-seo",
          title: "SEO aur Metadata",
          description: "Next.js SEO aur metadata management",
          order: 1,
          content: {
            introduction: "Next.js SEO ke liye built-in support provide karta hai. Metadata API se aap page title, description, Open Graph tags etc manage kar sakte hain.",
            sections: [
              { title: "Metadata API", explanation: "metadata export ya generateMetadata function se page-specific metadata define karte hain. Head mein automatic add hota hai. Static aur dynamic metadata dono possible hai.", example: "export const metadata = { title: 'About Us', description: 'Learn about our company' };" },
              { title: "Open Graph aur Twitter Cards", explanation: "Social media sharing ke liye Open Graph tags important hain. og:title, og:description, og:image. Twitter cards ke liye twitter:card, twitter:site tags.", example: "metadata: { openGraph: { title: '...', images: [{ url: '...' }] } }" },
            ],
            codeExamples: [
              { title: "SEO Example", language: "typescript", code: "import { Metadata } from 'next';\n\nexport const metadata: Metadata = {\n    title: 'CodeDuniya - Programming Seekhein',\n    description: 'Roman English mein programming courses seekhein',\n    openGraph: {\n        title: 'CodeDuniya',\n        description: 'Free coding courses in Roman English',\n        images: [{ url: '/og-image.png' }],\n    },\n    twitter: {\n        card: 'summary_large_image',\n        title: 'CodeDuniya',\n        description: 'Free coding courses',\n    },\n    robots: { index: true, follow: true },\n};\n\nexport default function Page() {\n    return <h1>SEO Optimized Page</h1>;\n}\n\n// Dynamic metadata\n// app/blog/[slug]/page.tsx\nexport async function generateMetadata({ params }) {\n    const post = await getPost(params.slug);\n    return { title: post.title, description: post.excerpt };\n}", output: "SEO optimized page with Open Graph, Twitter cards aur metadata." },
            ],
            notes: ["Metadata API head tags generate karta hai", "generateMetadata dynamic routes ke liye", "Open Graph social sharing ke liye", "Robots meta tag indexing control karta hai"],
            commonMistakes: [{ mistake: "Har page par same title aur description", correction: "Har page ka unique title aur description hona chahiye" }],
            interviewQuestions: ["Next.js metadata API kya hai?", "Dynamic metadata kaise generate karte hain?"],
            practiceExercises: [{ question: "Blog post page banaye dynamic metadata ke saath - title, description, Open Graph.", difficulty: "medium" }],
            quiz: { id: "quiz-nextjs-seo", title: "SEO Quiz", questions: [
              { id: "q1", question: "Page-specific metadata define karne ke liye kaunsa export use hota hai?", options: ["metadata", "seo", "head", "meta"], correctAnswer: 0, explanation: "metadata export use hota hai." },
            ]},
          },
          duration: "15 min",
        },
        {
          id: "nextjs-optimization",
          title: "Optimization aur Performance",
          description: "Next.js optimization features",
          order: 2,
          content: {
            introduction: "Next.js built-in optimization features provide karta hai - Image optimization, Font optimization, Script optimization, Bundle analysis, aur more.",
            sections: [
              { title: "Image Component", explanation: "Next/Image component automatic image optimization karta hai. Lazy loading, responsive images, WebP format conversion, blur placeholder sab built-in hai.", example: "import Image from 'next/image'; <Image src='/hero.jpg' width={800} height={600} alt='Hero' />" },
              { title: "Font Optimization", explanation: "next/font Google Fonts aur local fonts optimize karta hai. CSS size reduce hota hai, fonts preloaded hote hain, layout shift prevent hota hai. Font subsetting built-in.", example: "import { Inter } from 'next/font/google'; const inter = Inter({ subsets: ['latin'] });" },
            ],
            codeExamples: [
              { title: "Optimization", language: "typescript", code: "// Image Optimization\nimport Image from 'next/image';\nimport profilePic from '../public/profile.jpg';\n\nexport default function Profile() {\n    return (\n        <Image\n            src={profilePic}\n            alt=\"Profile Photo\"\n            width={300}\n            height={300}\n            placeholder=\"blur\" // blur placeholder\n            priority // priority loading for above-fold images\n        />\n    );\n}\n\n// Font Optimization\nimport { Inter, Roboto_Mono } from 'next/font/google';\n\nconst inter = Inter({ subsets: ['latin'], display: 'swap' });\nconst mono = Roboto_Mono({ subsets: ['latin'] });\n\nexport default function Layout({ children }) {\n    return (\n        <html className={inter.className}>\n            <body>{children}</body>\n        </html>\n    );\n}\n\n// Script Optimization\nimport Script from 'next/script';\nexport default function Page() {\n    return (\n        <>\n            <Script src=\"https://example.com/analytics.js\" strategy=\"lazyOnload\" />\n            <h1>Page Content</h1>\n        </>\n    );\n}", output: "Optimized images, fonts aur scripts with next/next components." },
            ],
            notes: ["next/image automatic optimization karta hai", "next/font font loading optimize karta hai", "next/script script loading strategy control karta hai", "Layout shift aur CLS reduce hota hai"],
            commonMistakes: [{ mistake: "next/image ke bajaye <img> tag use karna", correction: "next/image use karein for automatic optimization" }],
            interviewQuestions: ["next/image ke kya fayde hain?", "Font optimization kaise kaam karta hai?", "Script strategies kaun si hain?"],
            practiceExercises: [{ question: "Hero section banaye optimized image, font aur script ke saath.", difficulty: "medium" }],
            quiz: { id: "quiz-nextjs-perf", title: "Performance Quiz", questions: [
              { id: "q1", question: "Image optimization ke liye kaunsa component use hota hai?", options: ["<img>", "<Image>", "<Picture>", "<OptimizedImage>"], correctAnswer: 1, explanation: "next/image component use hota hai." },
              { id: "q2", question: "Above-fold images mein kaunsa prop use karein?", options: ["priority", "fast", "eager", "first"], correctAnswer: 0, explanation: "priority prop above-fold images ke liye." },
            ]},
          },
          duration: "15 min",
        },
        {
          id: "nextjs-deployment",
          title: "Deployment",
          description: "Next.js app deploy karna seekhein",
          order: 3,
          content: {
            introduction: "Next.js application deploy karne ke multiple options hain. Vercel best platform hai (Next.js creator). Netlify, AWS, Docker bhi options hain.",
            sections: [
              { title: "Vercel Deployment", explanation: "Vercel Next.js deploy karne ka easiest tarika hai. Git repository connect karein, build automatically ho jata hai. Preview deployments, environment variables, analytics sab built-in hai.", example: "Push code to Git -> Vercel auto-deploy" },
              { title: "Other Platforms", explanation: "Netlify, Railway, AWS, Docker. node --standalone output. Environment variables set karna. Build command: next build. Output: .next folder.", example: "package.json scripts: { \"build\": \"next build\" }" },
            ],
            codeExamples: [
              { title: "Vercel Configuration", language: "typescript", code: "// vercel.json (optional)\n{\n    \"buildCommand\": \"next build\",\n    \"outputDirectory\": \".next\",\n    \"installCommand\": \"npm install\"\n}\n\n// Environment Variables (.env.local for local)\n// In Vercel dashboard set:\n// DATABASE_URL=postgres://...\n// API_KEY=abc123\n\n// next.config.ts\nexport default {\n    images: {\n        domains: ['images.unsplash.com'], // external images\n    },\n    // Output for Docker\n    // output: 'standalone',\n};", output: "Configuration for Vercel deployment aur environment variables." },
            ],
            notes: ["Vercel easiest deployment platform hai", "Environment variables securely set karein", "Preview deployments for PRs", "Analytics aur monitoring built-in"],
            commonMistakes: [{ mistake: "Environment variables Vercel dashboard mein set na karna", correction: "Build time env vars Vercel dashboard mein set karein" }],
            interviewQuestions: ["Next.js app deploy karne ke options?", "Vercel ke features?", "Environment variables kaise manage karte hain?"],
            practiceExercises: [{ question: "Next.js app Vercel par deploy karein custom domain aur environment variables ke saath.", difficulty: "hard" }],
            quiz: { id: "quiz-nextjs-deploy", title: "Deployment Quiz", questions: [
              { id: "q1", question: "Next.js app deploy karne ka easiest platform kaunsa hai?", options: ["AWS", "Vercel", "Google Cloud", "Azure"], correctAnswer: 1, explanation: "Vercel easiest platform hai." },
            ]},
          },
          duration: "15 min",
        },
        {
          id: "nextjs-project",
          title: "Project - Blog Platform",
          description: "Next.js se blog platform banayein",
          order: 4,
          content: {
            introduction: "Ab hum ek complete blog platform banayenge jisme Next.js ke sabhi concepts ka use hoga - routing, data fetching, API routes, authentication, SEO.",
            sections: [
              { title: "Project Architecture", explanation: "App Router with blog posts. Markdown blog posts. API routes for comments. Static generation with ISR. Search functionality. SEO metadata. Dark mode. Tag-based filtering.", example: "Pages: Home, Blog List, Blog Post, About, Contact, Admin Dashboard" },
              { title: "Implementation Details", explanation: "generateStaticParams for blog posts. MDX remote for content. API route for newsletter. Incremental Static Regeneration. Server Components for content. Client Components for search/comments.", example: "app/blog/[slug]/page.tsx -> generateStaticParams + ISR" },
            ],
            codeExamples: [
              { title: "Blog Structure", language: "typescript", code: "// app/blog/page.tsx - Blog listing\nexport default async function BlogPage() {\n    const posts = await getBlogPosts();\n    return (\n        <div className=\"blog-grid\">\n            {posts.map(post => (\n                <article key={post.slug}>\n                    <Link href={`/blog/${post.slug}`}>\n                        <h2>{post.title}</h2>\n                        <p>{post.excerpt}</p>\n                        <time>{post.date}</time>\n                    </Link>\n                </article>\n            ))}\n        </div>\n    );\n}\n\n// app/blog/[slug]/page.tsx - Single post\nexport async function generateStaticParams() {\n    const posts = await getBlogPosts();\n    return posts.map(post => ({ slug: post.slug }));\n}\n\nexport default async function BlogPost({ params }) {\n    const post = await getBlogPost(params.slug);\n    return (\n        <article>\n            <h1>{post.title}</h1>\n            <div dangerouslySetInnerHTML={{ __html: post.content }} />\n        </article>\n    );\n}\n\n// app/api/subscribe/route.ts - Newsletter API\nexport async function POST(request) {\n    const { email } = await request.json();\n    // Save to database\n    return NextResponse.json({ success: true });\n}", output: "Complete blog with listing, individual posts, aur API endpoint." },
            ],
            notes: ["generateStaticParams static pages generate karta hai", "ISR se content update periodically", "API routes server-side logic ke liye", "SEO har page ke liye optimize karein"],
            commonMistakes: [{ mistake: "generateStaticParams mein fetch error handle na karna", correction: "Try-catch aur error boundaries implement karein" }],
            interviewQuestions: ["Blog project mein Next.js features kaise use kiye?", "generateStaticParams kya karta hai?", "ISR kaise implement kiya?"],
            practiceExercises: [{ question: "Blog mein comments section add karein with API routes aur Client Components.", difficulty: "hard" }],
            quiz: { id: "quiz-nextjs-project", title: "Next.js Project Quiz", questions: [
              { id: "q1", question: "Static params generate karne ke liye kaunsa function use hota hai?", options: ["getStaticPaths", "generateStaticParams", "getServerSideProps", "getStaticProps"], correctAnswer: 1, explanation: "generateStaticParams App Router mein use hota hai." },
            ]},
          },
          duration: "30 min",
        },
      ],
    },
  ],
}
