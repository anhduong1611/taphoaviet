import { User } from "../model/user";
import Account from "./account.page";
import elementPage from "./element.page";

class Register extends Account {
    public open() {
        return super.open('account/register');
    }
    get registerBtn() {
        return $('[type="submit"][value="Đăng ký"]')
    }
    async register(user: User) {
        await this.lastNameEdt.setValue(user.lastName);
        await this.firstNameEdt.setValue(user.firstName);
        await this.emailEdt.setValue(user.email);
        await this.passwordEdt.setValue(user.password);
        await this.registerBtn.click();
    }

    async checkErrorMessage(mess: string) {
       await elementPage.checkErrorMessage(mess);
    }

    async checkInputAEmpty() {
        await elementPage.checkInputEmpty(this.lastNameEdt);
    }

}
export default new Register();