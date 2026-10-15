import { promises as fs } from 'node:fs';
import path from 'node:path';
import type { Page, TestInfo } from '@playwright/test';

export async function shot(page: Page, testInfo: TestInfo, stepNumber: number, label: string) {
  const safeLabel = label
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'step';

  const name = `step-${stepNumber}-${safeLabel}`;
  const filePath = testInfo.outputPath(`${name}.png`);
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await page.screenshot({ path: filePath, fullPage: true });
  await testInfo.attach(name, { path: filePath, contentType: 'image/png' });
  return filePath;
}
