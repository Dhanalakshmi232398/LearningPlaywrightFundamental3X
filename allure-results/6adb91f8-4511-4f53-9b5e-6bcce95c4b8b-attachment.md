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
- generic [ref=e2]:
  - generic [ref=e3]:
    - button "Dismiss banner" [ref=e4] [cursor=pointer]
    - generic [ref=e8]:
      - generic [ref=e9]: LIVE
      - generic [ref=e11]: 🎭 Playwright + AI Blueprint
      - generic [ref=e12]: New Batch Launching
      - generic [ref=e13]: "|"
      - generic [ref=e14]: New Batch • 5 Oct 2026, 7 AM IST
      - generic [ref=e15]: "|"
      - generic [ref=e16]:
        - generic [ref=e17]: ₹35,000
        - generic [ref=e18]: ₹9,999
        - generic [ref=e19]: 33% OFF
      - generic [ref=e20]:
        - text: "Code:"
        - generic [ref=e23]: PLAYWRIGHT
      - generic [ref=e24]:
        - button "Join" [ref=e25] [cursor=pointer]
        - link "Chat on WhatsApp" [ref=e31] [cursor=pointer]:
          - /url: https://sdet.live/WhatsApp
        - generic [ref=e34]:
          - button "View announcement 1" [ref=e35] [cursor=pointer]
          - button "View announcement 2" [ref=e36] [cursor=pointer]
  - generic [ref=e37]:
    - generic [ref=e40]:
      - generic [ref=e42]:
        - heading "Check your email" [level=1] [ref=e43]
        - paragraph [ref=e44]: to continue to TheTestingAcademy
        - paragraph [ref=e46]: dhanalakshmiabcd@gmail.com
      - generic [ref=e47]:
        - generic [ref=e48]:
          - generic [ref=e50]:
            - generic:
              - group:
                - generic: "0"
                - generic: "0"
                - generic: "0"
              - textbox "Enter verification code" [active] [ref=e51]: "000"
          - button "Didn't receive a code? Resend (8)" [disabled]
        - paragraph [ref=e54]: You're signing in from a new device. We're asking for verification to keep your account secure.
        - button "Continue" [ref=e56] [cursor=pointer]
    - link "← Back to Home" [ref=e60] [cursor=pointer]:
      - /url: /
  - button "Chat with support on WhatsApp" [ref=e61] [cursor=pointer]
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
  24 |         const imgfile1 = path.join(__dirname, 'photo.jpg');
  25 |          console.log(imgfile1);
  26 | 
  27 | 
  28 |         const uploadArea = page.getByText('Upload Photo');
  29 |         await uploadArea.setInputFiles([imgfile1]);
  30 |       await expect(uploadArea).toContainText('imgFile1.jpg');
  31 | 
  32 | 
  33 | 
  34 | 
  35 |      /*    const imguploadArea = page.getByText('Upload Photo').setInputFiles([imgfile1]);
  36 |         console.log('photo.jpg');
  37 | 
  38 | 
  39 |         await expect(imguploadArea).toContainText('file1.jpg');
  40 |               // __dirname - Current working directory full path 
  41 |               
  42 |               await page.locator("#single-upload").setInputFiles([imgfilePath]);
  43 |               await page.pause(); */
  44 |        
  45 | 
  46 | 
  47 | 
  48 | 
  49 | 
  50 | 
  51 |         await page.pause();
  52 |     });
  53 | 
  54 | });
```