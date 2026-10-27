import { test, expect } from '../fixtures/testFixtures';
import { TransactionsPage } from '../pages/TransactionsPage';
import loginData from '../test-data/Data.json';

test.beforeEach(async ({ loginPage }) => {
  await loginPage.open();
  await loginPage.login(
    loginData.validUser.username,
    loginData.validUser.password
  );
});

test('open an account and verify transaction history section', async ({
  page
}) => {
  const transactionsPage = new TransactionsPage(page);

  await expect(
    page.getByRole('heading', {
      name: 'Accounts Overview',
      exact: true
    })
  ).toBeVisible();

  const firstAccount = page
    .locator('#accountTable tbody tr td a')
    .first();

  await expect(firstAccount).toBeVisible();

  const accountId = (await firstAccount.innerText()).trim();

  await transactionsPage.openAccount(accountId);

  await expect(
    transactionsPage.accountDetailsHeading
  ).toBeVisible();

  await expect(
    transactionsPage.accountActivityHeading
  ).toBeVisible();

  await expect(
    transactionsPage.transactionTable
  ).toBeVisible();
});