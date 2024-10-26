const base = require('@playwright/test');
const { HomePage } = require('./HomePage')
const { AboutUsPage } = require('./AboutUsPage')
exports.test = base.test.extend({
    homePage: async ({ page }, use) => {
        // Set up fixture 
        const homePage = new HomePage(page)
        // Use fixture 
        await use(homePage);
    },

    aboutUsPage: async ({ page }, use) => {
        // Set up fixture 
        const aboutUsPage = new AboutUsPage(page)
        // Use fixture 
        await use(aboutUsPage);
    },
})

exports.expect = base.expect;