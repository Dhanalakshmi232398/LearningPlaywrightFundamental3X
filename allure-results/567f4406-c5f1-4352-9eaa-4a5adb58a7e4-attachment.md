# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Tasks\6Oct_AutomateProfilePicUpdate.spec.ts >> Automate Profile Picture Update in app.thetestingacademy.com site >> Profile Picture Upload
- Location: tests\Tasks\6Oct_AutomateProfilePicUpdate.spec.ts:7:8

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
                - generic: "8"
                - generic: "1"
                - generic: "1"
                - generic: "6"
                - generic: "3"
              - textbox "Enter verification code" [active] [ref=e51]: "81163"
          - button "Didn't receive a code? Resend (5)" [disabled]
        - paragraph [ref=e54]: You're signing in from a new device. We're asking for verification to keep your account secure.
        - button "Continue" [ref=e56] [cursor=pointer]
    - link "← Back to Home" [ref=e60] [cursor=pointer]:
      - /url: /
  - button "Chat with support on WhatsApp" [ref=e61] [cursor=pointer]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('Automate Profile Picture Update in app.thetestingacademy.com site', () => {
  4  | 
  5  |     const URL = 'https://app.thetestingacademy.com/login';
  6  | 
  7  |    test('Profile Picture Upload', async ({ page }) => {
  8  |        await page.goto(URL);
  9  | 
  10 |         await page.locator("#identifier-field").fill("dhanalakshmiabcd@gmail.com");
  11 |        await page.getByRole('button', { name: 'Continue', exact: true }).click();
  12 | 
  13 |        await page.locator("#password-field").fill("DhanaMathu@230420");
  14 |        await page.getByRole('button', { name: 'Continue', exact: true }).click();
  15 | 
> 16 |         await page.getByRole('textbox', { name: 'Enter the Verification Code from Gmail' }).fill('123456'); //given verification code manually
     |                                                                                             ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  17 |         await page.waitForLoadState('networkidle');
  18 |        await page.getByRole('button', { name: 'Continue', exact: true }).click();
  19 | 
  20 |        
  21 |         
  22 | 
  23 |        await page.pause();
  24 |    });
  25 | 
  26 | });
```