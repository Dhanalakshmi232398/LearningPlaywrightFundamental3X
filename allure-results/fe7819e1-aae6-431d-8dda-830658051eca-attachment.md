# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 14_File_Upload\264_Multiple_FileUpload_MixedTypes_Disk_TC.spec.ts >> FileUpload handling >> upload PDF, JPG, and DOCX files from disk
- Location: tests\14_File_Upload\264_Multiple_FileUpload_MixedTypes_Disk_TC.spec.ts:11:8

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('div.pf-v6-c-multiple-file-upload')
Expected substring: "upload-sample.docx"
Received string:    "Drag and drop files here orUploadAccepted file types: JPEG, Doc, PDF, PNG2 of 2 files uploadedProgress value is 100%.upload-sample.pdf592B100%Progress value is 100%.upload-sample.jpg16KB100%"
Timeout: 5000ms

Call log:
  - Expect "toContainText" locator('div.pf-v6-c-multiple-file-upload') with timeout 5000ms
  - waiting for locator('div.pf-v6-c-multiple-file-upload')
    13 × locator resolved to <div tabindex="0" role="presentation" class="pf-v6-c-multiple-file-upload">…</div>
       - unexpected value "Drag and drop files here orUploadAccepted file types: JPEG, Doc, PDF, PNG2 of 2 files uploadedProgress value is 100%.upload-sample.pdf592B100%Progress value is 100%.upload-sample.jpg16KB100%"

```

```yaml
- text: Drag and drop files here or
- button "Upload"
- text: "Accepted file types: JPEG, Doc, PDF, PNG"
- button "2 of 2 files uploaded" [expanded]
- region "2 of 2 files uploaded":
  - list "Current uploads":
    - listitem:
      - text: Progress value is 100%.
      - progressbar "upload-sample.pdf 592B"
      - button "Remove from list"
    - listitem:
      - text: Progress value is 100%.
      - progressbar "upload-sample.jpg 16KB"
      - button "Remove from list"
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
  8  |       await page.goto(URL);
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
> 24 |       await expect(uploadArea).toContainText('upload-sample.docx');
     |                                ^ Error: expect(locator).toContainText(expected) failed
  25 |    });
  26 | });
  27 | 
```