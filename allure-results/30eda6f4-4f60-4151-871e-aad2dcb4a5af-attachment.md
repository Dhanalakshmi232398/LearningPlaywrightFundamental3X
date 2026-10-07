# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Tasks\6Oct_AutomateProfilePicUpdate.spec.ts >> Automate Profile Picture Update in app.thetestingacademy.com site >> locate Shadow DOM and assert visible
- Location: tests\Tasks\6Oct_AutomateProfilePicUpdate.spec.ts:13:11

# Error details

```
Error: locator.fill: Target page, context or browser has been closed
Call log:
  - waiting for locator('#identifier-field')

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import path from 'path';
  3  | 
  4  | test.describe('Automate Profile Picture Update in app.thetestingacademy.com site', () => {
  5  | 
  6  |     const URL = 'https://app.thetestingacademy.com/login';
  7  | 
  8  |     test('Profile Picture Upload', async ({ page }) => {
  9  |         await page.goto(URL);
  10 | 
  11 |       });
  12 | 
  13 |       test('locate Shadow DOM and assert visible', async ({ page }) => {
  14 | 
> 15 |         await page.locator("#identifier-field").fill("dhanalakshmiabcd@gmail.com");
     |                                                 ^ Error: locator.fill: Target page, context or browser has been closed
  16 |         await page.getByRole('button', { name: 'Continue', exact: true }).click();
  17 | 
  18 |         await page.locator("#password-field").fill("DhanaMathu@230420");
  19 |         await page.getByRole('button', { name: 'Continue', exact: true }).click();
  20 | 
  21 |         await page.getByRole('textbox', { name: 'Enter the Verification Code from Gmail' }).fill('123456'); //given verification code manually
  22 |         await page.getByRole('button', { name: 'Continue', exact: true }).click();
  23 |         const closeButton = page.getByRole('button', { name: 'Close' });
  24 |         await expect(closeButton).toBeVisible();
  25 |         await closeButton.click();
  26 | 
  27 |         await page.getByRole('link', { name: 'Settings' }).click();
  28 | 
  29 |         const imgFilePath = path.join(__dirname, 'imgFile1.jpg');
  30 |         console.log(imgFilePath);
  31 | 
  32 |         const uploadInput = page.locator('input[type="file"]').first();
  33 |         await uploadInput.setInputFiles(imgFilePath);
  34 | 
  35 |         await expect(page.getByText(/imgFile1\.jpg/i)).toBeVisible();
  36 | 
  37 | 
  38 |         await page.pause();
  39 |     });
  40 | 
  41 | });
  42 | 
  43 |      /*    const imguploadArea = page.getByText('Upload Photo').setInputFiles([imgfile1]);
  44 |         console.log('photo.jpg');
  45 | 
  46 | 
  47 |         await expect(imguploadArea).toContainText('file1.jpg');
  48 |               // __dirname - Current working directory full path 
  49 |               
  50 |               await page.locator("#single-upload").setInputFiles([imgfilePath]);
  51 |               await page.pause(); */
  52 |        
  53 | 
  54 | 
  55 | 
  56 | 
  57 | 
  58 | 
  59 | 
```