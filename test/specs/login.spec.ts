import { userData } from "../model/data";
import Account from "../pageobjects/account.page";
import loginPage from "../pageobjects/login.page"

describe('Login',async()=>{
    const accountPage = new Account();
    beforeEach(async ()=>{
        loginPage.open();
        await browser.pause(3000)
    })

    // it('Login success with account',async ()=>{
    //     await loginPage.login(userData.userExistEmail);
    //     await accountPage.checkInfoAccount(userData.userExistEmail);
    // })
    // it('Login unsuccess with email not existed',async ()=>{
    //     await loginPage.login(userData.userNoExistEmail);
    //     await loginPage.checkErrorMessage(userData.userNoExistEmail.mess);
    // })

    // it('Login unsuccess with all empty field',async()=>{
    //     await loginPage.login(userData.userAllEmptyField);
    //     await loginPage.checkInputAEmpty();
    // })
    // it('Login unsuccess with the invalid pass format',async()=>{
    //     await loginPage.login(userData.userShortPassword);
    //     await loginPage.checkErrorMessage(userData.userShortPassword.messLogin);
    // })
    // it('Login unsuccess with the invalid email format',async()=>{
    //     await loginPage.login(userData.userInvalidEmailFormat);
    //     await loginPage.checkErrorMessage(userData.userInvalidEmailFormat.mess);
    // })
    // it('Login unsuccess with the correct email but with the wrong password',async()=>{
    //     await loginPage.login(userData.userExistEmailButCorrectPass);
    //     await loginPage.checkErrorMessage(userData.userExistEmailButCorrectPass.mess);
    // })

})
