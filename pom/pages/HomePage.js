const {test, expect} = require('@playwright/test')
const {HomeLocators} = require('../locators/HomeLocators')
const { context } = require('playwright')
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
        await expect(this.locator.aboutUsNav).toBeVisible()
        await expect(this.locator.producTechnologyNav).toBeVisible()
        await expect(this.locator.businessAreaNav).toBeVisible()
        await expect(this.locator.customerPartnersNav).toBeVisible()
        await expect(this.locator.careerOpportunityNav).toBeVisible()
        await expect(this.locator.newsNav).toBeVisible()
    }

    async goToAboutUsPage() {
        await this.locator.aboutUsNav.click()
    }

    async goToCareerOpportunityPage() {
        await this.page.$eval('a.nav-link', el => el.removeAttribute("target"))
        await this.locator.careerOpportunityNav.click()
    }
    
}