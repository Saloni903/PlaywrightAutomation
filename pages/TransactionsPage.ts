
import { type Page, type Locator } from '@playwright/test';

export class TransactionsPage {
  readonly page: Page;
  readonly accountDetailsHeading: Locator;
  readonly accountActivityHeading: Locator;
  readonly transactionTable: Locator;

  constructor(page: Page) {
    this.page = page;
    this.accountDetailsHeading = page.getByRole('heading', {
      name: 'Account Details',
      exact: true
    });
    this.accountActivityHeading = page.getByRole('heading', {
      name: 'Account Activity',
      exact: true
    });
    this.transactionTable = page.locator('#transactionTable');
  }

  async openAccount(accountId: string) {
    await this.page.getByRole('link', {
      name: accountId,
      exact: true
    }).click();
  }
}
