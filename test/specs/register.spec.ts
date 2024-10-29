import { userData } from "../model/data";
import Account from "../pageobjects/account.page";

import registerPage from "../pageobjects/register.page"

describe('Register ',async()=>{
    const accountPage = new Account();
    beforeEach(async()=>{
        registerPage.open();    
        await browser.pause(3000);
    })

    it('Register user success', async ()=>{
        await registerPage.register(userData.userValid);
        await accountPage.checkInfoAccount(userData.userValid);
    })
    it('Register user unsuccess with the existed email',async()=>{
        await registerPage.register(userData.userExistEmail);
        await registerPage.checkErrorMessage(userData.userExistEmail.mess)
    })
    it('Register user unsuccess with the invalid email',async()=>{
        await registerPage.register(userData.userInvalidEmailFormat);
        await registerPage.checkErrorMessage(userData.userInvalidEmailFormat.mess)
    })
    it('Register user unsuccess with a empty field',async()=>{
        await registerPage.register(userData.userAllEmptyField);
        await registerPage.checkInputAEmpty();
    })
    it('Register user unsuccess with invalid password',async()=>{
        await registerPage.register(userData.userShortPassword);
        await registerPage.checkErrorMessage(userData.userShortPassword.mess);
    })

    it.only('Register user unsuccess with  a password that is too long',async()=>{
        await registerPage.register(userData.userExistEmailButCorrectPass);
        await registerPage.checkErrorMessage(userData.userExistEmailButCorrectPass.mess);
    })
})