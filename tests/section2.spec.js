const { test, expect } = require('../pom/pages/base')
const { chromium } = require('playwright')

test.beforeEach(async ({ homePage, page }) => {
    await page.goto("/");
    await page.waitForTimeout(5000)
    //Setting Language
    await homePage.settingLanguage();
    await page.waitForTimeout(5000)
    // Verify Navigation Bar
    await homePage.verifyNavItem();

});

test.describe('Section 2', () => {
    test('Checking Elements Visible', async ({ homePage, careerOpportunityPage, page }) => {
        await homePage.goToCareerOpportunityPage();
        await careerOpportunityPage.verifyKienTaoTuongLaiHeaderVisible()
        await careerOpportunityPage.verifyViTriNoiBatButtonVisible()
    })
})