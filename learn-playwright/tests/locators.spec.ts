//user facing locators
import { test, expect } from '@playwright/test';
 test.afterEach(async ({ page }) => {
  console.log('Test finished');
  await page.close();
});
test.beforeEach(async ({ page }) => {
  console.log('Starting a test...');
  await page.goto('https://www.saucedemo.com/');

});
test('user facing locators', async({page}) => {
  const username =  page.getByRole('textbox', { name: 'Username' })
   await username.fill('standard_user')
   await expect (username).toHaveValue("standard_user")
   const password = page.getByPlaceholder('Password')
    await password.fill('secret_sauce')
    const login =  page.getByRole('button')
    await login.click()
    await page.getByText('Swag Labs').click()

})
