//locators types 
import { test, expect } from '@playwright/test';
 test.afterEach(async ({ page }) => {
  console.log('Test finished');
  await page.close();
});
test.beforeEach(async ({ page }) => {
  console.log('Starting a test...');
  await page.goto('https://the-internet.herokuapp.com/');
  await page.getByText('Form Authentication').dblclick()

});

test('visit the website', async ({ page }) => {

  // tag name locator (html tag: h1/ input /a/ p/ div /button)
  await page.locator('input').first().click()


  //id 
  await page.locator('#username').click()

  // class value (class="subheader")
  await page.locator('.subheader').click()

  // Attribute(id, class, name, type, placeholder)
  await page.locator('[type="text"]').click()
  //class value (full)
  await page.locator('[class="large-6 small-12 columns"]').last().click()

  //combine different selecotrs
await page.locator('input[type="text"][name="username"]').click()
  // a part of text
  await page.locator(':text("Pag")').click()

  //match the text
  await page.locator(':text-is("Login Page")').click()

});
