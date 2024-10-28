import { $ } from '@wdio/globals'
import Page from './page.js';
import Account from './account.page.js';
import { User } from '../model/user.js';
import elementPage from './element.page.js';

class LoginPage extends Account {
    public open () {
        return super.open('account/login');
    }
    get registerBtn() {
        return $('[type="submit"][value="Đăng nhập"]')
    }
    async login(user:User){
        await this.emailEdt.setValue(user.email);
        await this.passwordEdt.setValue(user.password);
        await this.registerBtn.click();
    }
    async checkErrorMessage(mess:string){
        await elementPage.checkErrorMessage(mess);
    }
    async checkInputAEmpty() {
        await elementPage.checkInputEmpty(this.emailEdt);
    }
}

export default new LoginPage();
