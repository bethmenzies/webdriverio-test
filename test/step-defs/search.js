const { When, Then } = require('cucumber');
const assert = require('assert');
const NavBar = require('../pages/navbar.page');

When(/^I search for (.*)$/, function(search) {
    NavBar.searchInput.setValue(search);
    NavBar.submitSearch();
});

Then(/^I see results for (.*)$/, function(search) {
    assert.equal(browser.getTitle(), "Posts containing '" + search + "' - Stack Overflow");
});