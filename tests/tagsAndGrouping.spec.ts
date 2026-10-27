
import { test, expect } from '../fixtures/testFixtures';
import loginData from '../test-data/loginData.json';

test.describe('ParaBank Login Module', {
  tag: '@login'
}, () => {

  test('verify login page elements', {
    tag: '@smoke'
  }, async ({ loginPage }) => {
    await loginPage.open();

    await expect(loginPage.usernameInput).toBeVisible();
    await expect(loginPage.passwordInput).toBeVisible();
    await expect(loginPage.loginButton).toBeVisible();
  });

  test('verify successful login', {
    tag: ['@smoke', '@regression']
  }, async ({ loginPage, page }) => {
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

  test('verify invalid login error', {
    tag: '@regression'
  }, async ({ loginPage }) => {
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

});
