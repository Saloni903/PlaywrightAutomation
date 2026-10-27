
import { test as setup, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import loginData from '../test-data/loginData.json';

const authFile = 'playwright/.auth/user.json';

setup('authenticate user', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.open();
  await loginPage.login(
    loginData.validUser.username,
    loginData.validUser.password
  );

  await expect(
    page.getByRole('heading', {
      name: 'Accounts Overview',
      exact: true
    })
  ).toBeVisible();

  await page.context().storageState({ path: authFile });
});
