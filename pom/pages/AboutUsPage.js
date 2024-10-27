const {test, expect} = require('@playwright/test')
const {AboutUsLocators} = require('../locators/AboutUsLocators')

exports.AboutUsPage = class AboutUsPage {
    constructor(page) {
        this.page = page;
        this.locator = new AboutUsLocators(page)
    }

    async clickContactNowButton() {
        await expect(this.locator.contactNowButton).toBeVisible()
        await this.locator.contactNowButton.click()
    }

    async checkPopUpTitleVisible() {
        await expect(this.page.locator(`xpath = ${this.locator.formTilte}`)).toBeVisible()
    }

    async fillFullName(fullName) {
        await this.page.locator(`xpath = ${this.locator.fullName}`).fill(fullName)
    }

    async fillEmail(email) {
        await this.page.locator(`xpath = ${this.locator.email}`).fill(email)
    }

    async fillReflectionContent(content) {
        await this.page.locator(`xpath = ${this.locator.reflectionContent}`).fill(content)
    }
    
    async clickProjectBasedOutSourcingCheckbox() {
        await this.page.locator(`xpath = ${this.locator.projectBasedOutSourcingCheckBox}`).click()
    }

    async clickPartner() {
        await this.page.locator(`xpath = ${this.locator.partnerCheckBox}`).click()
    }
}