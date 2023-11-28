const {
    expect
} = require("chai");
require('dotenv').config();



class Homepage {

    SIGN_IN_HEADER = "#nav-link-accountList"
    SIGN_IN = "//*[@id='nav-al-container']//a[@data-nav-role='signin']"
    SIGN_IN_PAGE_USERNAME_LABEL = "//label[@for='ap_email']"
    async launchApp() {
        await page.goto(process.env.URL);
    }

    async navigateToLoginPage() {
        let username_label
        await page.locator(this.SIGN_IN_HEADER).click()
        username_label = await page.locator(this.SIGN_IN_PAGE_USERNAME_LABEL).innerText()
        if (!username_label.includes("Email or mobile")) {
            throw new Error("Can not navigate to Login page");
        }
        expect(username_label).to.contain("Email or mobile")
    }
}
module.exports = {
    Homepage
}