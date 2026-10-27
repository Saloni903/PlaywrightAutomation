
import { test, expect } from '../fixtures/testFixtures';
import loginData from '../test-data/loginData.json';

for (const scenario of loginData.loginScenarios) {
  test(`login with ${scenario.scenario}`, async ({
    loginPage,
    page
  }) => {
    await loginPage.open();

    await loginPage.login(
      scenario.username,
      scenario.password
    );

    if (scenario.expectedResult === 'success') {
      await expect(
        page.getByRole('heading', {
          name: 'Accounts Overview',
          exact: true
        })
      ).toBeVisible();
    } else if (
      scenario.username === '' &&
      scenario.password === ''
    ) {
      // Verify the observed redirect after empty submission.
      await expect(page).toHaveURL(/login\.htm/);
    } else {
      await expect(loginPage.errorMessage).toBeVisible();

      await expect(loginPage.errorMessage).toContainText(
        'could not be verified'
      );
    }
  });
}
