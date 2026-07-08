# ▲ Next.js 15 - Complete Curriculum (2026)

> **"Next.js = React + Server Side + Best Features. Full-stack React framework."**

---

## 📖 What is Next.js?

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐⭐ Medium |
| **Time** | 30 mins |
| **Prerequisites** | React |

### Definition
Next.js is a **React framework** for production. It gives you the best of server-side and client-side rendering.

### Roman English Explanation
Next.js React ka "ready-to-use" package hai. React sirf UI banata hai, lekin Next.js routing, server rendering, image optimization, SEO sab kuch built-in deta hai. Isse aap production-ready website bana sakte ho.

### Key Features
- **App Router** (file-based routing)
- **Server Components** (default in RSC)
- **Server Actions** (form handling)
- **API Routes** (backend endpoints)
- **SSR, SSG, ISR** (rendering strategies)
- **Built-in Optimizations** (images, fonts)

---

## 🗺️ Complete Roadmap

```
🟢 BEGINNER: Setup | Pages/Routes | Layouts | Navigation | CSS | Images | Fonts
🔵 INTERMEDIATE: Data Fetching | Server Actions | Loading/Error | Dynamic Routes | API Routes
🟠 ADVANCED: Middleware | Auth | ISR | SSG | Metadata | SEO | ISR
🔴 PROFESSIONAL: Caching | Revalidation | Image Optimization | Analytics | Deployment
⚫ EXPERT: Parallel Routes | Intercepting Routes | Multi-zone | Custom Server | Edge Runtime
```

### Project Structure (App Router)
```
my-app/
├── app/                     # App Router directory
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page (/)
│   ├── loading.tsx          # Loading UI
│   ├── error.tsx            # Error UI
│   ├── not-found.tsx        # 404 page
│   ├── globals.css          # Global styles
│   ├── page.tsx
│   ├── api/                 # API routes
│   ├── (auth)/              # Route groups
│   │   ├── login/page.tsx
│   │   └── register/page.tsx
│   └── blog/                # Dynamic route
│       ├── page.tsx
│       └── [slug]/page.tsx
├── components/              # Shared components
├── lib/                     # Utilities
├── public/                  # Static assets
└── next.config.js           # Next.js config
```

### Routing
```tsx
// File-based routing
// app/page.tsx → http://localhost:3000
// app/about/page.tsx → http://localhost:3000/about
// app/blog/[slug]/page.tsx → /blog/hello-world

// Dynamic routes
// app/blog/[slug]/page.tsx
export default async function BlogPost({ params }: { params: { slug: string } }) {
    const post = await getPost(params.slug);
    return <article>{post.title}</article>;
}

// Navigation
import Link from 'next/link';
import { useRouter } from 'next/navigation';

function Nav() {
    const router = useRouter();
    
    return (
        <nav>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/blog/post-1">Post</Link>
            <Link href="/users" prefetch={true}>Users</Link>  {/* Prefetch */}
            <button onClick={() => router.push('/contact')}>Contact</button>
            <button onClick={() => router.back()}>Back</button>
        </nav>
    );
}
```

### Data Fetching
```tsx
// Server Components (default) - fetch directly
async function UsersPage() {
    const users = await fetch('https://api.example.com/users', {
        next: { revalidate: 60 }  // ISR: revalidate every 60s
    }).then(r => r.json());
    
    return (
        <ul>
            {users.map(user => <li key={user.id}>{user.name}</li>)}
        </ul>
    );
}

// Different fetch strategies
fetch(url, { cache: 'force-cache' });       // SSG (default)
fetch(url, { cache: 'no-store' });           // SSR (dynamic)
fetch(url, { next: { revalidate: 3600 } });  // ISR (revalidate every hour)

// Parallel data fetching
async function Dashboard() {
    const [user, posts, notifications] = await Promise.all([
        fetch('/api/user'),
        fetch('/api/posts'),
        fetch('/api/notifications')
    ]);
    // All fetched in parallel!
}
```

### Server Actions
```tsx
// app/actions.ts
'use server';

export async function createUser(formData: FormData) {
    const name = formData.get('name');
    const email = formData.get('email');
    
    // Server-side validation
    if (!name || typeof name !== 'string') {
        return { error: 'Name required' };
    }
    
    // Database operation
    const user = await db.user.create({ name, email });
    revalidatePath('/users');  // Refresh the users page
    redirect(`/users/${user.id}`);
}

// Usage in component
import { createUser } from './actions';

function UserForm() {
    return (
        <form action={createUser}>
            <input name="name" required />
            <input name="email" type="email" required />
            <button type="submit">Create User</button>
        </form>
    );
}
```

### Loading & Error States
```tsx
// app/loading.tsx - Shows while page loads
export default function Loading() {
    return (
        <div className="spinner">
            <LoadingSpinner />
            <p>Loading...</p>
        </div>
    );
}

// app/error.tsx - Shows on error
'use client';
export default function Error({
    error,
    reset
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <div>
            <h2>Something went wrong!</h2>
            <button onClick={reset}>Try again</button>
        </div>
    );
}

// app/not-found.tsx - 404 page
export default function NotFound() {
    return <h2>Page not found (404)</h2>;
}
```

### Middleware
```tsx
// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const token = request.cookies.get('token');
    const { pathname } = request.nextUrl;
    
    // Protected routes
    if (pathname.startsWith('/dashboard') && !token) {
        return NextResponse.redirect(new URL('/login', request.url));
    }
    
    // Add headers
    const response = NextResponse.next();
    response.headers.set('X-Custom', 'value');
    return response;
}

export const config = {
    matcher: ['/dashboard/:path*', '/admin/:path*']
};
```

### Metadata & SEO
```tsx
// app/layout.tsx - Static metadata
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Code Duniya',
    description: 'Free Programming Courses in Roman English',
    openGraph: {
        title: 'Code Duniya',
        description: 'Learn Programming',
        images: ['/og-image.png']
    }
};

// app/blog/[slug]/page.tsx - Dynamic metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const post = await getPost(params.slug);
    return {
        title: post.title,
        description: post.excerpt
    };
}
```

---

> **"Next.js se React professional banta hai. Seekho aur banayein!" 🚀**
>
> **[Next: Node.js →](nodejs.md)**
