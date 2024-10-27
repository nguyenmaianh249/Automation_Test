exports.CareerOpportunityLocators = class CareerOpportunityLocators {
    constructor(page) {
        this.page = page;
        this.kienTaoTuongLaiHeader = page.getByRole('heading', {name: "KIẾN TẠO TƯƠNG LAI CỦA BẠN"})
        this.viTriNoiBatButton = page.getByRole('button', {name: "VỊ TRÍ NỔI BẬT"})
    }
}