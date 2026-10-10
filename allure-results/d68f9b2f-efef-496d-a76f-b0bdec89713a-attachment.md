# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 16_Scroll_toElement\299_Abort_Signal_Scroll.spec.ts >> Scroll to Element - TestingAcademy >> scroll to view
- Location: tests\16_Scroll_toElement\299_Abort_Signal_Scroll.spec.ts:9:8

# Error details

```
Error: page.waitForTimeout: Target page, context or browser has been closed
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('Scroll to Element - TestingAcademy', () => {
  4  | 
  5  |    test.beforeEach(async ({ page }) => {
  6  |       await page.goto('https://app.thetestingacademy.com/playwright/widgets/scroll');
  7  | 
  8  |    });
  9  |    test('scroll to view', async ({ page }) => {
  10 | 
  11 | 
  12 |       // 5) lazy list grows past 10 once visible
  13 | 
  14 |       await page.getByTestId('section-lazy').scrollIntoViewIfNeeded();
  15 |       await page.getByTestId('lazy-list').scrollIntoViewIfNeeded();
  16 | 
  17 |       const list = page.getByTestId('lazy-list').locator('li');
  18 |       const initialCount = await list.count();
  19 | 
  20 |       // scroll the LAST existing item into view — item 11 does not exist yet,
  21 |       // so nth(10) would just wait until the test times out.
  22 |       // const controller = new AbortController();
  23 |       // setTimeout(() => controller.abort(), 500);
  24 |       
  25 |       // // await list.last().scrollIntoViewIfNeeded({ signal: controller.signal});
  26 | 
  27 | 
  28 | 
  29 | 
  30 |       await expect.poll(async () => list.count(), {
  31 |          message: "expected_itmes > 10",
  32 |          timeout: 10_000
  33 |       }).toBeGreaterThan(initialCount);
  34 | 
  35 |       const finalCount = await list.count();
  36 |       console.log(finalCount);
  37 | 
> 38 |       await page.waitForTimeout(5000);
     |                  ^ Error: page.waitForTimeout: Target page, context or browser has been closed
  39 | 
  40 |    });
  41 | 
  42 | 
  43 | test('Pramod: cancel the wait with an AbortSignal (v1.62+)', async ({ page }) => {
  44 |   await page.setContent('<button style="display:none">Hidden</button>');
  45 |   const controller = new AbortController();
  46 |   setTimeout(() => controller.abort(), 500);
  47 | 
  48 |   await expect(
  49 |     page.locator('button').scrollIntoViewIfNeeded({ signal: controller.signal })   // option 2: signal
  50 |   ).rejects.toThrow('aborted');
  51 | });
  52 | 
  53 | });
```