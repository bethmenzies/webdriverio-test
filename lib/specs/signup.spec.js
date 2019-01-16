"use strict";

var _chai = require("chai");

var _homePage = _interopRequireDefault(require("../pages/home.page.js"));

var _signupPage = _interopRequireDefault(require("../pages/signup.page.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('StackOverflow home page', function () {
  _homePage.default.open();

  it('should have the sign up button', function () {
    (0, _chai.expect)(_homePage.default.signUp).to.exist;
  });
  describe('when I click on sign up button', function () {
    _homePage.default.signUp.click();

    it('should take you to the sign up page', function () {
      (0, _chai.expect)(_signupPage.default.formContainer).to.exist;
      (0, _chai.expect)(_signupPage.default.fsTitle).to.contain("Stack Overflow account");
    });
  });
});