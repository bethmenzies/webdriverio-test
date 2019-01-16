module.exports = {
	get displayName() {
		return $('#display-name');
	},

	get email() {
		return $('#email');
	},

	get password() {
		return $('#password');
	},

	get signUp() {
		return $('#submit-button');
	},

	get message() {
		return $('.message-text');
	},

	open() {
		browser.url("https://stackoverflow.com/users/signup");
	}
}