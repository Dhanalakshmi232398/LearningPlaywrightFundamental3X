# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Tasks\6Oct_AutomateProfilePicUpdate.spec.ts >> Automate Profile Picture Update in app.thetestingacademy.com site >> Profile Picture Upload
- Location: tests\Tasks\6Oct_AutomateProfilePicUpdate.spec.ts:7:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('textbox', { name: 'Enter the Verification Code from Gmail' })
    - waiting for "https://app.thetestingacademy.com/student/my-process" navigation to finish...
    - navigated to "https://app.thetestingacademy.com/student/my-process"

```

# Page snapshot

```yaml
- generic:
  - generic [aria-hidden]:
    - generic:
      - button
      - generic:
        - generic: LIVE
        - generic: 🚀 AI Tester Blueprint
        - generic: New Batch Launching
        - generic: "|"
        - generic: New Batch • 18 Oct 2026, 11:00 AM to 12:45 PM IST
        - generic: "|"
        - generic:
          - generic: ₹35,000
          - generic: ₹9,999
          - generic: 33% OFF
        - generic:
          - text: "Code:"
          - generic: AITESTER
        - generic:
          - button: Join
          - link:
            - /url: https://sdet.live/WhatsApp
          - generic:
            - button
            - button
    - generic:
      - generic:
        - generic:
          - generic:
            - generic:
              - generic:
                - generic:
                  - generic:
                    - generic:
                      - generic:
                        - generic: brave-panda-786
                        - button: "60"
                      - generic: Playwright
                    - button:
                      - generic: Toggle Sidebar
                  - generic:
                    - generic:
                      - textbox:
                        - /placeholder: Search...
                - generic:
                  - generic:
                    - generic:
                      - list:
                        - listitem:
                          - link:
                            - /url: /student/dashboard
                            - generic: Dashboard
                        - generic:
                          - listitem:
                            - button [expanded]:
                              - generic: Learn
                          - generic:
                            - list:
                              - listitem:
                                - link:
                                  - /url: /student/skill-graph
                                  - generic:
                                    - generic: Skill Graph
                                    - generic: MVP
                              - listitem:
                                - link:
                                  - /url: /student/my-process
                                  - generic: My Process
                              - listitem:
                                - link:
                                  - /url: /student/playground
                                  - generic: AI Tester
                              - listitem:
                                - link:
                                  - /url: /student/playwright
                                  - generic:
                                    - generic: Playwright
                                    - generic: Enrolled
                              - listitem:
                                - link:
                                  - /url: /student/selenium
                                  - generic: Selenium
                              - listitem:
                                - link:
                                  - /url: /student/books
                                  - generic:
                                    - generic: Books
                                    - generic: NEW
                        - generic:
                          - listitem:
                            - button [expanded]:
                              - generic: Practice
                          - generic:
                            - list:
                              - listitem:
                                - link:
                                  - /url: /student/coding-practice
                                  - generic:
                                    - generic: Coding Practice
                                    - generic: NEW
                              - listitem:
                                - link:
                                  - /url: /student/live-coding-test
                                  - generic:
                                    - generic: Live Coding Test
                                    - generic: NEW
                              - listitem:
                                - link:
                                  - /url: /student/live-test
                                  - generic: Live Test
                              - listitem:
                                - link:
                                  - /url: /student/challenges
                                  - generic:
                                    - generic: QA Battle
                                    - generic: 400+
                              - listitem:
                                - link:
                                  - /url: /student/ai-interview
                                  - generic:
                                    - generic: AI Interview
                                    - generic: BETA
                              - listitem:
                                - link:
                                  - /url: /student/interview-qa
                                  - generic: Crack QA Interview
                        - generic:
                          - listitem:
                            - button [expanded]:
                              - generic: Community
                          - generic:
                            - list:
                              - listitem:
                                - link:
                                  - /url: /student/leaderboard
                                  - generic: Leaderboard
                              - listitem:
                                - link:
                                  - /url: /student/referral
                                  - generic: Referrals
                        - generic:
                          - listitem:
                            - button [expanded]:
                              - generic: Account
                          - generic:
                            - list:
                              - listitem:
                                - link:
                                  - /url: /student/achievements
                                  - generic: Achievements
                              - listitem:
                                - link:
                                  - /url: /student/portfolio
                                  - generic: Portfolio
                              - listitem:
                                - link:
                                  - /url: /student/settings
                                  - generic: Settings
                - generic:
                  - button:
                    - generic: Product tour
                  - button:
                    - generic: Logout
          - main:
            - generic:
              - generic:
                - button:
                  - generic: "1"
            - generic:
              - generic:
                - generic:
                  - generic:
                    - generic:
                      - generic:
                        - heading [level=1]: Dashboard
                        - paragraph: Track your daily progress, celebrate milestones, and build lasting habits ✨
                        - generic:
                          - generic: 43 total entries
                          - generic: 0 day streak
                      - button: Add Today's Learning
                - generic:
                  - generic:
                    - generic:
                      - generic:
                        - generic:
                          - generic: "43"
                          - generic: Learning Days
                  - generic:
                    - generic:
                      - generic:
                        - generic:
                          - generic: "0"
                          - generic: Projects Created
                  - generic:
                    - generic:
                      - generic:
                        - generic:
                          - generic: "0"
                          - generic: Questions Asked
                  - generic:
                    - generic:
                      - generic:
                        - generic:
                          - generic: "0"
                          - generic: Day Streak
                - generic:
                  - tablist:
                    - tab [selected]: Calendar View
                    - tab: GitHub Activity
                    - tab: List View
                  - tabpanel:
                    - generic:
                      - generic:
                        - generic:
                          - heading [level=3]: Recent Learning Activities
                          - button: View All
                      - generic:
                        - generic:
                          - generic:
                            - generic:
                              - generic:
                                - generic: Sat, Oct 3
                                - generic: 3 days ago
                              - heading [level=4]: Handle SVG
                              - generic: Notes
                              - paragraph: SVG selectors XPath with local-name() Click/hover on SVG paths Attribute assertions on path elements Handling dynamic SVG maps
                        - generic:
                          - generic:
                            - generic:
                              - generic:
                                - generic: Thu, Oct 1
                                - generic: 5 days ago
                              - heading [level=4]: Handle Keyboard and Mouse Events, JS Alerts
                              - generic: Notes
                              - paragraph: The main learning for today was how to interact with real web UI drag-and-drop using mouse coordinates instead of a built-in drag-and-drop API. JS Alerts and examples
                        - generic:
                          - generic:
                            - generic:
                              - generic:
                                - generic: Tue, Sep 29
                                - generic: 9/29/2026
                              - heading [level=4]: Web Select, Handling Frame and iFrame windows
                              - generic: Notes
                              - paragraph: "Keywords: dropdown, iframe, locator, assertion, form fill, web table, session storage, allure, test annotations, browser-context-page Summary: Learned core Playwright concepts for UI automation, including interacting with dropdowns, frames, forms, tables, and multiple elements, along with assertions, test control annotations, and reporting. This builds a strong foundation for end-to-end web testing"
                        - generic:
                          - generic:
                            - generic:
                              - generic:
                                - generic: Sat, Sep 26
                                - generic: 9/26/2026
                              - heading [level=4]: WebTable and Pagination
                              - generic: Notes
                              - paragraph: "Playwright Web Tables, Pagination, Reusable Functions, async/await, Page, Locator, filter({ hasText }), count(), isDisabled(), click(), innerText(), data attributes, error handling Shortcut keyword: PW-WebTable-Pagination"
                        - generic:
                          - generic:
                            - generic:
                              - generic:
                                - generic: Thu, Sep 24
                                - generic: 9/24/2026
                              - heading [level=4]: Multiple element & Web table supports in playwright
                              - generic: Notes
                              - paragraph: Web tables Rows and columns Table data extraction Row and column counting Nested for loops Dynamic XPath XPath string construction -locator() -innerText() -allInnerTexts() following-sibling Text matching with includes() page.goto() page.pause()
                    - generic:
                      - generic:
                        - generic:
                          - heading [level=2]: October 2026
                          - button: Add Today's Learning
                        - generic:
                          - button
                          - button: Today
                          - button
                      - generic:
                        - generic:
                          - generic:
                            - generic: Sun
                            - generic: Mon
                            - generic: Tue
                            - generic: Wed
                            - generic: Thu
                            - generic: Fri
                            - generic: Sat
                          - generic:
                            - generic:
                              - generic:
                                - generic: "1"
                                - generic: Handle Keyboard and Mouse Events, JS Alerts
                            - generic: "2"
                            - generic:
                              - generic:
                                - generic: "3"
                                - generic: Handle SVG
                            - generic: "4"
                            - generic: "5"
                            - generic: "6"
                            - generic: "7"
                            - generic: "8"
                            - generic: "9"
                            - generic: "10"
                            - generic: "11"
                            - generic: "12"
                            - generic: "13"
                            - generic: "14"
                            - generic: "15"
                            - generic: "16"
                            - generic: "17"
                            - generic: "18"
                            - generic: "19"
                            - generic: "20"
                            - generic: "21"
                            - generic: "22"
                            - generic: "23"
                            - generic: "24"
                            - generic: "25"
                            - generic: "26"
                            - generic: "27"
                            - generic: "28"
                            - generic: "29"
                            - generic: "30"
                            - generic: "31"
                      - generic:
                        - generic:
                          - generic:
                            - generic: "2"
                            - generic: Learning Days This Month
                        - generic:
                          - generic:
                            - generic: "0"
                            - generic: GitHub Repositories
                        - generic:
                          - generic:
                            - generic: "0"
                            - generic: Questions & Doubts
                        - generic:
                          - generic:
                            - generic: "43"
                            - generic: Total Entries
    - button
  - dialog [ref=f1e2]:
    - heading "Live Batch Announcement" [level=2] [ref=f1e3]
    - generic [ref=f1e4]:
      - button "Dismiss" [active] [ref=f1e8] [cursor=pointer]
      - generic [ref=f1e12]:
        - generic [ref=f1e13]: LIVE
        - generic [ref=f1e15]: Batch Starting Soon!
        - generic [ref=f1e16]: New Batch Launching
      - heading "🚀 AI Tester Blueprint" [level=2] [ref=f1e17]
      - paragraph [ref=f1e18]: 10-Week Program • Sat & Sun, 11:00 AM – 12:45 PM IST
      - generic [ref=f1e19]:
        - generic [ref=f1e20]: ₹35,000
        - generic [ref=f1e21]: ₹9,999
        - generic [ref=f1e22]: SAVE 33%
      - generic [ref=f1e27]:
        - generic [ref=f1e28]:
          - generic [ref=f1e29]: "11"
          - generic [ref=f1e30]: Days
        - generic [ref=f1e31]: ":"
        - generic [ref=f1e32]:
          - generic [ref=f1e33]: "11"
          - generic [ref=f1e34]: Hours
        - generic [ref=f1e35]: ":"
        - generic [ref=f1e36]:
          - generic [ref=f1e37]: "38"
          - generic [ref=f1e38]: Min
        - generic [ref=f1e39]: ":"
        - generic [ref=f1e40]:
          - generic [ref=f1e41]: "30"
          - generic [ref=f1e42]: Sec
      - generic [ref=f1e43]:
        - generic [ref=f1e44]:
          - generic [ref=f1e45]: ✅
          - text: 10-Week Program
        - generic [ref=f1e46]:
          - generic [ref=f1e47]: ✅
          - text: Doubt Sessions
        - generic [ref=f1e48]:
          - generic [ref=f1e49]: ✅
          - text: Job Assistance
        - generic [ref=f1e50]:
          - generic [ref=f1e51]: ✅
          - text: Bonus Courses
      - generic [ref=f1e52]:
        - generic [ref=f1e55]: Use code
        - generic [ref=f1e56]: AITESTER
      - generic [ref=f1e57]:
        - button "Join Live Batch Now" [ref=f1e58] [cursor=pointer]
        - link "Chat on WhatsApp" [ref=f1e64] [cursor=pointer]:
          - /url: https://sdet.live/WhatsApp
      - paragraph [ref=f1e67]: Starts October 18, 2026
      - generic [ref=f1e68]:
        - button "View announcement 1" [ref=f1e69] [cursor=pointer]
        - button "View announcement 2" [ref=f1e70] [cursor=pointer]
    - button "Close" [ref=f1e71] [cursor=pointer]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('Automate Profile Picture Update in app.thetestingacademy.com site', () => {
  4  | 
  5  |     const URL = 'https://app.thetestingacademy.com/login';
  6  | 
  7  |     test('Profile Picture Upload', async ({ page }) => {
  8  |         await page.goto(URL);
  9  | 
  10 |         await page.locator("#identifier-field").fill("dhanalakshmiabcd@gmail.com");
  11 |         await page.getByRole('button', { name: 'Continue', exact: true }).click();
  12 | 
  13 |         await page.locator("#password-field").fill("DhanaMathu@230420");
  14 |         await page.getByRole('button', { name: 'Continue', exact: true }).click();
  15 | 
> 16 |         await page.getByRole('textbox', { name: 'Enter the Verification Code from Gmail' }).fill('123456'); //given verification code manually
     |                                                                                             ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  17 |         await page.waitForLoadState('networkidle');
  18 |         await page.getByRole('button', { name: 'Continue', exact: true }).click();
  19 |          await page.getByRole('button', { name: 'Close', exact: true }).click();
  20 |         
  21 | 
  22 | 
  23 | 
  24 | 
  25 | 
  26 | 
  27 | 
  28 |         await page.pause();
  29 |     });
  30 | 
  31 | });
```