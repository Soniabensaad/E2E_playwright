import { test, expect } from '@playwright/test';

test.afterEach(async ({ page }) => {
  console.log('Test finished');
  await page.close();
});

test.beforeEach(async ({ page }) => {
  console.log('Starting a test...');
  await page.goto('https://practice-automation.com/form-fields/');
});

test('extract value', async ({ page }) => {
  //input value
  const valueinput = page.getByLabel('Name', { exact: true });

  await valueinput.fill('Ben');

  const valueExtract = await valueinput.inputValue();

  expect(valueExtract).toEqual('Ben');

  //single text value
  const button = await page.getByTestId('submit-btn')
  const text = await button.textContent()
  expect(text).toEqual('Submit')

  //all text value
  const listArray = await page.getByText('Automation tools', { exact: true })
  const allList=  await listArray.allTextContents()
  expect((allList).includes('Playwright'))

});
