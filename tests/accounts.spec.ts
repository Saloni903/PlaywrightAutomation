
import { test, expect } from '../fixtures/testFixtures';

test('verify account balance format', async ({
  authenticatedPage
}) => {
  const firstBalance = authenticatedPage
    .locator('#accountTable tbody tr td:nth-child(2)')
    .first();

  await expect(firstBalance).toBeVisible();

  const balance = (await firstBalance.innerText()).trim();

  expect(balance).toMatch(/^-?\$[\d,]+\.\d{2}$/);
});
