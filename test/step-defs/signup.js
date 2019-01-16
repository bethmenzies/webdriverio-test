const { When, Then } = require('cucumber');
const assert = require('assert');
const SignUpPage = require('../pages/signup.page');

When(/^I add a display name$/, function() {
	SignUpPage.displayName.setValue('display name');
});

When(/^I add an email address$/, function() {
	SignUpPage.email.setValue('email@email.com');
});

When(/^I add a password$/, function() {
	SignUpPage.password.setValue('test1234');
});

When(/^I sign up$/, function() {
	SignUpPage.signUp.scrollIntoView();
	SignUpPage.signUp.click();
});

Then(/^I am told to do the captcha$/, function() {
	SignUpPage.message.waitForDisplayed();
	assert.equal(SignUpPage.message.getText(), 'CAPTCHA response required.');
})