const {
    Given,
    When,
    Then,
    And,
    defineStep,
    setDefaultTimeout
} = require('@cucumber/cucumber')
const {
    Homepage
} = require("../pageobject/Homepage");
const {
    SearchPage
} = require("../pageobject/SearchPage");
const {
    util
} = require('chai');
const utils = require('../utils/utils');
setDefaultTimeout(120 * 1000);
const homePage = new Homepage();
const searchPage = new SearchPage();


Given('the user is on the search page', async function () {
    await homePage.launchApp();

});

When('the user performs a search with the following details:', async function (dataTable) {
    const searchData = dataTable.rowsHash();
    await searchPage.selectLanguage(searchData.Language);
    await searchPage.selectCategory(searchData.Department);
    await searchPage.performSearch(searchData.Keyword)
});

Then('the result list displays exactly {int} items per page', async function (int) {
    await searchPage.waitForSearchResult();
    await searchPage.getItemCount(int);

});

Then('pagination display', async function () {
    await searchPage.hasPagination();


});

When('the user changes the sort option to {string}', async function (sortBy) {
    await page.waitForTimeout(5000);
    await searchPage.openSortOption();
    await searchPage.selectSort(sortBy);
    await searchPage.waitForSearchResult();
});

Then('the result list is sorted by Publication date', async function () {
    await searchPage.sortedBypublicationDate();

});