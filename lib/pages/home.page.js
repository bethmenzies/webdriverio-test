"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class HomePage {
  get search() {
    return $('#search');
  }

  get searchInput() {
    return $('.f-input');
  }

  get searchSubmitButton() {
    return $('button[type="submit"]');
  }

  get logIn() {
    return $('.btn-topbar-clear');
  }

  get signUp() {
    return $('.btn-topbar-primary');
  }

  open() {
    browser.url("https://stackoverflow.com/");
  }

  toSignUp() {
    this.signUp.click();
  }

  submitSearch() {
    this.searchSubmitButton.click();
  }

}

var _default = new HomePage();

exports.default = _default;