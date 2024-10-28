import filterandsortPage from "../pageobjects/filterandsort.page"

describe('Filter and sort',async ()=>{
    beforeEach(async()=>{
        filterandsortPage.open();
    })

    it('Filter with a content in Thương hiệu ',async()=>{
        await filterandsortPage.fileterABrand();
        await filterandsortPage.checkAllResults(['DH Food'])
    })
    it('Filter with many content in Thương hiệu ',async()=>{
        await filterandsortPage.filter3Brand();
        await filterandsortPage.checkAllResults(['DH Food','Vinamilk','X-men'])
    })
})