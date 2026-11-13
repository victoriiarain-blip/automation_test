import { test, expect } from '../fixtures/app.fixtures';

test('user can check out items from the cart', async ({ app }) => {
const {loginPage, cartPage, inventoryPage, checkoutPage } = app;

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