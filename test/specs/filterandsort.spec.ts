import filterandsortPage from "../pageobjects/filterandsort.page"
import allureReporter from '@wdio/allure-reporter'
describe('Filter and sort',async ()=>{
    beforeEach(async()=>{
        filterandsortPage.open();
        await $('#ezca-btn-zalo').waitForDisplayed();
    })

    it('should display items when filtering with a content in Thương hiệu ',async()=>{
        await filterandsortPage.fileterABrand();
        await filterandsortPage.verifyAllItemsMatches(['DH Food'])
    })
    it('should display items when filtering with many content in Thương hiệu ',async()=>{
        await filterandsortPage.filter3Brand();
        await filterandsortPage.verifyAllItemsMatches(['DH Food','Vinamilk','X-men'])
    })
})