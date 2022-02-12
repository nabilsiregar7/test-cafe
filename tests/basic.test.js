import { Selector } from 'testcafe'

fixture `Getting started with TestCafe`
    .page `https://the-internet.herokuapp.com/login`

test('Succesfully logged into the page', async t => {
    const txtUsername = Selector (`#username`)
    const txtPassword = Selector (`#password`)
    const btnSubmit = Selector (`button`)
    const lblSuccess = Selector (`#flash`).innerText

    // await t.takeScreenshot({ fullPage:true})
    await t.typeText(txtUsername, "tomsmith")
    await t.typeText(txtPassword, "SuperSecretPassword!")
    await t.click(btnSubmit)
    await t.expect(lblSuccess).contains('You logged')
})