# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 07_WebTables\26Sept_Task1.spec.ts >> Automate orangeHRM
- Location: tests\07_WebTables\26Sept_Task1.spec.ts:3:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('//i[@class=\'oxd-icon bi-check oxd-checkbox-input-icon\']').nth(1)

```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test';
  2  | 
  3  | test("Automate orangeHRM", async ({page}) => {
  4  | 
  5  | await page .goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  6  | 
  7  | await page.locator("//input[@name='username']").fill("Admin");
  8  | await page.locator("//input[@name='password']").fill("admin123");
  9  | await page.locator("//button[@type='submit']").click();
  10 | 
  11 | await page.locator('a span').filter({hasText:'PIM'}).click();
  12 | await page.getByRole('button', { name: 'Add' }).click();
  13 | 
  14 | await page.locator("//input[@name='firstName']").fill("Dhana");
  15 | await page.locator("//input[@name='middleName']").fill("Rithan");
  16 | await page.locator("//input[@name='lastName']").fill("Mathu");
  17 | await page.locator("//input[@class='oxd-input oxd-input--active']").nth(1).fill("2320");
  18 | await page.getByRole('button', { name: 'Save' }).click();
  19 | 
  20 | await page.locator('a span').filter({hasText:'PIM'}).click();
  21 | await page.locator("//input[@class='oxd-input oxd-input--active']").nth(1).fill("2320");
  22 | await page.getByRole('button', { name: 'Search' }).click();
> 23 | await page.locator("//i[@class='oxd-icon bi-check oxd-checkbox-input-icon']").nth(1).click();
     |                                                                                      ^ Error: locator.click: Target page, context or browser has been closed
  24 | //await page.locator("//i[@class='oxd-icon bi-trash']").click();
  25 | await page.getByRole('button', { name: 'Delete'}).click({force:true});
  26 | await page.getByRole('button', { name: ' Yes, Delete '}).click();
  27 | 
  28 | 
  29 | await page.pause();
  30 | });
```