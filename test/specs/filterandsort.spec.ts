import filterandsortPage from "../pageobjects/filterandsort.page"
import allureReporter from '@wdio/allure-reporter'
describe('Filter and sort',async ()=>{
    beforeEach(async()=>{
        filterandsortPage.open();
        await browser.pause(3000)
    })

    it('Filter with a content in Thương hiệu ',async()=>{
        allureReporter.addFeature('Filter and sort');
        await filterandsortPage.fileterABrand();
        await filterandsortPage.checkAllResults(['DH Food'])
    })
    it('Filter with many content in Thương hiệu ',async()=>{
        await filterandsortPage.filter3Brand();
        await filterandsortPage.checkAllResults(['DH Food','Vinamilk','X-men'])
    })
})