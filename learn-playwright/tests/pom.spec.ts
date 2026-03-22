import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Pom exercise', async ({ page }) => {

   const loginpom = new LoginPage(page);
   await loginpom.goToWebsite()
   expect( await loginpom.isButton()).toBeTruthy()
   await loginpom.login('standard_user', 'secret_sauce')
   await loginpom.newPage()

});
