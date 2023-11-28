const {
  Given,
  When,
  Then
} = require("@cucumber/cucumber");
const {
  Homepage
} = require("../pageobject/Homepage");
const {
  Login
} = require("../pageobject/LoginPage");

const homePage = new Homepage();
const login = new Login();


Given('user is in login page', async function () {
  await homePage.launchApp();
  await homePage.navigateToLoginPage()

});

When('user enter {string} and {string} and click on Login button', async function (username, pass) {
  await login.enterCridential(username, pass);

});


When('user enter username and password and click on Login button', async function () {

});

Then('user get error message', async function () {
  await login.checkErrorMessage();


});

Then('user can login successfully', async function () {
  await login.isLoggedInSuccess();

});