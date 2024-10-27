const {test, expect} = require('@playwright/test')
const {CareerOpportunityLocators} = require('../locators/CareerOpportunityLocators')

exports.CareerOpportunityPage = class CareerOpportunityPage {
    constructor(page) {
        this.page = page;
        this.locator = new CareerOpportunityLocators(page)
    }

    async verifyKienTaoTuongLaiHeaderVisible() {
        await expect(this.locator.kienTaoTuongLaiHeader).toBeVisible()
    }

    async verifyViTriNoiBatButtonVisible() {
        await expect(this.locator.viTriNoiBatButton).toBeVisible()
    }
}