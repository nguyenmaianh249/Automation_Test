exports.AboutUsLocators = class AboutUsLocators {
    constructor(page) {
        this.page = page;
        this.contactNowButton = page.getByRole("button", {name: "Contact now"})
        this.formTilte = '//div[@class="form-content"]/p[text()="Let’s get in touch"]'
        this.fullName = '//input[@id="username"]'
        this.email = '//input[@id="email"]'
        this.reflectionContent = '//textarea[@id="phone"]'
        this.projectBasedOutSourcingCheckBox = '//label[text() ="Project-based outsourcing"]/preceding-sibling::input[@id="field2"]'
        this.partnerCheckBox = '//label[text() ="Partner"]/preceding-sibling::input[@id="field3"]'
    }
}