const { test, expect } = require('../pom/pages/base')

test.beforeEach(async ({ homePage, page }) => {
    await page.goto('');
    await page.waitForTimeout(5000)
    //Setting Language
    await homePage.settingLanguage();
    await page.waitForTimeout(5000)
    // Verify Navigation Bar
    await homePage.verifyNavItem();

});

test.describe('Section 2', () => {
    test('Checking Elements Visible', async ({ homePage, careerOpportunityPage, page }) => {
         // Redriect to About Us page
        await homePage.goToCareerOpportunityPage();
        await page.waitForTimeout(5000);
        await careerOpportunityPage.verifyKienTaoTuongLaiHeaderVisible()
        await careerOpportunityPage.verifyViTriNoiBatButtonVisible()
    })
})