import { User } from "../model/user";
import Account from "./account.page";
import elementPage from "./element.page";
import allureReporter from '@wdio/allure-reporter'
class Register extends Account {
    public open() {
        return super.open('account/register');
    }
    get registerBtn() {
        return $('[type="submit"][value="Đăng ký"]')
    }
    async register(user: User) {
        this.addAgrumentAllure(user);
        await this.lastNameEdt.setValue(user.lastName);
        await this.firstNameEdt.setValue(user.firstName);
        await this.emailEdt.setValue(user.email);
        await this.passwordEdt.setValue(user.password);
        await this.registerBtn.click();
    }

    private addAgrumentAllure(user: User) {
        allureReporter.addArgument('Ho', user.lastName);
        allureReporter.addArgument('Ten', user.firstName);
        allureReporter.addArgument('Email', user.email);
        allureReporter.addArgument('Password', user.password);
        allureReporter.addStep('Input data to register form');
    }
    async verifyErrorMessageMatches(mess: string) {
       await elementPage.verifyErrorMessMatches(mess);
    }
    async verifyInputFieldIsEmpty() {
        await elementPage.verifyInputFieldIsEmpty(this.lastNameEdt);
    }
}
export default new Register();