exports.AboutUsLocators = class AboutUsLocators {
    constructor(page) {
        this.page = page;
        this.contactNowButton = '//button[@id="popup-btn"]';
        this.formTilte = '//div[@class="form-content"]/p[text()="Let’s get in touch"]'
    }
}