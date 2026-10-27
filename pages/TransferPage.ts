
import { type Page, type Locator } from '@playwright/test';

export class TransferPage {
  readonly page: Page;
  readonly transferAmountInput: Locator;
  readonly fromAccountDropdown: Locator;
  readonly toAccountDropdown: Locator;
  readonly transferButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.transferAmountInput = page.locator('#amount');
    this.fromAccountDropdown = page.locator('#fromAccountId');
    this.toAccountDropdown = page.locator('#toAccountId');
    this.transferButton = page.getByRole('button', {
      name: 'Transfer'
    });
  }

  async open() {
    await this.page.getByRole('link', {
      name: 'Transfer Funds'
    }).click();
  }

  
async submitTransfer() {
  await this.transferButton.click();
}

}

