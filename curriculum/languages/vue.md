# 💚 Vue.js — Complete Curriculum (2026 Edition)

> **"Vue.js ek progressive JavaScript framework hai. Simple, flexible, aur powerful — web apps banane ke liye!"**

---

## 📋 Table of Contents
- [History & Evolution](#-history--evolution)
- [Module 1: Beginner](#-module-1-beginner)
- [Module 2: Components](#-module-2-components)
- [Module 3: Directives](#-module-3-directives)
- [Module 4: State Management](#-module-4-state-management)
- [Module 5: Routing](#-module-5-routing)
- [Module 6: Advanced](#-module-6-advanced)
- [Interview Module](#-interview-module)
- [Project Module](#-project-module)

---

## 📖 History & Evolution

| Year | Version | Key Features |
|------|---------|--------------|
| 2014 | Vue 0.x | Initial release, reactive data binding |
| 2016 | Vue 2.0 | Virtual DOM, render functions, Vue CLI |
| 2020 | Vue 3.0 | Composition API, TypeScript, Proxy-based reactivity |
| 2022 | Vue 3.3 | defineModel, generics improvements |
| 2024 | Vue 3.4 | Vapor mode (experimental), faster compilation |
| 2025 | Vue 3.5 | Reactive Props Destructure, improved SSR |
| 2026 | Vue 3.6+ | Vapor stable, enhanced DevTools, Nuxt 5 |

### Key Facts
- **Creator**: Evan You (ex-Google, ex-Meteor)
- **Latest**: Vue 3.6+
- **Type**: Progressive framework (adopt gradually)
- **Used By**: Alibaba, Xiaomi, GitLab, Behance, Nintendo

### Pros & Cons
| Pros | Cons |
|------|------|
| Gentle learning curve | Smaller ecosystem than React |
| Excellent documentation | Fewer job opportunities than React |
| Flexible (library or framework) | Can be too flexible (no best practices enforced) |
| Great performance | |
| Single-file components | |

---

# 🟢 MODULE 1: BEGINNER VUE

---

## 1.1 🌟 Vue.js Kya Hai?

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐ Very Easy |
| **Time** | 20 mins |

### Roman English Explanation
Vue.js ek JavaScript framework hai jo user interfaces banane mein help karta hai. Yeh "progressive" framework hai — matlab aap ise chhota use kar sakte hain (kisi ek page mein) ya poora framework (SPA banane ke liye).

React ki tarah component-based hai, Angular ki tarah complete features hain, lekin dono se zyada easy hai.

### Setup
```bash
# 1. CDN se (sabse easy)
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

# 2. Vue CLI
npm install -g @vue/cli
vue create my-app
cd my-app
npm run serve

# 3. Vite (recommended)
npm create vue@latest
cd my-app
npm install
npm run dev

# 4. Nuxt (Vue framework)
npx nuxi init my-app
```

---

## 1.2 🖥️ Vue Instance & Template

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐ Easy |
| **Time** | 25 mins |

### Roman English Explanation
Vue app ka center hota hai. App ko `createApp` se banate hain. Template HTML hai jisme Vue special syntax use karta hai.

### CDN Example
```html
<!DOCTYPE html>
<html>
<body>
  <div id="app">
    <h1>{{ title }}</h1>
    <p>Count: {{ count }}</p>
    <button @click="increment">+</button>
  </div>

  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  <script>
    const { createApp, ref } = Vue;
    
    createApp({
      setup() {
        const title = ref('Namaste Vue!');
        const count = ref(0);
        
        function increment() {
          count.value++;
        }
        
        return { title, count, increment };
      }
    }).mount('#app');
  </script>
</body>
</html>
```

### Vite Project Syntax
```vue
<script setup>
import { ref } from 'vue'

const title = ref('Namaste Vue!')
const count = ref(0)

function increment() {
  count.value++
}
</script>

<template>
  <h1>{{ title }}</h1>
  <p>Count: {{ count }}</p>
  <button @click="increment">+</button>
</template>
```

---

## 1.3 🔆 Reactive Data & ref()

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐ Medium |
| **Time** | 25 mins |

### Roman English Explanation
Vue 3 mein do tarike hain reactive data banane ke: `ref()` (primitive values ke liye) aur `reactive()` (objects ke liye). `ref` ke saath `.value` use karte hain template mein nahi lagaate, lekin script mein lagana padta hai.

### Examples
```vue
<script setup>
import { ref, reactive, computed } from 'vue'

// ref — primitive values
const name = ref('Rahul')
const age = ref(25)
const isActive = ref(true)

// reactive — objects
const user = reactive({
  name: 'Priya',
  email: 'priya@test.com',
  skills: ['Vue', 'React', 'Node']
})

// computed — derived values
const fullName = computed(() => `${user.name} Sharma`)
const isAdult = computed(() => age.value >= 18)

// Methods
function updateName() {
  name.value = 'Rahul Kumar'
  user.skills.push('Python')
}
</script>

<template>
  <p>Name: {{ name }}</p>
  <p>Age: {{ age }}</p>
  <p>Active: {{ isActive ? '✅' : '❌' }}</p>

  <p>User: {{ user.name }} - {{ user.email }}</p>
  <p>Skills: {{ user.skills.join(', ') }}</p>

  <p>Full Name: {{ fullName }}</p>
  <p>{{ isAdult ? 'Adult' : 'Minor' }}</p>

  <button @click="updateName">Update</button>
</template>
```

### ref vs reactive
| Feature | ref | reactive |
|---------|-----|----------|
| Primitive values | ✅ | ❌ (needs object) |
| Objects | ✅ (wraps) | ✅ |
| .value needed | ✅ (in script) | ❌ |
| Reassignment | ✅ | ❌ (lose reactivity) |
| Destructuring | Loses reactivity | Loses reactivity |
| Template | No .value | No .value |

---

## 1.4 🔄 Event Handling

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐ Medium |
| **Time** | 20 mins |

### Examples
```vue
<script setup>
import { ref } from 'vue'

const count = ref(0)
const message = ref('')
const isHovered = ref(false)

function increment(amount = 1) {
  count.value += amount
}

function handleClick(event) {
  console.log('Clicked!', event)
}

function handleKeydown(event) {
  if (event.key === 'Enter') {
    alert(`You typed: ${message.value}`)
  }
}

function reset() {
  count.value = 0
  message.value = ''
}
</script>

<template>
  <!-- Basic events -->
  <button @click="increment()">+1</button>
  <button @click="increment(5)">+5</button>
  <button @click="count = 0">Reset</button>

  <!-- Event modifiers -->
  <form @submit.prevent="handleSubmit">
    <input v-model="message" @keyup.enter="handleKeydown">
    <button type="submit">Submit</button>
  </form>

  <!-- Mouse events -->
  <div @mouseenter="isHovered = true" 
       @mouseleave="isHovered = false"
       :class="{ hovered: isHovered }">
    Hover me!
  </div>

  <!-- Event object -->
  <button @click="handleClick($event)">Get Event</button>

  <!-- Shortcuts -->
  <a @click.stop="doThis">Stop propagation</a>
  <a @click.prevent="doThat">Prevent default</a>
  <button @click.once="onlyOnce">Only once</button>
</template>
```

---

## 1.5 🔗 Data Binding (v-model)

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐ Medium |
| **Time** | 20 mins |

### Examples
```vue
<script setup>
import { ref } from 'vue'

const username = ref('')
const email = ref('')
const password = ref('')
const bio = ref('')
const country = ref('')
const gender = ref('')
const skills = ref([])
const agree = ref(false)
const age = ref(25)
const theme = ref('light')
</script>

<template>
  <form @submit.prevent="submitForm">
    <!-- Text -->
    <input v-model="username" placeholder="Username">

    <!-- Email -->
    <input type="email" v-model="email" placeholder="Email">

    <!-- Password -->
    <input type="password" v-model="password" placeholder="Password">

    <!-- Textarea -->
    <textarea v-model="bio" placeholder="Bio"></textarea>

    <!-- Select -->
    <select v-model="country">
      <option value="">Select Country</option>
      <option value="in">India</option>
      <option value="us">USA</option>
      <option value="uk">UK</option>
    </select>

    <!-- Checkbox (single) -->
    <label><input type="checkbox" v-model="agree"> I agree</label>

    <!-- Checkbox (array) -->
    <label><input type="checkbox" value="vue" v-model="skills"> Vue</label>
    <label><input type="checkbox" value="react" v-model="skills"> React</label>
    <label><input type="checkbox" value="angular" v-model="skills"> Angular</label>

    <!-- Radio -->
    <label><input type="radio" value="male" v-model="gender"> Male</label>
    <label><input type="radio" value="female" v-model="gender"> Female</label>

    <!-- Range -->
    <input type="range" v-model.number="age" min="0" max="100">
    <p>Age: {{ age }}</p>

    <!-- v-model modifiers -->
    <input v-model.trim="username">       <!-- Remove whitespace -->
    <input v-model.number="age">          <!-- Convert to number -->
    <input v-model.lazy="email">          <!-- Update on change, not input -->

    <button type="submit">Register</button>
  </form>

  <!-- Preview -->
  <pre>{{ { username, email, country, skills, agree, age } }}</pre>
</template>
```

---

# 🔵 MODULE 2: COMPONENTS

---

## 2.1 🧩 Component Basics

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐⭐ Medium |
| **Time** | 35 mins |

### Roman English Explanation
Component reusable block hai. Vue mein single-file components (.vue file) mein template, script, style teeno ek saath hote hain.

### Component Structure
```vue
<!-- UserCard.vue -->
<script setup>
// Props — parent se data aata hai
const props = defineProps({
  name: { type: String, required: true },
  age: { type: Number, default: 0 },
  email: String,
  isVip: { type: Boolean, default: false }
})

// Emits — parent ko event bhejne ke liye
const emit = defineEmits(['view', 'edit', 'delete'])

function handleView() { emit('view', props.name) }
function handleEdit() { emit('edit') }
function handleDelete() { emit('delete') }
</script>

<template>
  <div class="card" :class="{ vip: isVip }">
    <h3>{{ name }}</h3>
    <p>{{ email }}</p>
    <p>Age: {{ age }}</p>

    <div class="actions">
      <button @click="handleView">👁️ View</button>
      <button @click="handleEdit">✏️ Edit</button>
      <button @click="handleDelete" class="danger">🗑️ Delete</button>
    </div>
  </div>
</template>

<style scoped>
.card { border: 1px solid #ddd; padding: 16px; margin: 8px; border-radius: 8px; }
.vip { border-color: gold; background: #fffae6; }
.danger { color: red; }
</style>
```

### Using Component
```vue
<script setup>
import UserCard from './UserCard.vue'
import { ref } from 'vue'

const users = ref([
  { name: 'Rahul', age: 25, email: 'rahul@test.com', isVip: true },
  { name: 'Priya', age: 22, email: 'priya@test.com', isVip: false },
  { name: 'Amit', age: 28, email: 'amit@test.com', isVip: true }
])

function viewUser(name) { alert(`Viewing ${name}`) }
function deleteUser(index) { users.value.splice(index, 1) }
</script>

<template>
  <h1>Users</h1>
  <UserCard v-for="(user, index) in users" :key="user.email"
    v-bind="user"
    @view="viewUser"
    @delete="deleteUser(index)"
  />
</template>
```

---

## 2.2 🧬 Slots (Content Projection)

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐⭐ Medium |
| **Time** | 20 mins |

### Roman English Explanation
Slots se parent component child component ke andar HTML content pass kar sakta hai.

### Examples
```vue
<!-- BaseCard.vue -->
<script setup>
defineProps({ title: String })
</script>

<template>
  <div class="card">
    <div class="header">
      <slot name="title">{{ title }}</slot>
    </div>
    <div class="body">
      <slot />  <!-- Default slot -->
    </div>
    <div class="footer">
      <slot name="actions" />
    </div>
  </div>
</template>

<!-- Usage -->
<script setup>
import BaseCard from './BaseCard.vue'
</script>

<template>
  <BaseCard title="User Profile">
    <!-- Default slot -->
    <p>Name: Rahul</p>
    <p>Email: rahul@test.com</p>

    <!-- Named slot -->
    <template #actions>
      <button>Edit</button>
      <button>Delete</button>
    </template>
  </BaseCard>
</template>
```

---

## 2.3 🔄 Component Lifecycle

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐⭐ Medium |
| **Time** | 20 mins |

### Roman English Explanation
Lifecycle hooks predefined moments hote hain jab Vue automatically functions call karta hai. `setup()` mein hi saare hooks define karte hain.

### Lifecycle Hooks
```vue
<script setup>
import { onMounted, onUpdated, onUnmounted, onBeforeMount, ref } from 'vue'

const data = ref(null)
const timer = ref(null)

// 1. beforeCreate & created — Composition API mein nahi hain (setup() hi hai)

// 2. beforeMount — DOM mount hone se pehle
onBeforeMount(() => {
  console.log('Component about to mount')
})

// 3. mounted — Component mount hone ke baad (DOM ready)
onMounted(async () => {
  console.log('Component mounted!')
  // API calls yahan karo
  data.value = await fetchData()
  
  // Timer, event listeners
  timer.value = setInterval(() => {
    console.log('Tick')
  }, 1000)
})

// 4. onUpdated — Reactive data change hone pe
onUpdated(() => {
  console.log('Component updated')
})

// 5. onUnmounted — Component DOM se hatne se pehle (cleanup)
onUnmounted(() => {
  console.log('Component unmounted')
  clearInterval(timer.value) // Cleanup!
})
</script>
```

### Lifecycle Order
```
setup() → onBeforeMount → onMounted → onBeforeUpdate → onUpdated → onBeforeUnmount → onUnmounted
```

---

# 🟠 MODULE 3: DIRECTIVES

---

## 3.1 🎯 Built-in Directives

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐ Medium |
| **Time** | 25 mins |

### Roman English Explanation
Directives special attributes hain jo `v-` se start hote hain. Ye DOM ko manipulate karte hain.

### Examples
```vue
<script setup>
import { ref } from 'vue'

const show = ref(true)
const items = ref(['Apple', 'Banana', 'Mango'])
const isActive = ref(false)
const style = ref({ color: 'red', fontSize: '20px' })
</script>

<template>
  <!-- v-if / v-else-if / v-else -->
  <p v-if="show">Visible</p>
  <p v-else>Hidden</p>

  <!-- v-show (CSS display toggle, always rendered) -->
  <p v-show="isActive">Shown via v-show</p>

  <!-- v-for -->
  <ul>
    <li v-for="(item, index) in items" :key="index">{{ index + 1 }}. {{ item }}</li>
  </ul>

  <!-- v-bind (shorthand :) -->
  <div :class="{ active: isActive }">Dynamic class</div>
  <div :style="{ color: isActive ? 'green' : 'red' }">Dynamic style</div>

  <!-- v-on (shorthand @) -->
  <button @click="show = !show">Toggle</button>

  <!-- v-model -->
  <input v-model="items[0]">

  <!-- v-html (raw HTML, careful with XSS!) -->
  <div v-html="'<strong>Bold text</strong>'"></div>

  <!-- v-once — ek baar render, phir update nahi hoga -->
  <p v-once>{{ Math.random() }}</p>

  <!-- v-pre — Vue syntax skip karo -->
  <pre v-pre>{{ NOT compiled }}</pre>

  <!-- v-cloak — hide until compiled -->
  <div v-cloak>{{ message }}</div>
</template>
```

### v-if vs v-show
| Feature | v-if | v-show |
|---------|------|--------|
| Renders? | Only when true | Always (CSS only) |
| Toggle cost | High (create/destroy) | Low (CSS toggle) |
| Initial cost | Low (if false) | High (always renders) |
| Use case | Rare toggles | Frequent toggles |

---

## 3.2 🔧 Custom Directives

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐⭐⭐ Hard |
| **Time** | 20 mins |

### Roman English Explanation
Custom directives se aap apne DOM manipulation logic bana sakte hain.

### Examples
```vue
<script setup>
// Local directive
const vHighlight = {
  mounted: (el, binding) => {
    el.style.backgroundColor = binding.value || 'yellow'
    el.style.transition = 'background-color 0.3s'
    
    if (binding.modifiers.blink) {
      setInterval(() => {
        el.style.backgroundColor = 
          el.style.backgroundColor === 'yellow' ? 'transparent' : 'yellow'
      }, 500)
    }
  },
  updated: (el, binding) => {
    el.style.backgroundColor = binding.value
  }
}

// Global directive (in main.js)
// app.directive('focus', {
//   mounted: (el) => el.focus()
// })
</script>

<template>
  <p v-highlight="'lightblue'">Hover highlight</p>
  <p v-highlight.blink="'yellow'">Blinking highlight</p>
  <input v-focus placeholder="Auto-focused">
</template>
```

---

# 🟣 MODULE 4: STATE MANAGEMENT

---

## 4.1 📊 Pinia

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐⭐⭐ Hard |
| **Time** | 30 mins |

### Roman English Explanation
Pinia Vue 3 ka official state management library hai. Vuex ka replacement hai. Simple, TypeScript-friendly, aur modular hai.

### Store Example
```javascript
// stores/cart.js
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cart', () => {
  // State
  const items = ref([])
  
  // Getters (computed)
  const count = computed(() => items.value.length)
  const total = computed(() => 
    items.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
  )
  const tax = computed(() => total.value * 0.18)
  const grandTotal = computed(() => total.value + tax.value)
  
  // Actions
  function addItem(product) {
    const existing = items.value.find(i => i.id === product.id)
    if (existing) {
      existing.quantity++
    } else {
      items.value.push({ ...product, quantity: 1 })
    }
  }
  
  function removeItem(id) {
    items.value = items.value.filter(i => i.id !== id)
  }
  
  function updateQuantity(id, qty) {
    const item = items.value.find(i => i.id === id)
    if (item) item.quantity = Math.max(0, qty)
    if (item.quantity === 0) removeItem(id)
  }
  
  function clearCart() {
    items.value = []
  }
  
  return { items, count, total, tax, grandTotal, addItem, removeItem, updateQuantity, clearCart }
})

// stores/user.js
export const useUserStore = defineStore('user', () => {
  const user = ref(null)
  const token = ref(null)
  
  const isLoggedIn = computed(() => !!token.value)
  const isAdmin = computed(() => user.value?.role === 'admin')
  
  async function login(email, password) {
    const res = await fetch('/api/login', { 
      method: 'POST', 
      body: JSON.stringify({ email, password }) 
    })
    const data = await res.json()
    user.value = data.user
    token.value = data.token
    localStorage.setItem('token', data.token)
  }
  
  function logout() {
    user.value = null
    token.value = null
    localStorage.removeItem('token')
  }
  
  return { user, token, isLoggedIn, isAdmin, login, logout }
})
```

### Using Store in Component
```vue
<script setup>
import { useCartStore } from './stores/cart'
import { useUserStore } from './stores/user'

const cart = useCartStore()
const user = useUserStore()

const products = [
  { id: 1, name: 'Laptop', price: 55000 },
  { id: 2, name: 'Mouse', price: 500 },
  { id: 3, name: 'Keyboard', price: 1200 }
]
</script>

<template>
  <div v-if="!user.isLoggedIn">
    <button @click="user.login('test@test.com', 'pass')">Login</button>
  </div>
  <div v-else>
    <p>Welcome, {{ user.user?.email }}</p>
    <button @click="user.logout">Logout</button>
  </div>

  <h2>Products</h2>
  <div v-for="product in products" :key="product.id">
    {{ product.name }} — ₹{{ product.price }}
    <button @click="cart.addItem(product)">Add to Cart</button>
  </div>

  <h2>Cart ({{ cart.count }})</h2>
  <div v-for="item in cart.items" :key="item.id">
    {{ item.name }} × {{ item.quantity }} = ₹{{ item.price * item.quantity }}
    <button @click="cart.removeItem(item.id)">✖</button>
  </div>

  <p>Subtotal: ₹{{ cart.total }}</p>
  <p>Tax: ₹{{ cart.tax }}</p>
  <p><strong>Total: ₹{{ cart.grandTotal }}</strong></p>
  <button @click="cart.clearCart">Clear Cart</button>
</template>
```

---

# 🔴 MODULE 5: ROUTING

---

## 5.1 🧭 Vue Router

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐⭐ Medium |
| **Time** | 30 mins |

### Roman English Explanation
Vue Router se multiple pages ke beech navigate karte hain bina page reload kiye. SPA (Single Page Application) ke liye zaroori hai.

### Setup
```javascript
// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { 
    path: '/about', 
    name: 'About',
    component: () => import('../views/About.vue')  // Lazy load
  },
  { 
    path: '/users', 
    name: 'Users',
    component: () => import('../views/Users.vue'),
    children: [
      { path: ':id', name: 'UserDetail', component: () => import('../views/UserDetail.vue') }
    ]
  },
  { 
    path: '/login', 
    name: 'Login',
    component: () => import('../views/Login.vue'),
    beforeEnter: (to, from) => {
      // Per-route guard
      if (isLoggedIn) return '/dashboard'
    }
  },
  { 
    path: '/admin', 
    meta: { requiresAuth: true, role: 'admin' },
    component: () => import('../views/Admin.vue')
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('../views/NotFound.vue') }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0 }
  }
})

// Navigation guard
router.beforeEach((to, from) => {
  const auth = useUserStore()
  
  if (to.meta.requiresAuth && !auth.isLoggedIn) {
    return { name: 'Login', query: { redirect: to.fullPath } }
  }
  
  if (to.meta.role && auth.user?.role !== to.meta.role) {
    return { name: 'Home' }
  }
})

export default router

// main.js
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')
```

### Template Navigation
```vue
<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link :to="{ name: 'Users' }">Users</router-link>
    <router-link to="/admin" v-if="user.isAdmin">Admin</router-link>
  </nav>

  <router-view />  <!-- Page yahan render hota hai -->
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

function goToUser(id) {
  router.push({ name: 'UserDetail', params: { id } })
}

function goBack() {
  router.back()
}

// Watch route changes
import { watch } from 'vue'
watch(() => route.params, (newParams) => {
  console.log('Route params changed:', newParams)
})
</script>
```

---

# ⚫ MODULE 6: ADVANCED VUE

---

## 6.1 📡 Composables

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐⭐⭐⭐ Expert |
| **Time** | 30 mins |

### Roman English Explanation
Composables reusable functions hain jo Composition API use karte hain. Ye mixins ka modern alternative hai. Isse code reuse karte hain.

### Examples
```javascript
// composables/useFetch.js
import { ref, onMounted } from 'vue'

export function useFetch(url) {
  const data = ref(null)
  const error = ref(null)
  const loading = ref(true)

  async function execute() {
    loading.value = true
    error.value = null
    
    try {
      const res = await fetch(url.value || url)
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      data.value = await res.json()
    } catch (e) {
      error.value = e.message
    } finally {
      loading.value = false
    }
  }

  // Watch URL changes
  import { watch } from 'vue'
  if (typeof url === 'function') {
    watch(url, execute)
  }

  onMounted(execute)

  return { data, error, loading, refresh: execute }
}

// composables/useLocalStorage.js
import { ref, watch } from 'vue'

export function useLocalStorage(key, defaultValue) {
  const stored = localStorage.getItem(key)
  const data = ref(stored ? JSON.parse(stored) : defaultValue)

  watch(data, (newVal) => {
    localStorage.setItem(key, JSON.stringify(newVal))
  }, { deep: true })

  return data
}

// composables/useDebounce.js
import { ref, watch } from 'vue'

export function useDebounce(source, delay = 300) {
  const debouncedValue = ref(source.value)

  watch(source, () => {
    const timer = setTimeout(() => {
      debouncedValue.value = source.value
    }, delay)
  })

  return debouncedValue
}
```

### Using Composables
```vue
<script setup>
import { useFetch } from './composables/useFetch'
import { useLocalStorage } from './composables/useLocalStorage'
import { ref } from 'vue'

const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts')

const theme = useLocalStorage('theme', 'light')
const searchQuery = ref('')
const debouncedSearch = useDebounce(searchQuery, 500)
</script>

<template>
  <button @click="theme = theme === 'light' ? 'dark' : 'light'">
    Theme: {{ theme }}
  </button>

  <input v-model="searchQuery" placeholder="Search...">
  <p>Debounced: {{ debouncedSearch }}</p>

  <div v-if="loading">Loading...</div>
  <div v-else-if="error">Error: {{ error }}</div>
  <div v-else>
    <div v-for="post in data" :key="post.id">
      <h3>{{ post.title }}</h3>
    </div>
  </div>
</template>
```

---

## 6.2 ⚡ Performance & Best Practices

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐⭐⭐ Hard |
| **Time** | 20 mins |

### Tips
```vue
<script setup>
import { computed, shallowRef } from 'vue'

// 1. v-once for static content
// 2. v-memo (Vue 3.2+) — memoize part of template
// 3. computed instead of method calls in template
// 4. shallowRef for large data (no deep reactivity)
const largeList = shallowRef([])

// 5. Keep trackBy in v-for
// 6. Lazy load routes
// 7. v-if vs v-show wisely
// 8. Debounce input handlers
// 9. Use Teleport for modals
// 10. Suspense for async components
</script>

<template>
  <!-- Teleport — render somewhere else in DOM -->
  <Teleport to="body">
    <div class="modal" v-if="showModal">
      <slot />
    </div>
  </Teleport>

  <!-- Suspense — async components ke liye -->
  <Suspense>
    <AsyncComponent />
    <template #fallback>
      Loading...
    </template>
  </Suspense>

  <!-- keep-alive — cache components -->
  <KeepAlive>
    <component :is="currentTab" />
  </KeepAlive>

  <!-- Dynamic component -->
  <component :is="currentComponent" />
</template>
```

---

# 💼 INTERVIEW MODULE

---

## Vue.js Interview Questions

### Beginner

**Q1: Vue.js kya hai?**
A: Progressive JavaScript framework hai UI banane ke liye. Evan You ne banaya (2014). Component-based, reactive, easy to learn.

**Q2: ref() aur reactive() mein difference?**
A: ref() primitives ke liye (.value lagta hai). reactive() objects ke liye. ref objects ko bhi wrap kar sakta hai.

**Q3: v-if aur v-show mein difference?**
A: v-if DOM se add/remove karta hai. v-show CSS display toggle karta hai (always rendered). v-if expensive hai toggle pe, v-show expensive hai initial render pe.

**Q4: Vue lifecycle hooks kaunsa hai?**
A: onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted

**Q5: computed aur watch mein difference?**
A: computed derived value return karta hai (cached). watch side effects ke liye (API call, etc.). computed lazy hai, watch eager hai.

### Intermediate

**Q6: Props aur emit kya hai?**
A: Props parent → child data flow. Emit child → parent event/signal. defineProps() aur defineEmits() se define karte hain.

**Q7: Slots kya hain?**
A: Content projection ke liye. Default slot, named slots, scoped slots. Parent child ke template mein content inject kar sakta hai.

**Q8: Provide/Inject kya hai?**
A: Dependency injection pattern. provide() ancestor mein, inject() descendant mein. Prop drilling se bachata hai.

**Q9: Vue Router ke navigation guards?**
A: beforeEach, beforeResolve, afterEach (global). beforeEnter (per-route). onBeforeRouteLeave, onBeforeRouteUpdate (in-component).

**Q10: Watchers mein immediate aur deep option?**
A: immediate: true — watch mount hote hi chalega. deep: true — nested object changes detect karega.

### Advanced

**Q11: Virtual DOM kaise kaam karta hai?**
A: Vue real DOM ka virtual representation (JS object) banata hai. Changes pe naya VNode tree banata hai, diff karta hai (patching), aur sirf changed parts real DOM mein update karta hai.

**Q12: Vapor mode kya hai? (Vue 3.5+)**
A: Virtual DOM ke bina compilation. Direct DOM manipulation. Better memory usage aur performance. Experimental, specific use cases ke liye.

**Q13: Reactivity system kaise kaam karta hai?**
A: Vue 3 Proxy-based reactivity. Data access track karta hai (get trap), aur changes pe trigger karta hai (set trap). Granular dependency tracking.

**Q14: Pinia vs Vuex comparison?**
A: Pinia simpler, full TypeScript support, no mutations needed, modular (no namespaces), smaller bundle size. Vuex deprecated hai.

**Q15: SSR (Server-Side Rendering) Vue mein?**
A: Nuxt.js recommended. Better SEO, faster initial load. Vue's createSSRApp() + vue-server-renderer bhi use kar sakte hain.

---

## Vue.js Cheat Sheet

```javascript
// Composition API
import { ref, reactive, computed, watch, onMounted } from 'vue'

const count = ref(0)
const user = reactive({ name: 'Rahul' })
const doubled = computed(() => count.value * 2)

watch(count, (newVal, oldVal) => {})
onMounted(() => {})

// Template
{{ expression }}
v-bind:attr="value"  →  :attr="value"
v-on:event="handler" →  @event="handler"
v-model="data"
v-if / v-else / v-for

// Component
defineProps({ name: String })
defineEmits(['update'])
const slots = useSlots()
const attrs = useAttrs()

// Router
import { useRouter, useRoute } from 'vue-router'
router.push('/path')
route.params.id

// Pinia Store
import { defineStore } from 'pinia'
export const useStore = defineStore('id', () => {
  const state = ref(null)
  const getter = computed(() => state.value * 2)
  function action() { state.value++ }
  return { state, getter, action }
})
```

---

## 🚀 Projects

### Beginner
1. **Counter App** — ref, computed, methods
2. **Todo List** — v-for, v-model, CRUD
3. **Weather Widget** — fetch API, conditional rendering
4. **Calculator** — events, computed properties
5. **Note App** — localStorage, composable

### Intermediate
1. **Blog Platform** — Vue Router, components, API
2. **Shopping Cart** — Pinia store, product listing
3. **User Dashboard** — Charts, filters, search
4. **Recipe App** — Search, categories, favorites
5. **Chat Interface** — Real-time messages

### Advanced
1. **E-Commerce App** — Complete store with Nuxt
2. **Real-time Dashboard** — WebSocket + Vue
3. **Social Media App** — Posts, comments, likes
4. **Project Manager** — Kanban board, drag-drop
5. **SaaS Platform** — Auth, subscriptions, admin

---

> **"Vue.js — Progressive, flexible, aur developer-friendly! Web apps banana ab hua aur bhi easy!" 💚🚀**
