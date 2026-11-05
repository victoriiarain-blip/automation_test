import type { Page } from '@playwright/test';

export class InventoryPage {
  constructor(private readonly page: Page) {}

  async addItemToCart(itemId: string) {
    await this.page.locator(`[data-test="add-to-cart-${itemId}"]`).click();
  }

  async openCart() {
    await this.page.locator('[data-test="shopping-cart-link"]').click();
  }
}