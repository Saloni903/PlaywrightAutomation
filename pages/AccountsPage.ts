
import { type Page, type Locator } from '@playwright/test';

export class AccountsPage {
  readonly page: Page;
  readonly pageHeading: Locator;
  readonly accountsTable: Locator;
  readonly accountRows: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pageHeading = page.getByRole('heading', {name: 'Accounts Overview'});
    this.accountsTable = page.locator('#accountTable');
    this.accountRows = page.locator('#accountTable tbody tr');
  }

  async verifyAccountsPage() {
    await this.pageHeading.waitFor({ state: 'visible' });
  }
}
