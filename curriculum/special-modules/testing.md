# 🧪 Testing - Complete Guide (Jest, Vitest, Playwright, Cypress)

> **"Testing = Code ki suraksha kavach. Bina test ke code adhura hai!"**

---

## 📖 Testing Pyramid
```
         ╱╲
        ╱ E2E ╲       Few tests (Cypress, Playwright)
       ╱────────╲
      ╱Integration╲    Some tests
     ╱──────────────╲
    ╱   Unit Tests   ╲  Many tests (Jest, Vitest)
   ╱──────────────────╲
```

## 🔬 Jest (Unit Testing)
```javascript
// sum.js
export const sum = (a, b) => a + b;

// sum.test.js
import { sum } from './sum';

describe('sum function', () => {
    test('adds 1 + 2 = 3', () => {
        expect(sum(1, 2)).toBe(3);
    });
    
    test('handles negative numbers', () => {
        expect(sum(-1, -2)).toBe(-3);
    });
});

// Common matchers
expect(value).toBe(5);              // ===
expect(value).toEqual({a: 1});       // Deep equal
expect(value).toBeTruthy();
expect(value).toBeFalsy();
expect(value).toBeNull();
expect(value).toBeUndefined();
expect(value).toBeDefined();
expect(array).toContain('item');
expect(string).toMatch(/regex/);
expect(fn).toThrow();
```

## 🌐 Playwright (E2E Testing)
```javascript
import { test, expect } from '@playwright/test';

test('homepage has title', async ({ page }) => {
    await page.goto('https://codeduniya.com');
    await expect(page).toHaveTitle('Code Duniya');
});

test('user can login', async ({ page }) => {
    await page.goto('/login');
    await page.fill('#email', 'rahul@example.com');
    await page.fill('#password', 'pass123');
    await page.click('button[type="submit"]');
    await expect(page.locator('.welcome')).toHaveText('Welcome Rahul');
});
```

---

> **"Test likho, bugs bhagao, quality banao! 🧪"**
