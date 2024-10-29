import AllureReporter, { step } from "@wdio/allure-reporter";
import searchPage from "../pageobjects/search.page"
import allure from "allure-commandline";
import allureReporter from '@wdio/allure-reporter'
describe('Search', async () => {
    beforeEach(async () => {
        allureReporter.addOwner('DuongHA');
        searchPage.open();
        await browser.pause(3000)
    })

    it('Search with simple content', async () => {
        allureReporter.addDescription('Search with a content in database. Fails if display items not releated with content or empty', 'text')
        allureReporter.addSeverity('critical');
        await searchPage.search('cafe');
        await searchPage.checkAllResults('cafe');

    })
    // it('Search with related to content', async () => {
    //     allureReporter.addDescription('Search with related to content in database. Fails if display items not releated with content or empty', 'text')
    //     await searchPage.search('Sữa bò');
    //     await searchPage.checkAllResults('Sữa bò');
    // })
    // it('Search with  content not in data', async () => {
    //     allureReporter.addDescription('Search with content not in database. Fails if display items', 'text')
    //     await searchPage.search('máy tính');
    //     await searchPage.checkMessNotFoundItem('máy tính');
    // })

    // it('Search with no  content', async () => {
    //     allureReporter.addDescription('Search with no  content. Fails if any error happens', 'text')
    //     await searchPage.search('');
    //     // await searchPage.checkAllResults('');
    // })
    // it('Search with special characters', async () => {
    //     allureReporter.addDescription('Search with special characters. Fails if any error happens', 'text')
    //     await searchPage.search('');
    //     await browser.keys('@');
    //     await searchPage.checkMessNotFoundItem('@');
    // })
    // it('Search with 2 VN letter no in data', async () => {
    //     allureReporter.addDescription('Search with 2 VN letter no in data. Fails if any error happens', 'text')
    //     await searchPage.search('mì chính');
    //     await searchPage.checkMessNotFoundItem('mì chính');
    // })
    // it('Search with html cpde content', async () => {
    //     allureReporter.addDescription('Search with html cpde content. Fails if any error happens', 'text')
    //     await searchPage.checkAlertNotify('<2>');
    // })
})