# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 18_Test_Hooks\279_TestPriority.spec.ts >> Priority 3 - Logout test
- Location: tests\18_Test_Hooks\279_TestPriority.spec.ts:22:5

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://app.vwo.com/", waiting until "load"

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('TC01 - Login should work', async ({ page }) => {
  4  |   await page.goto('https://app.vwo.com');
  5  | });
  6  | 
  7  | test('TC02 - Dashboard should open', async ({ page }) => {
  8  |   await page.goto('https://app.vwo.com');
  9  | });
  10 | 
  11 | 
  12 | test.describe.configure({ mode: 'serial' });
  13 | 
  14 | test('Priority 1 - Login test', async ({ page }) => {
  15 |   await page.goto('https://app.vwo.com');
  16 | });
  17 | 
  18 | test('Priority 2 - Dashboard test', async ({ page }) => {
  19 |   await page.goto('https://app.vwo.com');
  20 | });
  21 | 
  22 | test('Priority 3 - Logout test', async ({ page }) => {
> 23 |   await page.goto('https://app.vwo.com');
     |              ^ Error: page.goto: Target page, context or browser has been closed
  24 | });
  25 | 
  26 | 
  27 | test('Login test @p1 @smoke', async ({ page }) => {
  28 |   await page.goto('https://app.vwo.com');
  29 | });
  30 | 
  31 | test('Profile test @p2', async ({ page }) => {
  32 |   await page.goto('https://app.vwo.com');
  33 | });
  34 | 
  35 | test('Settings test @p3', async ({ page }) => {
  36 |   await page.goto('https://app.vwo.com');
  37 | });
  38 | 
  39 | // npx playwright test --grep @p1
```