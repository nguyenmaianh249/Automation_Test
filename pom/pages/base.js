const base = require('@playwright/test');
const { HomePage } = require('./HomePage')
const { AboutUsPage } = require('./AboutUsPage')
const { CareerOpportunityPage } = require('./CareerOpportunityPage')
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

    careerOpportunityPage: async ({ page }, use) => {
        // Set up fixture 
        const careerOpportunityPage = new CareerOpportunityPage(page)
        // Use fixture 
        await use(careerOpportunityPage);
    },
})

exports.expect = base.expect;