# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Tasks\6Oct_AutomateProfilePicUpdate.spec.ts >> Automate Profile Picture Update in app.thetestingacademy.com site >> Profile Picture Upload
- Location: tests\Tasks\6Oct_AutomateProfilePicUpdate.spec.ts:8:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('textbox', { name: 'Enter the Verification Code from Gmail' })

```

# Page snapshot

```yaml
- generic [ref=f1e2]:
  - generic [ref=f1e3]:
    - button "Dismiss banner" [ref=f1e4] [cursor=pointer]
    - generic [ref=f1e8]:
      - generic [ref=f1e9]: LIVE
      - generic [ref=f1e11]: 🚀 AI Tester Blueprint
      - generic [ref=f1e12]: New Batch Launching
      - generic [ref=f1e13]: "|"
      - generic [ref=f1e14]: New Batch • 18 Oct 2026, 11:00 AM to 12:45 PM IST
      - generic [ref=f1e15]: "|"
      - generic [ref=f1e16]:
        - generic [ref=f1e17]: ₹35,000
        - generic [ref=f1e18]: ₹9,999
        - generic [ref=f1e19]: 33% OFF
      - generic [ref=f1e20]:
        - text: "Code:"
        - generic [ref=f1e23]: AITESTER
      - generic [ref=f1e24]:
        - button "Join" [ref=f1e25] [cursor=pointer]
        - link "Chat on WhatsApp" [ref=f1e31] [cursor=pointer]:
          - /url: https://sdet.live/WhatsApp
        - generic [ref=f1e34]:
          - button "View announcement 1" [ref=f1e35] [cursor=pointer]
          - button "View announcement 2" [ref=f1e36] [cursor=pointer]
  - status [ref=f1e38]:
    - generic [ref=f1e39]: The Testing Academy
    - heading "Opening your dashboard" [level=1] [ref=f1e42]
    - paragraph [ref=f1e43]: Checking your secure session...
  - button "Chat with support on WhatsApp" [ref=f1e44] [cursor=pointer]
```

# Test source

```ts
  1  | import { test, expect, Locator } from '@playwright/test';
  2  | import path from 'path';
  3  | 
  4  | test.describe('Automate Profile Picture Update in app.thetestingacademy.com site', () => {
  5  | 
  6  |     const URL = 'https://app.thetestingacademy.com/login';
  7  | 
  8  |     test('Profile Picture Upload', async ({ page }) => {
  9  |         await page.goto(URL);
  10 | 
  11 |         await page.locator("#identifier-field").fill("dhanalakshmiabcd@gmail.com");
  12 |         await page.getByRole('button', { name: 'Continue', exact: true }).click();
  13 | 
  14 |         await page.locator("#password-field").fill("DhanaMathu@230420");
  15 |         await page.getByRole('button', { name: 'Continue', exact: true }).click();
  16 | 
> 17 |         await page.getByRole('textbox', { name: 'Enter the Verification Code from Gmail' }).fill('123456'); //given verification code manually
     |                                                                                             ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  18 |         await page.waitForLoadState('networkidle');
  19 |         await page.getByRole('button', { name: 'Continue', exact: true }).click();
  20 |          await page.getByRole('button', { name: 'Close'}).click();
  21 |          await page.waitForTimeout(2000);
  22 | 
  23 |         await page.getByRole('link', { name: 'Settings' }).click();
  24 | 
  25 |         const imgFilePath = path.join(__dirname, 'imgFile1.jpg');
  26 |         console.log(imgFilePath);
  27 | 
  28 |         const uploadInput = page.locator('input[type="file"]').first();
  29 |         await uploadInput.setInputFiles(imgFilePath);
  30 | 
  31 |         await expect(page.getByText(/imgFile1\.jpg/i)).toBeVisible();
  32 | 
  33 | 
  34 | 
  35 | 
  36 |      /*    const imguploadArea = page.getByText('Upload Photo').setInputFiles([imgfile1]);
  37 |         console.log('photo.jpg');
  38 | 
  39 | 
  40 |         await expect(imguploadArea).toContainText('file1.jpg');
  41 |               // __dirname - Current working directory full path 
  42 |               
  43 |               await page.locator("#single-upload").setInputFiles([imgfilePath]);
  44 |               await page.pause(); */
  45 |        
  46 | 
  47 | 
  48 | 
  49 | 
  50 | 
  51 | 
  52 |         await page.pause();
  53 |     });
  54 | 
  55 | });
```