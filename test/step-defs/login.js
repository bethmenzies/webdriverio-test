const { When, Then } = require('cucumber');
const assert = require('assert');
const LogInPage = require('../pages/login.page');
const HomePage = require('../pages/home.page');

When(/^I provide email$/, function() {
	LogInPage.email.setValue('bethmenzies@btopenworld.com');
});

When(/^I provide password$/, function() {
	LogInPage.password.setValue('test1234');
});

When(/^I log in$/, function() {
	LogInPage.logIn.click();
});

Then(/^I am logged in$/, function() {
	HomePage.main.waitForDisplayed();
	assert.equal(browser.getUrl(), 'https://stackoverflow.com/');
})