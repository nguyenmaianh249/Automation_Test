exports.HomeLocators = class HomeLocators {
    constructor(page) {
        this.page = page;
        this.settingLanguageSelection = '//select[@id="translate"]'
        this.aboutUsNav = page.locator('#ftco-nav').getByRole("link", {name: "About us"})
        this.producTechnologyNav = page.locator('#ftco-nav').getByRole("link", {name: "Products & Technology"})
        this.businessAreaNav = page.locator('#ftco-nav').getByRole("link", {name: "Bussiness Area"})
        this.customerPartnersNav = page.locator('#ftco-nav').getByRole("link", {name: "Customers & Partners"})
        this.careerOpportunityNav = page.locator('#ftco-nav').getByRole("link", {name: "Career opportunity"})
        this.newsNav = page.locator('#ftco-nav').getByRole("link", {name: "News"})
    }
}