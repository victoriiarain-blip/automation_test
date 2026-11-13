import { test as base, expect } from '@playwright/test'; 
import { AppContainer } from '../pages/app.container';

type AppFixtures = {
    app: AppContainer;
};

export const test = base.extend<AppFixtures>({
    app: async ({ page }, use) => {
        await use(new AppContainer(page));
    },
});

export { expect };