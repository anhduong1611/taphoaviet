import searchPage from "../pageobjects/search.page"

describe('Search',async()=>{
    beforeEach(async()=>{
        searchPage.open();
    })

    it('Search with simple content',async ()=>{
        await searchPage.search('cafe');
        await searchPage.checkAllResults('cafe');
    })
    it('Search with related with content',async ()=>{
        await searchPage.search('Sữa bò');
        await searchPage.checkAllResults('Sữa bò');
    })
    it('Search with  content not in data',async ()=>{
        await searchPage.search('máy tính');
        await searchPage.checkMessNotFoundItem('máy tính');
    })

    it('Search with no  content',async ()=>{
        await searchPage.search('');
        // await searchPage.checkAllResults('');
    })
    it('Search with special characters',async ()=>{
        await searchPage.search('@');
        await searchPage.checkMessNotFoundItem('@');
    })
    it('Search with 2 VN letter no in data',async ()=>{
        await searchPage.search('mì chính');
        await searchPage.checkMessNotFoundItem('mì chính');
    })
    it.only('Search with html cpde content',async ()=>{
        await searchPage.checkAlertNotify('<2>');
    })
})