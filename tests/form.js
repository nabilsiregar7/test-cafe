import { Selector } from "testcafe";
import FormPage from '../page-objects/components/form-page'

const formPage = new FormPage()

fixture `Aquabot Testing Form`
    .page `https://aquabottesting.com/`
    .beforeEach(async t => {
        await t.setPageLoadTimeout(0)
    })

    test("User can submit Demo Contact Form", async t => {
        const chSuccess = Selector('#csuccess')
        const msgSubmitSuccess = Selector('#cmsgSubmit').innerText

        await t.click(formPage.btnDiscover)

        formPage.dataForm()

        await t
            .click(chSuccess)
            .click(formPage.btnSubmit)
            .expect(msgSubmitSuccess).contains('Message Submitted!')
    })

    test("User failed to submit Demo Contact Form", async t => {
        const chError = Selector('#cerror')
        const msgSubmitFailed = Selector('#cmsgSubmit').innerText

        await t.click(formPage.btnDiscover)

        formPage.dataForm()

        await t 
            .click(chError)
            .click(formPage.btnSubmit)
            .expect(msgSubmitFailed).contains('Error Message Failed!')
    })