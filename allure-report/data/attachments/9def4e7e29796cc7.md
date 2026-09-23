# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 04_Session_Storage\232_TestWingify.spec.ts >> go directly to dashboard — Test1
- Location: tests\04_Session_Storage\232_TestWingify.spec.ts:12:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /dashboard/
Received string:  ""

Call log:
  - Expect "toHaveURL" with timeout 5000ms
  - 

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic:
    - main "Setup content"
  - main "Application main content" [ref=e3]:
    - generic [ref=e8]:
      - img "Wingify Logo - Loading" [ref=e10]
      - status [ref=e11]:
        - text: Loading
        - generic [aria-hidden] [ref=e12]: ...
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | 
  3  | 
  4  | // Load the saved session
  5  | 
  6  | test.use(
  7  |     {
  8  |         storageState : './user-session.json'
  9  |     });
  10 | 
  11 | 
  12 | test("go directly to dashboard — Test1", async ({ page }) => {
  13 |     await page.goto("https://app.wingify.com/#/dashboard?accountId=1281703");
> 14 |     await expect(page).toHaveURL(/dashboard/);
     |                        ^ Error: expect(page).toHaveURL(expected) failed
  15 |     console.log("Dashboard loaded — no login needed ✅");
  16 |     await page.waitForTimeout(3000);
  17 | });
  18 | 
  19 | test("go directly to dashboard2 — Test2", async ({ page }) => {
  20 |     await page.goto("https://app.wingify.com/#/dashboard?accountId=1281703");
  21 |     await expect(page).toHaveURL(/dashboard/);
  22 |     console.log("Dashboard loaded — no login needed ✅");
  23 |     await page.waitForTimeout(3000);
  24 | });
  25 | 
  26 | test("go directly to dashboard3 — Test3", async ({ page }) => {
  27 |     await page.goto("https://app.wingify.com/#/dashboard?accountId=1281703");
  28 |     await expect(page).toHaveURL(/dashboard/);
  29 |     console.log("Dashboard loaded — no login needed ✅");
  30 |     await page.waitForTimeout(3000);
  31 | });
```