import { test, expect } from '@playwright/test';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { InventoryPage } from '../pages/InventoryPage';
import { LoginPage } from '../pages/LoginPage';

test('user can check out items from the cart', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  await inventoryPage.addItemToCart('sauce-labs-backpack');
  await inventoryPage.addItemToCart('sauce-labs-bolt-t-shirt');
  await inventoryPage.openCart();

  await expect(cartPage.itemNames).toContainText([
    'Sauce Labs Backpack',
    'Sauce Labs Bolt T-Shirt',
  ]);

  await cartPage.checkout();
  await checkoutPage.completeInformation('Test', 'User', '12345');
  await checkoutPage.finishOrder();

  await expect(checkoutPage.confirmationMessage).toBeVisible();
});