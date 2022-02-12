import { Selector } from 'testcafe'

fixture `Getting started with TestCafe`
    .page `https://the-internet.herokuapp.com/login`

test('Succesfully logged into the page', async t => {
    await t.typeText('#username', "tomsmith")
    await t.typeText('#password', "SuperSecretPassword!")
    await t.click('button')
    await t.expect(Selector('#flash').innerText).contains('You logged into')
})