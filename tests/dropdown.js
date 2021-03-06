import { Selector } from "testcafe";

fixture `Aquabot Testing Dropdown`
    .page `https://aquabottesting.com/dropdowns.html`
    .beforeEach(async t => {
        await t.setPageLoadTimeout(0)
    })

    test("User can select several dropdown type", async t => {
        const ddMenu = Selector('.hdropbtn')
        const ddList = Selector('.hdropdown-content').find('a')
        const togDropdown = Selector('.slider')
        const ddTogle = Selector('#custom-select')
        const togList = Selector('#color-select').find('option')
        const rbGames = Selector('#games')
        const ddGames = Selector('#react-select')
        const ggGamesList = ddGames.find('option')

        await t
            .hover(ddMenu)
            .click(ddList.withText('Link 1'))

            .click(togDropdown)
            .click(ddTogle)
            .click(togList.withText('Green'))

            .click(rbGames)
            .click(ddGames)
            .click(ggGamesList.withText('Fall Guys'))
            .expect(ddGames.value).eql('Fall Guys')
    })