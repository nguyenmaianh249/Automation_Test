const { test, expect } = require('../pom/pages/base')
import formInfo from '../test-data/formInfo.json'
test.beforeEach(async ({ homePage, page }) => {
    await page.goto('');
    await page.waitForTimeout(5000);
    //Setting Language
    await homePage.settingLanguage();
    await page.waitForTimeout(5000);

    // Verify Navigation Bar
    await homePage.verifyNavItem();

    // Redriect to About Us page
    await homePage.goToAboutUsPage();
});

test.describe('Section 1', () => {
    test('Fill Pop-up Information with Dedicated development team', async ({ aboutUsPage }) => {
       await aboutUsPage.clickContactNowButton()
       await aboutUsPage.checkPopUpTitleVisible()
       await aboutUsPage.fillFullName(formInfo.fullName)
       await aboutUsPage.fillEmail(formInfo.email)
       await aboutUsPage.fillReflectionContent(formInfo.reflectionContent)
    })

    test('Fill Pop-up Information with Project-based outsourcing', async ({ aboutUsPage }) => {
        await aboutUsPage.clickContactNowButton()
        await aboutUsPage.checkPopUpTitleVisible()
        await aboutUsPage.fillFullName(formInfo.fullName)
        await aboutUsPage.fillEmail(formInfo.email)
        await aboutUsPage.clickProjectBasedOutSourcingCheckbox()
        await aboutUsPage.fillReflectionContent(formInfo.reflectionContent)
    })

    test('Fill Pop-up Information with Partner', async ({ aboutUsPage }) => {
        await aboutUsPage.clickContactNowButton()
        await aboutUsPage.checkPopUpTitleVisible()
        await aboutUsPage.fillFullName(formInfo.fullName)
        await aboutUsPage.fillEmail(formInfo.email)
        await aboutUsPage.clickPartner()
        await aboutUsPage.fillReflectionContent(formInfo.reflectionContent)
     })
})