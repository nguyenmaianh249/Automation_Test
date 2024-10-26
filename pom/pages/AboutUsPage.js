const {test, expect} = require('@playwright/test')
const {AboutUsLocators} = require('../locators/AboutUsLocators')

exports.AboutUsPage = class AboutUsPage {
    constructor(page) {
        this.page = page;
        this.locator = new AboutUsLocators(page)
    }

    async clickContactNowButton() {
        await expect(this.page.locator(`xpath = ${this.locator.contactNowButton}`)).toBeVisible()
        await this.page.locator(`xpath = ${this.locator.contactNowButton}`).click()
    }
    
    
}