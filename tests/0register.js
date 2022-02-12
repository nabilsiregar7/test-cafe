import { Selector } from "testcafe";

fixture `Register test`
    .page `https://stockbit.com/#/register`
    .beforeEach(async t => {
        await t.setPageLoadTimeout(0)
    })

test.only("User can't register new account using an existing email", async t => {
    const btnRegistEmail = Selector('a.loginlogin.register-email')
    const txtUsername = Selector('#input-1')
    const txtEmail = Selector('#input-2')
    const lblErorMsgEmail = Selector('.errormsg').innerText

    await t.click(btnRegistEmail)
    await t.typeText(txtUsername, 'nabil')
    await t.typeText(txtEmail, 'email@gmail.com')
    await t.expect(lblErorMsgEmail).contains('Email sudah terdaftar')
})