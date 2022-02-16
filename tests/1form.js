import { Selector } from "testcafe";

fixture `Aquabot Testing`
    .page `https://aquabottesting.com/`
    .beforeEach(async t => {
        await t.setPageLoadTimeout(0)
    })

    test("User can submit Demo Contact Form", async t => {
        const btnDiscover = Selector('#discover')
        const txtName = Selector('#cname')
        const txtEmail = Selector('#cemail')
        const txtPhone = Selector('#cphone')
        const rbMobile = Selector('#cphone-mobile')
        const ddQuestion = Selector('#cselect')
        const ddOption = ddQuestion.find('option')
        const chSuccess = Selector('#csuccess')
        const btnSubmit = Selector('#submit')
        const msgSubmit = Selector('#cmsgSubmit').innerText

        await t
            .click(btnDiscover)
            .typeText(txtName, 'nabilsiregar')
            .typeText(txtEmail, 'email@gmail.com')
            .typeText(txtPhone, '0812345678')
            .click(rbMobile)
            .click(ddQuestion)
            .click(ddOption.withText('Testing'))
            .expect(ddQuestion.value).eql('Testing')
            .click(chSuccess)
            .click(btnSubmit)
            .expect(msgSubmit).contains('Message Submitted!')
    })