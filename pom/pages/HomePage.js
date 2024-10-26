const {test, expect} = require('@playwright/test')
const {HomeLocators} = require('../locators/HomeLocators')
import home from "../../test-data/home.json"

exports.HomePage = class HomePage {
    constructor(page) {
        this.page = page;
        this.locator = new HomeLocators(page)
    }

    async settingLanguage() {
        await this.page.locator(`xpath= ${this.locator.settingLanguageSelection}`).selectOption(home.languages.english)
    }

    async verifyNavItem() {
        await expect(this.page.locator(`xpath= ${this.locator.aboutUsNav}`)).toBeVisible()
        await expect(this.page.locator(`xpath= ${this.locator.producTechnologyNav}`)).toBeVisible()
        await expect(this.page.locator(`xpath= ${this.locator.businessAreaNav}`)).toBeVisible()
        await expect(this.page.locator(`xpath= ${this.locator.customerPartnersNav}`)).toBeVisible()
        await expect(this.page.locator(`xpath= ${this.locator.careerOpportunityNav}`)).toBeVisible()
        await expect(this.page.locator(`xpath= ${this.locator.newsNav}`)).toBeVisible()
    }

    async goToAboutUsPage() {
        await this.page.locator(`xpath= ${this.locator.aboutUsNav}`).click()
    }
    
}