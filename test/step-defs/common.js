const { Given, When, Then } = require('cucumber');
const assert = require('assert');
const HomePage = require('../pages/home.page');
const NavBar = require('../pages/navbar.page');
const SignUpPage = require('../pages/signup.page');
const LogInPage = require('../pages/login.page');

Given(/^I am on (.*) page$/, function(page) {
	switch (page) {
		case 'Stack Overflow':
			HomePage.open();
			break;
		case 'Sign Up':
			SignUpPage.open();
			break;
		case 'Log In':
			LogInPage.open();
			break;
		default:
			console.error('No such page');
			break;
	}
});

When(/^I click on (.*) button$/, function(button) {
	switch (button) {
		case 'Sign Up':
			NavBar.signUp.click();
			break;
		case 'Log In':
			NavBar.logIn.click();
			break;
		default:
			console.error('No such button');
			break;
	}
});

Then(/^I am taken to (.*) page$/, function(page) {
	switch (page) {
		case 'Sign Up':
			assert.equal(browser.getTitle(), "Sign Up - Stack Overflow");
			break;
		case 'Log In':
			assert.equal(browser.getTitle(), "Log In - Stack Overflow");
			break;
		case 'Search Results':
			assert(HomePage.searchResults.isExisting());
			break;
		default:
			console.error('No such button');
			break;
	}
});