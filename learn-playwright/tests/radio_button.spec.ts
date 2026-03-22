import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://practice-automation.com/form-fields/');
});

test('radio buttons', async ({ page }) => {

  const redRadio = page.locator('input[value="Red"]')
  const blueRadio = page.locator('input[value="Blue"]')

  await redRadio.check()
  await expect(redRadio).toBeChecked()

  await blueRadio.check()
  await expect(blueRadio).toBeChecked()

  await expect(redRadio).not.toBeChecked()

  expect(await blueRadio.isChecked()).toBeTruthy()

});
