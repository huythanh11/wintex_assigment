const {
    expect
} = require("chai")
const utils = require("../utils/utils")

const util = new utils()

class Login {
    USERNAME = "#ap_email"
    CONTINUE = "input#continue"
    PASSWORD = "#ap_password"
    SIGN_IN = "#signInSubmit"
    ERROR_TOAST_TITLE = "#auth-error-message-box .a-alert-heading"
    ERROR_TOAST_MESSAGE = ".a-list-item"
    INPUT_MOBILE_FORM_TITLE = "//h1[@class='a-spacing-small']"
    MANAGE_PROFILE = "#nav-al-profile"
    async enterUserName(username) {
        await page.locator(this.USERNAME).fill(username)
        await page.locator(this.CONTINUE).click()

    }
    async enterPassword(password) {
        if (page.isVisible(this.PASSWORD)) {
            await page.locator(this.PASSWORD).type(password)
            await page.locator(this.SIGN_IN).click()
        }

    }

    async enterCridential(username, password) {
        this.enterUserName(username);
        this.enterPassword(password);
        await util.waitShorTime();
    }

    async checkErrorMessage() {
        let getTitle;
        let getMessage;
        getTitle = await page.locator(this.ERROR_TOAST_TITLE).innerText()
        getMessage = await page.locator(this.ERROR_TOAST_MESSAGE).innerText()

        expect(getTitle).to.equal('There was a problem');
        // await expect(getText).toHaveTitle('Amazon.com: Login');

    }

    async login(username, password) {
        this.enterUserName(username);
        this.enterPassword(password);
    }

    async isLoggedInSuccess() {
        if (page.isVisible(this.MANAGE_PROFILE)) {
            const ele = await page.$$(this.MANAGE_PROFILE);
            console.log("Verify isLoggined from Homepage with Manage Profile element to be " + ele.length)
            expect(ele.length).to.greaterThan(0);
        } else if (page.isVisible(this.INPUT_MOBILE_FORM_TITLE)) {
            const ele = await page.$$(this.INPUT_MOBILE_FORM_TITLE);
            console.log("Verify isLoggined from Homepage with Manage Profile :" + ele.length)
            expect(ele.length).to.greaterThan(0);

        }

    }
}
module.exports = {
    Login
}