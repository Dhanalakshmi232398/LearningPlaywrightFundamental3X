# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Tasks\10Oct_PracticeAssertions.spec.ts >> Practicing Assertions in Student Login Form
- Location: tests\Tasks\10Oct_PracticeAssertions.spec.ts:3:6

# Error details

```
Error: locator.inputValue: Target page, context or browser has been closed
Call log:
  - waiting for locator('emailTextbox')

```

# Test source

```ts
  1  | import { test, expect} from '@playwright/test';
  2  | 
  3  |  test('Practicing Assertions in Student Login Form', async ({ page }) => {
  4  | 
  5  |         await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter');
  6  | 
  7  |         const heading = page.getByText('multiple element filters', { exact: true });
  8  |         await expect(heading).toBeVisible();
  9  | 
  10 |         const LoginFrame = page.locator('#login');
  11 |         await expect(LoginFrame).toContainText('Student Login', { timeout: 10000 });
  12 | 
  13 |         const emailTextbox= page.locator('#email').fill("student@example.com");
> 14 |         const emailTextboxValue = await page.locator('emailTextbox').inputValue();
     |                                                                      ^ Error: locator.inputValue: Target page, context or browser has been closed
  15 |         expect(emailTextboxValue).toBe("student@example.com");
  16 | 
  17 |       /*   const pwdTextbox= page.locator('#password').fill("student@123");
  18 |         const pwdTextboxValue = await page.locator('#password').inputValue();
  19 |         expect(pwdTextboxValue).toBe("student@123");
  20 | 
  21 |         await page.locator('input[type="checkbox"]').check(); */
  22 | 
  23 |     await page.pause();
  24 |  });
```