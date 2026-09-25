# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 07_WebTables\24Sept_Task.spec.ts >> Choose an element from the table and click the preceding checkbox
- Location: tests\07_WebTables\24Sept_Task.spec.ts:3:5

# Error details

```
Error: locator.innerText: Target page, context or browser has been closed
```

# Test source

```ts
  1  | import {test, expect, Locator} from '@playwright/test';
  2  | 
  3  | test("Choose an element from the table and click the preceding checkbox", async ({page}) => {
  4  | 
  5  |     await page.goto("https://app.thetestingacademy.com/playwright/webtable");
  6  | 
  7  |     //table[@aria-label='Employee Management System table']/tbody/tr[3]/td[1]
  8  | 
  9  |     const firstSection = "//table[@aria-label='Employee Management System table']/tbody/tr[";
  10 |     const secondSection = "]/td[";
  11 |     const thirdSection = "]";
  12 | 
  13 |     const rows = await page.locator("//table[@aria-label='Employee Management System table']/tbody/tr").count();
  14 |     const cols = await page.locator("//table[@aria-label='Employee Management System table']/tbody/tr[3]/td").count();
  15 | 
  16 |     for (let i = 2; i <= rows; i++) {
  17 | 
  18 |         for (let j = 1; j <= cols; j++) {
  19 | 
  20 |             const dynamicPath = `${firstSection}${i}${secondSection}${j}${thirdSection}`;
  21 |             console.log(dynamicPath);
> 22 |             const data = await page.locator(dynamicPath).innerText();      
     |                                                          ^ Error: locator.innerText: Target page, context or browser has been closed
  23 |             console.log(data);
  24 | 
  25 |           /*   if (data.includes('Airi Satou')) {
  26 |                 const checkboxPath = `${firstSection}${i}${secondSection}1${thirdSection}`;
  27 |                 await page.locator(checkboxPath).click();
  28 |                 console.log(`Checkbox for ${data} is clicked.`);
  29 |             }           
  30 |              */
  31 |             await page.pause();
  32 |         }
  33 |     }
  34 | 
  35 | 
  36 | });
```