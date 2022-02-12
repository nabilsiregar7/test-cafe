import { Selector } from "testcafe";

fixture `Login test`
    .page `https://stockbit.com/#/login`
    .beforeEach(async t => {
        await t.setPageLoadTimeout(0)
    })

test.only("User can't login with invalid credentials", async t => {
    const txtUsername = Selector('#username')
    const txtPassword = Selector('#password')
    const lblFailLogin = Selector('div.sysmsg-content').innerText

    await t.typeText(txtUsername, 'nabilsiregar')
    await t.typeText(txtPassword, '12345678')
    await t.expect(lblFailLogin).contains('Username atau password salah. Mohon coba lagi.')
})