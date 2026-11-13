import { Page } from "@playwright/test";
import { CartPage } from "./CartPage";
import { CheckoutPage } from "./CheckoutPage";
import { InventoryPage } from "./InventoryPage";
import { LoginPage } from "./LoginPage";

export class AppContainer {
  loginPage: LoginPage;
    cartPage: CartPage;
    inventoryPage: InventoryPage;
    checkoutPage: CheckoutPage;
  constructor(private readonly page: Page) {
    this.loginPage = new LoginPage(page);
    this.cartPage = new CartPage(page);
    this.inventoryPage = new InventoryPage(page);
    this.checkoutPage = new CheckoutPage(page);
  }
}