
import { test, expect } from '@playwright/test';

test('inspect saved authentication state', async ({ page }) => {
  await page.goto('/');

  console.log('Current URL:', page.url());

  const accountsHeading = page.getByRole('heading', {
    name: 'Accounts Overview',
    exact: true
  });

  const loginForm = page.locator('input[name="username"]');

  console.log(
    'Accounts Overview visible:',
    await accountsHeading.isVisible().catch(() => false)
  );

  console.log(
    'Login form visible:',
    await loginForm.isVisible().catch(() => false)
  );

  // Confirm that the application loaded, without assuming authentication worked.
  await expect(page.locator('body')).toBeVisible();
});
