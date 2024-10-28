import Page from "./page";
import myValidation from "../untils/check.util";
class Search extends Page{ 
    public open() {
        return super.open('');
    }
    get searchEdt(){
        return $('#inputSearchAuto-3');
    }
    get searchBtn(){
        return $('#btnSearchAuto-3');
    }
    get messageNotFountTxt(){
        return $('.subtext');
    }
    async search(content :string){
        await this.searchEdt.setValue(content);
        await this.searchBtn.click();
    }
    async checkMessNotFoundItem(content:string){
        const expected = `Không tìm thấy "${content}". Vui lòng kiểm tra chính tả, sử dụng các từ tổng quát hơn và thử lại!`;
        await expect(this.messageNotFountTxt).toHaveText(expected);
    }
    async checkAlertNotify(content: string) {
        await this.searchEdt.setValue(content);
        const alertText = await browser.getAlertText();
        await expect(alertText).toEqual('Từ khóa của bạn có chứa mã độc hại ! Vui lòng nhập lại key word khác')
    }
    
    async checkCorrectResult(content: string) {
        const normalizedContent = myValidation.removeDiacritics(content.toLowerCase()); // Chuyển đổi nội dung cần kiểm tra
        for await (const product of $$('.product-item')) {
            const productName = await product.$('.pro-name a').getText();
            const normalizedProductName = myValidation.removeDiacritics(productName.toLowerCase()); // Chuyển đổi tên sản phẩm
            expect(normalizedProductName).toContain(normalizedContent);
        }
    } 

    async checkAllResults(content: string) {
        let hasNextPage = true;
        while (hasNextPage) {
            const products =  $('.product-item');
            await products.waitForDisplayed();
            await this.checkCorrectResult(content)
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
export default new Search();