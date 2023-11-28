const report = require("multiple-cucumber-html-reporter");
const os = require('os');

const platformName = os.type();
const platformVersion = os.release();


report.generate({
  jsonDir: "reports/", // ** Path of .json file **//
  reportPath: "./reports/cucumber-htmlreport.html",
  metadata: {
    browser: {
      name: "chrome",
      version: "96",
    },
    device: "Macbook Pro 15.6 inch",
    platform: {
      name: platformName,
      version: platformVersion,
    },
  },
  displayDuration: true,
  durationInMS: true,
  displayReportTime: true,
  customStyle:"reports/customizedreport.css",
});
