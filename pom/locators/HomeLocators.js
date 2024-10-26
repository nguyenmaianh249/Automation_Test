exports.HomeLocators = class HomeLocators {
    constructor(page) {
        this.page = page;
        this.settingLanguageSelection = '//select[@id="translate"]'
        this.aboutUsNav = '//span[text()="About us"]'
        this.producTechnologyNav = '//span[text()="Products & Technology"]'
        this.businessAreaNav = '//span[text()="Bussiness Area"]'
        this.customerPartnersNav = '//span[text()="Customers & Partners"]'
        this.careerOpportunityNav = '//span[text()="Career opportunity"]'
        this.newsNav = '//span[text()="News"]'
    }
}