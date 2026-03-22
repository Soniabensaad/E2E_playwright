import { test, expect } from '@playwright/test';
//test
test.beforeEach(async ({ page }) => {
  await page.goto('https://practice-automation.com/form-fields/');
});

test('checkboxes', async ({ page }) => {

const water = page.getByLabel('Water');
  const coffee = page.getByLabel('Coffee');

  await water.check();
  await coffee.click();

  await expect(water).toBeChecked();
  await expect(coffee).toBeChecked()
 const checkboxes = await page.locator('input[type="checkbox"]').all();

  for (const box of checkboxes) {
    await box.check();
    await expect(box).toBeChecked();
  }

});
