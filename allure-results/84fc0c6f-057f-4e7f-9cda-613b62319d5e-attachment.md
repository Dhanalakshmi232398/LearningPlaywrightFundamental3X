# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 14_File_Upload\264_Multiple_FileUpload_MixedTypes_Disk_TC.spec.ts >> FileUpload handling >> upload PDF, JPG, and DOCX files from disk
- Location: tests\14_File_Upload\264_Multiple_FileUpload_MixedTypes_Disk_TC.spec.ts:11:8

# Error details

```
Test timeout of 30000ms exceeded while running "beforeEach" hook.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://www.patternfly.org/components/file-upload/multiple-file-upload/", waiting until "load"

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import path from 'path';
  3  | 
  4  | const URL = 'https://www.patternfly.org/components/file-upload/multiple-file-upload/';
  5  | 
  6  | test.describe('FileUpload handling', () => {
  7  |    test.beforeEach(async ({ page }) => {
> 8  |       await page.goto(URL);
     |                  ^ Error: page.goto: Test timeout of 30000ms exceeded.
  9  |    });
  10 | 
  11 |    test('upload PDF, JPG, and DOCX files from disk', async ({ page }) => {
  12 |       const files = [
  13 |          path.join(__dirname, 'upload-sample.pdf'),
  14 |          path.join(__dirname, 'upload-sample.jpg'),
  15 |          path.join(__dirname, 'upload-sample.docx'),
  16 |       ];
  17 | 
  18 |       await page.locator('div.pf-v6-c-multiple-file-upload input')
  19 |          .setInputFiles(files);
  20 | 
  21 |       const uploadArea = page.locator('div.pf-v6-c-multiple-file-upload');
  22 |       await expect(uploadArea).toContainText('upload-sample.pdf');
  23 |       await expect(uploadArea).toContainText('upload-sample.jpg');
  24 |       await expect(uploadArea).toContainText('upload-sample.docx');
  25 |    });
  26 | });
  27 | 
```