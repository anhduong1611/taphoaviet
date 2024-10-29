import Page from "./page";
import myValidation from "../untils/check.util";
class FilterAndSort extends Page {
    public open() {
        return super.open('collections/all');
    }
    get filterBtn() {
        return $('.filter-btn');
    }
    get openBrandBtn() {
        return $('aria/Thương hiệu');
    }
    get dhFoodItem() {
        return $('#data-brand-p1');
    }
    get vinamilkItem() {
        return $('#data-brand-p3');
    }
    get xMenItem() {
        return $('#data-brand-p8');
    }

    async clickChooseFilter(elements: ChainablePromiseArray) {
        await this.filterBtn.waitForDisplayed();
        await this.filterBtn.click();
        await this.openBrandBtn.click();
        for await (const e of elements) {
            await e.waitForDisplayed();
            await e.click();
        }
    }
    async fileterABrand(){
        const elements = [this.dhFoodItem];
        await this.clickChooseFilter(elements);
    }
    async filter3Brand() {
        const elements = [this.dhFoodItem, this.vinamilkItem, this.xMenItem];
        await this.clickChooseFilter(elements);
    }
    async checkCorrectResult(expectedContents: string[]) {
        const normalizedExpectedContents = expectedContents.map(content => 
            myValidation.removeDiacritics(content.toLowerCase())
        );
        for await (const product of $$('.product-item')) {
            const productName = await product.$('.pro-name a').getText();
            const normalizedProductName = myValidation.removeDiacritics(productName.toLowerCase()); 
            const containsExpectedContent = normalizedExpectedContents.some(expectedContent => 
                normalizedProductName.includes(expectedContent)
            );
    
            expect(containsExpectedContent).toBe(true);
        }
    } 

    async checkAllResults(expectedContents: string[]) {//
        let hasNextPage = true;
        while (hasNextPage) {
            const products =  $('.product-item');
            await products.waitForDisplayed();
            await this.checkCorrectResult(expectedContents)
            const nextPageButton =  $('.next'); 
            if (await nextPageButton.isDisplayed() && await nextPageButton.isEnabled()) {
                await nextPageButton.click();
                await browser.pause(2000);
            } else {
                hasNextPage = false; 
            }
        }
    }
}
export default new FilterAndSort();