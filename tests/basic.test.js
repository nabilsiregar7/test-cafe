import { Selector, t } from 'testcafe'

fixture `Getting started with TestCafe`
    .page `https://the-internet.herokuapp.com/login`
    .beforeEach(async t => {
        await t.setTestSpeed(1)
        await t.setPageLoadTimeout(0)
    })

test('Succesfully logged into the page', async t => {
    const txtUsername = Selector (`#username`)
    const txtPassword = Selector (`#password`)
    const btnSubmit = Selector (`button`)
    const lblSuccess = Selector (`#flash`).innerText

    await t.typeText(txtUsername, "tomsmith")
    await t.typeText(txtPassword, "SuperSecretPassword!")
    await t.click(btnSubmit)
    await t.expect(lblSuccess).contains('You logged')

    // Click
    await t.click('selector', { options })
    // Double click
    await t.doubleClick('selector', { options })
    // Right click
    await t.rightClick('selector', { options })
    // Drag element
    await t.drag('selector', 200, 0, { options })
    // Hover
    await t.hover('selector', { options })
    // Select text
    await t.selectText('selector')
    // Type text
    await t.typeText('selector', 'text')
    // Press key on the keyboard
    await t.pressKey('backspace')
    // Navigate
    await t.navigateTo('url')
    // Take screenshots
    await t.takeScreenshot()
    await t.takeElementScreenshot()
    // Resize window
    await t.resizeWindow(800, 200)

    // Deep equal
    await t.expect('foo').eql('foo', 'message', options)
    // Not deep equal
    await t.expect('foo').notEql('foo')
    // OK
    await t.expect(true).ok()
    // Not OK
    await t.expect(true).notOk()
    // Contains
    await t.expect('foo').contains('o')
    // Not contains
    await t.expect('foo').notContains('hey')
    // Greater or less than
    await t.expect(10).gt(10)
    await t.expect(10).gte(10)
    await t.expect(10).lt(10)
    await t.expect(10).lte(10)
    // Within
    await t.expect(10).within(1, 100)
    // Not within
    await t.expect(10).notWithin(5, 50)
})