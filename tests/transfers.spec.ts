import { test, expect } from '../fixtures/testFixtures';
import { TransferPage } from '../pages/TransferPage';
import loginData from '../test-data/Data.json';

test.beforeEach(async ({ loginPage }) => {
  await loginPage.open();
  await loginPage.login(
    loginData.validUser.username,
    loginData.validUser.password
  );
});

test('verify Transfer Funds form is visible', async ({
  page,
  loginPage
}) => {
  const transferPage = new TransferPage(page);

  await transferPage.open();

  await expect(
    page.getByRole('heading', {
      name: 'Transfer Funds',
      exact: true
    })
  ).toBeVisible();

  await expect(transferPage.transferAmountInput).toBeVisible();
  await expect(transferPage.fromAccountDropdown).toBeVisible();
  await expect(transferPage.toAccountDropdown).toBeVisible();
  await expect(transferPage.transferButton).toBeVisible();
});

test('submit transfer form with empty amount', async ({ page }) => {
  const transferPage = new TransferPage(page);

  await transferPage.open();
  await transferPage.submitTransfer();

  await expect(
    page.getByRole('heading', {
      name: 'Transfer Funds',
      exact: true
    })
  ).toBeVisible();
});