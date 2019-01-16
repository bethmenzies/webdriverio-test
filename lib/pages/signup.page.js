"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class SignUpPage {
  get formContainer() {
    return $('#formContainer');
  }

  open() {
    browser.url("https://stackoverflow.com/users/signup");
  }

}

var _default = new SignUpPage();

exports.default = _default;