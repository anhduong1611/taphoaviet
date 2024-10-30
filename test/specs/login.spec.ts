import { userData } from "../model/data";
import Account from "../pageobjects/account.page";
import loginPage from "../pageobjects/login.page"
import allureReporter from '@wdio/allure-reporter'
describe('Login',async()=>{
    const accountPage = new Account();
    beforeEach(async ()=>{
        loginPage.open();
        await $('#ezca-btn-zalo').waitForDisplayed();
    })

    it('should login success with existed account',async ()=>{
        await loginPage.login(userData.userExistEmail);
        await accountPage.verifyInfoAccount(userData.userExistEmail);
    })
    it('should login unsuccess with email not existed',async ()=>{
        await loginPage.login(userData.userNoExistEmail);
        await loginPage.verifyErrorMessageMatches(userData.userNoExistEmail.mess);
    })

    it('should login unsuccess with all empty field',async()=>{
        await loginPage.login(userData.userAllEmptyField);
        await loginPage.verifyInputFieldEmpty();
    })
    it('should login unsuccess with the invalid pass format',async()=>{
        await loginPage.login(userData.userShortPassword);
        await loginPage.verifyErrorMessageMatches(userData.userShortPassword.messLogin);
    })
    it('should login unsuccess with the invalid email format',async()=>{
        await loginPage.login(userData.userInvalidEmailFormat);
        await loginPage.verifyErrorMessageMatches(userData.userInvalidEmailFormat.mess);
    })
    it('should login unsuccess with the correct email but with the wrong password',async()=>{
        await loginPage.login(userData.userExistEmailButCorrectPass);
        await loginPage.verifyErrorMessageMatches(userData.userExistEmailButCorrectPass.mess);
    })

})
