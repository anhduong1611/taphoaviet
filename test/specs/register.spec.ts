import { userData } from "../model/data";
import Account from "../pageobjects/account.page";

import registerPage from "../pageobjects/register.page"
import allureReporter from '@wdio/allure-reporter'
describe('Register',async()=>{
    const accountPage = new Account();
    beforeEach(async()=>{
        allureReporter.addOwner('DuongHA')
        registerPage.open();    
        await $('#ezca-btn-zalo').waitForDisplayed();
    })
    it('should register user success with valid data', async ()=>{
        await registerPage.register(userData.userValid);
        await accountPage.verifyInfoAccount(userData.userValid);
    })
    it('should register user unsuccess with the existed email',async()=>{
        await registerPage.register(userData.userExistEmail);
        await registerPage.verifyErrorMessageMatches(userData.userExistEmail.mess)
    })
    it('Register user unsuccess with the invalid email',async()=>{
        await registerPage.register(userData.userInvalidEmailFormat);
        await registerPage.verifyErrorMessageMatches(userData.userInvalidEmailFormat.mess)
    })
    it('Register user unsuccess with a empty field',async()=>{
        await registerPage.register(userData.userAllEmptyField);
        await registerPage.verifyInputFieldIsEmpty();
    })
    it('Register user unsuccess with invalid password',async()=>{
        await registerPage.register(userData.userShortPassword);
        await registerPage.verifyErrorMessageMatches(userData.userShortPassword.mess);
    })

    it.only('Register user unsuccess with  a password that is too long',async()=>{
        await registerPage.register(userData.userExistEmailButCorrectPass);
        await registerPage.verifyErrorMessageMatches(userData.userExistEmailButCorrectPass.mess);
    })
})