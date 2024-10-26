const { test, expect } = require('../pom/pages/base')

test.beforeEach(async ({ homePage, page }) => {
    await page.goto('');

    //Setting Language
    await homePage.settingLanguage();
    await page.waitForTimeout(5000);

    // Verify Navigation Bar
    await homePage.verifyNavItem();

    // Redriect to About Us page
    await homePage.goToAboutUsPage();
});

test.describe('Section 1', () => {
    test('', async ({ aboutUsPage }) => {
       await aboutUsPage.clickContactNowButton()
    })
})