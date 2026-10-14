# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 19_Data_Driven_Testing\287_DDT_EXCEL.spec.ts >> DDT Excel >> login with every row from the spreadsheet
- Location: tests\19_Data_Driven_Testing\287_DDT_EXCEL.spec.ts:38:9

# Error details

```
Error: End of data reached (data length = 0, asked index = 4). Corrupted zip ?
```

# Test source

```ts
  1  | import * as path from 'path';
  2  | import ExcelJS from 'exceljs';
  3  | import type { LoginRow } from './yamlReader';
  4  | 
  5  | /**
  6  |  * Reads the first (or named) worksheet of an .xlsx file.
  7  |  * Row 1 must be the header row, its cell values become object keys.
  8  |  * exceljs is async, so this returns a Promise.
  9  |  */
  10 | export async function readExcel<T = Record<string, unknown>>(
  11 |     filePath: string,
  12 |     sheetName?: string
  13 | ): Promise<T[]> {
  14 |     const workbook = new ExcelJS.Workbook();
> 15 |     await workbook.xlsx.readFile(path.resolve(filePath));
     |     ^ Error: End of data reached (data length = 0, asked index = 4). Corrupted zip ?
  16 | 
  17 |     const sheet = sheetName ? workbook.getWorksheet(sheetName) : workbook.worksheets[0];
  18 |     if (!sheet) {
  19 |         throw new Error(`Sheet ${sheetName ?? '#1'} not found in ${filePath}`);
  20 |     }
  21 | 
  22 |     const headers: string[] = [];
  23 |     sheet.getRow(1).eachCell({ includeEmpty: true }, (cell, col) => {
  24 |         headers[col] = String(cell.value ?? '').trim();
  25 |     });
  26 | 
  27 |     const data: T[] = [];
  28 |     sheet.eachRow({ includeEmpty: false }, (row, rowNumber) => {
  29 |         if (rowNumber === 1) return; // header
  30 |         const record: Record<string, unknown> = {};
  31 |         headers.forEach((header, col) => {
  32 |             if (!header) return;
  33 |             const value = row.getCell(col).value;
  34 |             record[header] = value ?? '';
  35 |         });
  36 |         data.push(record as T);
  37 |     });
  38 | 
  39 |     return data;
  40 | }
  41 | 
  42 | /** Same file, mapped to the shared LoginRow shape. */
  43 | export async function readLoginDataFromExcel(filePath: string): Promise<LoginRow[]> {
  44 |     const rows = await readExcel<Record<string, unknown>>(filePath, 'LoginData');
  45 | 
  46 |     return rows.map((r) => ({
  47 |         description: String(r.description ?? ''),
  48 |         username: String(r.username ?? ''),
  49 |         password: String(r.password ?? ''),
  50 |         // Excel gives a real boolean, but a "TRUE"/"true" string is also handled.
  51 |         shouldPass: r.shouldPass === true || String(r.shouldPass).toLowerCase() === 'true',
  52 |         expectedError: String(r.expectedError ?? ''),
  53 |     }));
  54 | }
```