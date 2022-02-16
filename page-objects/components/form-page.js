import { Selector, t } from "testcafe";

class FormPage {
    constructor(){
        this.btnDiscover = Selector('#discover')
        this.txtName = Selector('#cname')
        this.txtEmail = Selector('#cemail')
        this.txtPhone = Selector('#cphone')
        this.rbMobile = Selector('#cphone-mobile')
        this.ddQuestion = Selector('#cselect')
        this.ddOption = this.ddQuestion.find('option')
        this.btnSubmit = Selector('#submit')
    }

    async dataForm() {
        await t
            .typeText(this.txtName, 'nabilsiregar')
            .typeText(this.txtEmail, 'email@gmail.com')
            .typeText(this.txtPhone, '0812345678')
            .click(this.rbMobile)
            .click(this.ddQuestion)
            .click(this.ddOption.withText('Testing'))
            .expect(this.ddQuestion.value).eql('Testing')
    }
}

export default FormPage