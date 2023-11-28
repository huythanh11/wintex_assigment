const {
  expect
} = require("chai");
const utils = require("../utils/utils")

const util = new utils()
class SearchPage {
  SEARCHBAR_INPUT = 'input[name="field-keywords"]'
  SEARCHBAR_SEARCHICON = '#nav-search-submit-button'
  SEARCHBAR_CATEGORYLIST = 'select[name="url"]'

  HEADER_CHOOSELANGUAGE = '.icp-nav-link-inner .nav-line-2 .nav-icon.nav-arrow'
  SEARCH_RESULT = '[data-component-type="s-search-result"]'
  RESULT_PAGINATION = '.s-pagination-item'
  RESULT_PUBLISHDATE = '//span[contains(@class, "a-size-base") and contains(@class, "a-text-normal")]/text()'
  SORT_OPTION = '//span[@class="a-button-inner"]'
  BOOK_PUBLIC_DATE='.a-size-base.a-color-secondary .a-text-normal'

  CHOOSE_LANGUAGE(language) {
    const locator = `//*[@id="nav-flyout-icp"]//*[@href="#switch-lang=${language}_US"]`
    return locator
  }
  SORT_TYPE(sortType) {
    const locator = `//a[text()='${sortType}']`
    return locator
  }

  async performSearch(keyword) {
    await page.locator(this.SEARCHBAR_INPUT).click();
    await page.locator(this.SEARCHBAR_INPUT).fill(keyword);
    await utils.wa
    await page.locator(this.SEARCHBAR_SEARCHICON).click();
    // await page.keyboard.press("Enter")
  }

  async selectCategory(category) {
    const selectLocator = await page.locator(this.SEARCHBAR_CATEGORYLIST);
    await selectLocator.selectOption(category);

  }

  async selectLanguage(language) {
    await page.locator(this.HEADER_CHOOSELANGUAGE).first().hover();
    await util.waitShorTime();
    await page.locator(this.CHOOSE_LANGUAGE(language)).click();
    await util.waitShorTime();
  }

  async waitForSearchResult() {
    await page.waitForSelector(this.SEARCH_RESULT);
  }

  async getItemCount(expectedNumber) {
    await util.waitShorTime();
    const itemCount = await page.$$(this.SEARCH_RESULT);
    expect(itemCount.length).to.equal(expectedNumber)
  }

  async hasPagination() {
    const pagination = await page.$$eval(this.RESULT_PAGINATION);
    return pagination !== null;
  }

  async sortedBypublicationDate() {
    const publicationDates = await page.$$eval(this.BOOK_PUBLIC_DATE, (elements) =>
      elements.map((element) => element.textContent.trim())
    );
    let isSorted = true;
    for (let i = 0; i < publicationDates.length - 1; i++) {
      const currentDate = new Date(publicationDates[i]);
      const nextDate = new Date(publicationDates[i + 1]);
      if (currentDate < nextDate) {
        isSorted = false;
        break;
      }
    }

    if (isSorted) {
      console.log('The result list is sorted by Publication date.');
    } else {
      console.log('The result list is not sorted by Publication date.');
    }
  }

  async openSortOption() {
    await page.locator(this.SORT_OPTION).click();

  }


  async selectSort(sortType) {
    await page.locator(this.SORT_TYPE(sortType)).click();

  }


}


module.exports = {
  SearchPage
}