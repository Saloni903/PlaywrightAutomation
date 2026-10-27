
import { test, expect } from '@playwright/test';

test.describe('Retry and Parallel Execution', () => {
  test('verify first independent test', async ({ page }) => {
    await page.goto('/');

    await expect(page.locator('body')).toBeVisible();
  });

  test('verify second independent test', async ({ page }) => {
    await page.goto('/');

    await expect(page.locator('body')).toBeVisible();
  });

  test('verify third independent test', async ({ page }) => {
    await page.goto('/');

    await expect(page.locator('body')).toBeVisible();
  });
});
