import { Page, Locator, expect } from '@playwright/test';

export class FormPage {

  readonly page: Page;
  readonly name: Locator;
  readonly password: Locator;
  readonly drinks: Locator;

  constructor(page: Page) {

    this.page = page;
    this.name = page.getByTestId('name-input');
    this.password = page.getByLabel('Password');
    this.drinks = page.locator('input[type="checkbox"]');

  }

  async site() {
    await this.page.goto('https://practice-automation.com/form-fields/');
  }

  async loginSite(user: string, passw: string) {

    await this.name.fill(user);
    await this.password.fill(passw);

  }

  async chooseDrink() {

    const boxes = await this.drinks.all();

    for (const box of boxes) {

      await box.check();
      await expect(box).toBeChecked();

    }
  }
  async differentFromMilk(){
    const drinks = this.drinks
    const countDrink = await drinks.count()
    for (let i=0;  i< countDrink; i++){
        const label = await drinks.nth(i).getAttribute('value')
        if (label !== 'Milk'){
            await drinks.nth(i).check();
            await expect( drinks.nth(i)).toBeChecked();
        }
    }
  }
}
