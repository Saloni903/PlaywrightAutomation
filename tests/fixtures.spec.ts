import { test, expect } from '../fixtures/testFixtures';

test('verify login page using custom fixture', async ({ loginPage }) => {
  await loginPage.open();

  await expect(loginPage.usernameInput).toBeVisible();
  await expect(loginPage.passwordInput).toBeVisible();
  await expect(loginPage.loginButton).toBeVisible();
});