import { $ } from '@wdio/globals'
import Page from './page.js';
import Account from './account.page.js';
import { User } from '../model/user.js';
import elementPage from './element.page.js';
import allureReporter from '@wdio/allure-reporter'
class LoginPage extends Account {
    public open () {
        return super.open('account/login');
    }
    get registerBtn() {
        return $('[type="submit"][value="Đăng nhập"]')
    }
    async login(user:User){
        this.addAgrumentAllure(user);
        await this.emailEdt.setValue(user.email);
        await this.passwordEdt.setValue(user.password);
        await this.registerBtn.click();
    }
    async verifyErrorMessageMatches(mess:string){
        await elementPage.verifyErrorMessMatches(mess);
    }
    async verifyInputFieldEmpty() {
        await elementPage.verifyInputFieldIsEmpty(this.emailEdt);
    }
    private addAgrumentAllure(user: User) {
        allureReporter.addArgument('Email', user.email);
        allureReporter.addArgument('Password', user.password);
        allureReporter.addStep('Input data to Login form');
    }
}

export default new LoginPage();
