import { User } from "../model/user";
import Page from "./page";
import allureReporter from '@wdio/allure-reporter'
class Account extends Page {
    get firstNameEdt() {
        return $('[name="customer[first_name]"]');
    }
    get lastNameEdt() {
        return $('[name="customer[last_name]"]');
    }
    get emailEdt() {
        return $('[name="customer[email]"]');
    }
    get passwordEdt() {
        return $('[name="customer[password]"]');
    }
    get nameAccountTxt() {
        return $('.name_account');
    }
    get emailAccountTxt() {
        return $('.email')
    }
    async verifyInfoAccount(user: User) {
        allureReporter.addStep('Check account user is correcr or not')
        await browser.waitUntil(async () => {
            return await browser.getUrl() === 'https://www.webtaphoa.vn/account';
        });
        const nameAccount = user.firstName + ' ' + user.lastName;
        await expect(this.nameAccountTxt).toHaveText(nameAccount);
        await expect(this.emailAccountTxt).toHaveText(user.email.toLowerCase());
    }
   

}
export default Account; 