"use strict";

var _cucumber = require("cucumber");

var _home = _interopRequireDefault(require("../pages/home.page"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('StackOverflow home page', () => {
  _home.default.open();

  it('should have the sign up button', () => {
    expect(_home.default.search).to.exist;
  });
  it('when I search for something', () => {
    _home.default.searchInput.setValue('node js');

    _home.default.submitSearch();

    it('should take you to the sign up page', () => {
      expect(SignUpPage.formContainer).to.exist;
      expect(SignUpPage.fsTitle).to.contain("Stack Overflow account");
    });
  });
});