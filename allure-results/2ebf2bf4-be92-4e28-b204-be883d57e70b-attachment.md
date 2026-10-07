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
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByText('button span hasText(\'Continue\')')

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
        - heading "Sign in to TheTestingAcademy" [level=1] [ref=e43]
        - paragraph [ref=e44]: Welcome back! Please sign in to continue
      - generic [ref=e45]:
        - button "Sign in with Google Continue with Google" [ref=e48] [cursor=pointer]:
          - generic [ref=e49]:
            - img "Sign in with Google" [ref=e51]
            - generic [ref=e52]: Continue with Google
        - paragraph [ref=e55]: or
        - generic [ref=e57]:
          - generic [ref=e58]:
            - generic [ref=e61]:
              - generic [ref=e62]: Email address
              - textbox "Email address" [active] [ref=e64]:
                - /placeholder: Enter your email address
                - text: dhanalakshmiabcd@gmail.com
            - generic:
              - generic:
                - generic:
                  - generic: Password
                  - generic:
                    - textbox "Password":
                      - /placeholder: Enter your password
                    - button "Show password"
          - button "Continue" [ref=e67] [cursor=pointer]
    - link "← Back to Home" [ref=e71] [cursor=pointer]:
      - /url: /
  - button "Chat with support on WhatsApp" [ref=e72] [cursor=pointer]
```

# Test source

```ts
  1  | import { test, expect, Locator } from '@playwright/test';
  2  | 
  3  | test.describe('Automate Profile Picture Update in app.thetestingacademy.com site', () => {
  4  | 
  5  |     const URL = 'https://app.thetestingacademy.com/login';
  6  | 
  7  |    test('Profile Picture Upload', async ({ page }) => {
  8  |        await page.goto(URL);
  9  | 
  10 |         await page.locator("#identifier-field").fill("dhanalakshmiabcd@gmail.com");
> 11 |         await page.getByText("button span hasText('Continue')").click();
     |                                                                 ^ Error: locator.click: Test timeout of 30000ms exceeded.
  12 | 
  13 | 
  14 |      await page.pause();
  15 | 
  16 |    });
  17 | 
  18 | });
```