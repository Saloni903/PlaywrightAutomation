
import { test as base, expect, type Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import loginData from '../test-data/loginData.json';

type AppFixtures = {
  loginPage: LoginPage;
  authenticatedPage: Page;
};

export const test = base.extend<AppFixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },

  authenticatedPage: async ({ page, loginPage }, use) => {
    await loginPage.open();

    await loginPage.login(
      loginData.validUser.username,
      loginData.validUser.password
    );

    await page.getByRole('heading', {
      name: 'Accounts Overview',
      exact: true
    }).waitFor({ state: 'visible' });

    await use(page);
  },
});

export { expect };
