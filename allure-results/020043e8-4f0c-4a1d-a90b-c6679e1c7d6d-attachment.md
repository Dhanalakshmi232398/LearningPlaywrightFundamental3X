# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 14_File_Upload\260_FileUpload_TC.spec.ts >> FileUpload handling >> locate FileUpload and upload
- Location: tests\14_File_Upload\260_FileUpload_TC.spec.ts:12:8

# Error details

```
Test timeout of 30000ms exceeded while running "beforeEach" hook.
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - link "Fork me on GitHub":
      - /url: https://github.com/tourdedave/the-internet
      - img "Fork me on GitHub" [ref=e3] [cursor=pointer]
    - generic [ref=e5]:
      - heading "File Uploader" [level=3] [ref=e6]
      - paragraph [ref=e7]: Choose a file on your system and then click upload. Or, drag and drop a file into the area below.
      - generic [ref=e8]:
        - button "Choose File" [ref=e9]
        - button "Upload" [ref=e10]
  - generic [ref=e13]:
    - separator [ref=e14]
    - generic [ref=e15]:
      - text: Powered by
      - link "Elemental Selenium" [ref=e16] [cursor=pointer]:
        - /url: http://elementalselenium.com/
```

# Test source

```ts
  1  | import { test, expect, Locator } from '@playwright/test';
  2  | import path from 'path';
  3  | 
  4  | const URL = 'https://the-internet.herokuapp.com/upload'; // replace with target page
  5  | 
  6  | test.describe('FileUpload handling', () => {
  7  | 
> 8  |    test.beforeEach(async ({ page }) => {
     |         ^ Test timeout of 30000ms exceeded while running "beforeEach" hook.
  9  |       await page.goto(URL, { waitUntil: 'domcontentloaded' });
  10 |    });
  11 | 
  12 |    test('locate FileUpload and upload', async ({ page }) => {
  13 |       // File upload
  14 |       // Path of the file. - You should. A
  15 | 
  16 |       const filePath = path.join(__dirname, 'testdata.txt');
  17 |       console.log(filePath);
  18 |       // __dirname - Current working directory full path 
  19 |       
  20 |       await page.locator("#file-upload").setInputFiles([filePath]);
  21 |       await page.getByRole("button", { name: "Upload" }).click();
  22 |       await expect(page.locator('#uploaded-files')).toContainText('testdata.txt');
  23 | 
  24 | 
  25 |    });
  26 | });
```