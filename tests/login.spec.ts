import { test, expect } from '../fixtures/testFixtures';
import loginData from '../test-data/Data.json';

test('verify ParaBank login page loads', async ({ loginPage }) => {
  await loginPage.open();

  await expect(loginPage.usernameInput).toBeVisible();
  await expect(loginPage.passwordInput).toBeVisible();
  await expect(loginPage.loginButton).toBeVisible();
});

test('login with valid credentials', async ({ loginPage, page }) => {
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
});

test('show error for invalid login credentials', async ({ loginPage }) => {
  await loginPage.open();

  await loginPage.login(
    loginData.invalidUser.username,
    loginData.invalidUser.password
  );

  await expect(loginPage.errorMessage).toBeVisible();
  await expect(loginPage.errorMessage).toContainText(
    'could not be verified'
  );
});