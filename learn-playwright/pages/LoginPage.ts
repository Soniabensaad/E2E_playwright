import { Page, Locator } from '@playwright/test';
export class LoginPage {
    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.username =  page.locator('#user-name');
        this.password =  page.locator('#password');
        this.loginButton =  page.locator('input[type="submit"]')
    }

    async goToWebsite () {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async login(use:string, pass:string) {
        await this.username.fill(use)
        await this.password.fill(pass)
        await this.loginButton.click()
    }

    async isButton() {
        return this.loginButton.isVisible()
        
    }

    async newPage(){
        await this.page.waitForURL('https://www.saucedemo.com/inventory.html')
    }

}
