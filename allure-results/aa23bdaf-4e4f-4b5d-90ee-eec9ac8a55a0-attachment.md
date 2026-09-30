# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Tasks\29Sept_QAFillForm.spec.ts >> QA Profile Form
- Location: tests\Tasks\29Sept_QAFillForm.spec.ts:3:5

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: getByTestId('selenium-tab-panel')
Expected substring: "element.click(); element.sendKeys('hello'); element.getAttribute('value');"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toContainText" getByTestId('selenium-tab-panel') with timeout 5000ms
  - waiting for getByTestId('selenium-tab-panel')

```

```yaml
- 'region "Announcement: Playwright Automation Mastery new batch"':
  - text: LIVE Playwright Automation Mastery New batch | Starts 28 Sept · Mon, Wed, Fri · 7 AM IST |
  - emphasis: UP TO 10% OFF
  - text: Code
  - code: PROMODE
  - link "Enroll":
    - /url: https://class.thetestingacademy.com/playwright-automation-mastery-course
  - link "Chat on WhatsApp":
    - /url: https://sdet.live/WhatsApp
    - text: ☎
  - button "Dismiss banner": ×
- complementary "Practice navigation":
  - link "T The Testing Academy":
    - /url: ../index.html
    - text: T
    - strong: The Testing Academy
  - button "Toggle sidebar"
  - searchbox /
  - text: /
  - navigation:
    - button "JavaScript" [expanded]
    - list:
      - listitem:
        - link "Overview":
          - /url: ../learn/javascript/index.html
      - listitem:
        - link "Foundations (ch 1-4)":
          - /url: ../learn/javascript/foundations.html
      - listitem: Control flow (ch 5-7) soon
      - listitem: Data structures (ch 8-12) soon
      - listitem: Functions (ch 9 + 13) soon
      - listitem: Async (ch 14-15) soon
      - listitem: OOP (ch 16-17) soon
      - listitem:
        - link "JS notes":
          - /url: ../notes.html
    - button "TypeScript" [expanded]
    - list:
      - listitem:
        - link "Overview":
          - /url: ../learn/typescript/index.html
      - listitem:
        - link "Setup + basics soon":
          - /url: ../learn/typescript/setup.html
      - listitem:
        - link "Types deep dive soon":
          - /url: ../learn/typescript/types.html
      - listitem:
        - link "Interfaces soon":
          - /url: ../learn/typescript/interfaces.html
      - listitem:
        - link "Enums soon":
          - /url: ../learn/typescript/enums.html
      - listitem:
        - link "Generics soon":
          - /url: ../learn/typescript/generics.html
      - listitem:
        - link "Access modifiers + classes soon":
          - /url: ../learn/typescript/classes.html
    - button "Playwright fundamentals" [expanded]
    - list:
      - listitem:
        - link "Overview":
          - /url: ../learn/playwright-fundamentals/overview.html
      - listitem:
        - link "Architecture deep dive":
          - /url: ../playwright-e2e-architecture-blueprint.html
      - listitem:
        - link "LangChain agent guide":
          - /url: ../playwright-agent-with-langchain.html
      - listitem:
        - link "Playwright MCP tutorial":
          - /url: ../playwright-mcp.html
      - listitem:
        - link "AI agents guide":
          - /url: ../playwright-ai-agents.html
      - listitem:
        - link "Curriculum hub":
          - /url: ../learn/playwright-fundamentals/index.html
      - listitem:
        - link "Multiple Element Filter":
          - /url: ../multiple_element_filter.html
      - listitem:
        - link "Web Table Directory":
          - /url: ../webtable.html
      - listitem:
        - link "QA Profile Form":
          - /url: ../tables/practice.html
      - listitem:
        - link "Companies Table":
          - /url: ../tables/webtable.html
      - listitem:
        - link "Tall Buildings Table":
          - /url: ../tables/webtable1.html
      - listitem:
        - link "Custom Dropdowns":
          - /url: ../tables/dropdowns.html
      - listitem:
        - link "Select Box Variants":
          - /url: ../tables/select-boxes.html
      - listitem:
        - link "Sortable Admin Table":
          - /url: ../tables/sortable.html
      - listitem:
        - link "Cricket Scorecard":
          - /url: ../tables/scorecard.html
      - listitem:
        - link "Frames overview":
          - /url: ../frames/index.html
      - listitem:
        - link "Multi-frame frameset":
          - /url: ../frames/multi-frames.html
      - listitem:
        - link "Nested iframes":
          - /url: ../frames/nested-iframes.html
      - listitem:
        - link "Courses frameset":
          - /url: ../frames/courses-frameset.html
      - listitem:
        - link "SVG locators":
          - /url: ../widgets/svg.html
      - listitem:
        - link "Shadow DOM":
          - /url: ../widgets/shadow-dom.html
      - listitem:
        - link "Calendar / date picker":
          - /url: ../widgets/calendar.html
      - listitem:
        - link "Drag and drop":
          - /url: ../widgets/dnd.html
      - listitem:
        - link "Toasts and notifications":
          - /url: ../widgets/toasts.html
      - listitem:
        - link "Native dialogs":
          - /url: ../widgets/dialogs.html
      - listitem:
        - link "Hover menus":
          - /url: ../widgets/hover-menu.html
      - listitem:
        - link "Right-click menu":
          - /url: ../widgets/context-menu.html
      - listitem:
        - link "Keyboard navigation":
          - /url: ../widgets/keyboard-form.html
      - listitem:
        - link "Windows and Tabs":
          - /url: ../widgets/windows-tabs.html
      - listitem:
        - link "Upload and Download":
          - /url: ../widgets/upload-download.html
      - listitem:
        - link "Scroll":
          - /url: ../widgets/scroll.html
      - listitem:
        - link "Assertions (expect)":
          - /url: ../widgets/expect.html
      - listitem:
        - link "Test modifiers, hooks, data":
          - /url: ../widgets/test-modifiers.html
      - listitem:
        - link "Data-driven + POM":
          - /url: ../widgets/data-driven.html
      - listitem:
        - link "Network interception":
          - /url: ../network/intercept.html
      - listitem:
        - link "TTACart demo":
          - /url: ../ttacart/index.html
      - listitem:
        - link "TTAStays booking":
          - /url: ../booking/index.html
      - listitem:
        - link "Advance Playwright framework":
          - /url: ../advance-framework.html
    - button "Playwright API Testing" [expanded]
    - list:
      - listitem:
        - link "Overview":
          - /url: ../learn/playwright-api/index.html
      - listitem:
        - link "CRUD basics":
          - /url: ../learn/playwright-api/crud.html
      - listitem:
        - link "Auth + Schema":
          - /url: ../learn/playwright-api/auth-schema.html
      - listitem:
        - link "Network monitoring":
          - /url: ../learn/playwright-api/network.html
    - button "Playwright BDD (Cucumber)" [expanded]
    - list:
      - listitem:
        - link "Overview":
          - /url: ../learn/playwright-cucumber/index.html
      - listitem:
        - link "Setup + first run":
          - /url: ../learn/playwright-cucumber/setup.html
      - listitem:
        - link "Data-driven":
          - /url: ../learn/playwright-cucumber/data-driven.html
      - listitem:
        - link "CI + tags + env":
          - /url: ../learn/playwright-cucumber/ci-tags-env.html
    - button "Playwright DevOps" [expanded]
    - list:
      - listitem:
        - link "NPM Registry (JFrog/Nexus)":
          - /url: ../learn/playwright-registry/index.html
      - listitem:
        - link "Docker setup":
          - /url: ../learn/playwright-docker/index.html
      - listitem:
        - link "Sharding multi-container":
          - /url: ../learn/playwright-shard/index.html
    - button "Playwright AI" [expanded]
    - list:
      - listitem:
        - link "Curriculum hub":
          - /url: ../learn/playwright-ai-agents/index.html
      - listitem:
        - link "Framework + AI (V2)":
          - /url: ../advance-framework-ai.html
      - listitem:
        - link "TTACart + AI live demo":
          - /url: ../ttacart-ai/index.html
      - listitem:
        - link "TTA AI Chat sandbox":
          - /url: ../ai-chat/index.html
    - button "Playwright MCP" [expanded]
    - list:
      - listitem:
        - link "Curriculum hub":
          - /url: ../learn/playwright-mcp/index.html
    - button "Playwright CLI" [expanded]
    - list:
      - listitem:
        - link "Curriculum hub":
          - /url: ../learn/playwright-cli/index.html
      - listitem:
        - link "SnapLocator (Chrome ext)":
          - /url: ../snaplocator.html
  - text: © The Testing Academy · 2026
  - button "Toggle dark mode"
- banner:
  - button "Open sidebar"
  - link "Practice":
    - /url: ../index.html
  - text: Tables
  - strong: QA Profile Form
  - checkbox "Locator markers" [checked]
  - text: Locator markers Form practice
  - button "Toggle dark mode"
- main:
  - region "QA Profile Form practice":
    - text: Form practice · Inputs & widgets
    - heading "QA Profile Form practice" [level=1]:
      - text: QA
      - emphasis: Profile Form
      - text: practice
    - paragraph: "A focused form for practising every input type Playwright tests cover: text fields, radio groups, dropdowns, dates, checkboxes, tabs, file upload, and downloads. Build out your locator strategy before you reveal the solution."
  - tablist "Page sections":
    - tab "Page" [selected]
    - tab "Practice 10"
    - tab "Solution"
  - tabpanel "Page":
    - heading "Personal information" [level=2]
    - text: First name
    - textbox "First name":
      - /placeholder: Aarav
      - text: DhanaMathu
    - text: id =first-name name =firstName data-testid =first-name Last name
    - textbox "Last name":
      - /placeholder: Sharma
      - text: Rithan
    - text: id =last-name name =lastName data-testid =last-name Gender
    - radiogroup "Gender":
      - radio "Male"
      - text: Male
      - radio "Female" [checked]
      - text: Female
    - text: name =gender data-testid =gender-male / gender-female
    - heading "Professional details" [level=2]
    - text: Years of experience
    - combobox "Years of experience":
      - option "Select years"
      - option "1"
      - option "2"
      - option "3"
      - option "4"
      - option "5" [selected]
      - option "6"
      - option "7"
    - text: id =years-experience name =yearsExperience data-testid =years-experience Date
    - textbox "Date": 2026-09-29
    - text: id =profile-date name =date data-testid =profile-date Profession
    - radiogroup "Profession":
      - radio "Manual Tester" [checked]
      - text: Manual Tester
      - radio "Automation Tester"
      - text: Automation Tester
    - text: name =profession data-testid =profession-manual / profession-automation
    - heading "Technical skills" [level=2]
    - text: Automation tools
    - checkbox "UFT"
    - text: UFT
    - checkbox "Protractor" [checked]
    - text: Protractor
    - checkbox "Selenium Webdriver" [checked]
    - text: Selenium Webdriver name =tools data-testid =tool-uft / tool-protractor / tool-selenium Continents you have worked from
    - checkbox "Asia" [checked]
    - text: Asia
    - checkbox "Europe"
    - text: Europe
    - checkbox "Africa"
    - text: Africa
    - checkbox "Australia"
    - text: Australia
    - checkbox "South America"
    - text: South America
    - checkbox "North America"
    - text: North America
    - checkbox "Antarctica"
    - text: "Antarctica name =continents data-testid =continent-{name}"
    - heading "Selenium commands" [level=2]
    - tablist:
      - tab "Browser Commands"
      - tab "Navigation Commands"
      - tab "Switch Commands"
      - tab "Wait Commands"
      - tab "WebElement Commands"
    - strong: WebElement commands
    - text: — interact with elements — click, sendKeys, getText, getAttribute.
    - code: element.click(); element.sendKeys('hello'); element.getAttribute('value');
    - text: id =selenium-tabs · selenium-tab-panel data-testid =tab-browser / tab-navigation / tab-switch / tab-wait / tab-webelement role =tab
    - heading "File operations" [level=2]
    - text: Upload Image
    - button "Upload Image"
    - text: No file chosen
    - link "Download file":
      - /url: /playwright/sample-download.txt
    - text: id =upload-image · download-file data-testid =upload-image · download-file
    - button "Save profile"
    - button "Reset"
    - button "Button"
    - text: id =profile-submit · profile-button data-testid =profile-submit / profile-reset / profile-button role =button Submitted profile JSON will appear here.
```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test';
  2  | 
  3  | test('QA Profile Form' , async({page}) =>{
  4  | 
  5  |     page.goto ("https://app.thetestingacademy.com/playwright/tables/practice#page");
  6  | 
  7  |     //Personal information
  8  |     await page.locator("#first-name").fill('DhanaMathu');
  9  |     await page.locator("#last-name").fill('Rithan');
  10 |     await page.getByTestId('gender-female').click();
  11 | 
  12 |     //Professional details
  13 |     await page.getByTestId('years-experience').selectOption('5');
  14 |     await page.locator('#profile-date').fill('2026-09-29');
  15 |     await page.getByTestId('profession-manual').click();
  16 | 
  17 |     //Technical skills
  18 |     await page.getByRole('checkbox', {name: "Selenium Webdriver"}).check();
  19 |     await page.getByRole('checkbox', {name: "Protractor"}).click(); 
  20 |     await page.getByTestId('continent-asia').click();
  21 |     await page.getByTestId('tab-webelement').click();
> 22 |     await expect(page.getByTestId('selenium-tab-panel')).toContainText("element.click(); element.sendKeys('hello'); element.getAttribute('value');")
     |                                                          ^ Error: expect(locator).toContainText(expected) failed
  23 |     await page.locator('profile-submit').click();
  24 |     
  25 | 
  26 |     await page.pause();
  27 | });
  28 | 
```