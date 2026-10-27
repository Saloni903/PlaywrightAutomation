
import { test, expect } from '../fixtures/testFixtures';

test('verify authenticated fixture opens Accounts Overview', async ({
  authenticatedPage
}) => {
  await expect(
    authenticatedPage.getByRole('heading', {
      name: 'Accounts Overview',
      exact: true
    })
  ).toBeVisible();
});

test('verify account table on authenticated page', async ({
  authenticatedPage
}) => {
  await expect(
    authenticatedPage.locator('#accountTable')
  ).toBeVisible();

  await expect(
    authenticatedPage.locator('#accountTable tbody tr').first()
  ).toBeVisible();
});
