import AllureReporter, { step } from "@wdio/allure-reporter";
import searchPage from "../pageobjects/search.page"
import allure from "allure-commandline";
import allureReporter from '@wdio/allure-reporter'
describe('Search', async () => {
    beforeEach(async () => {
        allureReporter.addOwner('DuongHA');
        searchPage.open();
        await $('#ezca-btn-zalo').waitForDisplayed();
    })

    it('should display relevant items when searching with simple content', async () => {
        allureReporter.addDescription('Search for a simple content in the database. It fails if items displayed are unrelated or if no items are found.', 'text');
        await searchPage.search('cafe');
        await searchPage.verifyAllItemsMatchContent('cafe');

    })
    it('should display relevant items when searching with related content', async () => {
        allureReporter.addDescription('Search with related to content in database. Fails if display items not releated with content or empty', 'text')
        await searchPage.search('Sữa bò');
        await searchPage.verifyAllItemsMatchContent('Sữa bò');
    })
    it('should display not found message when searching with non-existent content', async () => {
        allureReporter.addDescription('Search for content not present in the database. It fails if items are displayed.', 'text');
        await searchPage.search('máy tính');
        await searchPage.verifyErrorTextMatchesContent('máy tính');
    })

    it('should display all items when searching with no content', async () => {
        allureReporter.addDescription('Search with no  content. Fails if any error happens', 'text')
        await searchPage.search('');
        // await searchPage.checkAllResults('');
    })
    it('should display not found message when searching with special characters', async () => {
        allureReporter.addDescription('Search with special characters. Fails if any error happens', 'text')
        await searchPage.search('');
        await browser.keys('@');
        await searchPage.verifyErrorTextMatchesContent('@');
    })
    it('should display not found message when searching with 2 Vietnamese letters not in data', async () => {
        allureReporter.addDescription('Search with 2 VN letter no in data. Fails if any error happens', 'text')
        await searchPage.search('mì chính');
        await searchPage.verifyErrorTextMatchesContent('mì chính');
    })
    it('should display alert when searching with HTML code content', async () => {
        allureReporter.addDescription('Search with html cpde content. Fails if any error happens', 'text')
        await searchPage.validateAlertTextMatchesContent('<2>');
    })
})