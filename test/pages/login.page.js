module.exports = {
	get email() {
		return $('#email');
	},

	get password() {
		return $('#password');
	},

	get logIn() {
		return $('#submit-button');
	},

	open() {
		browser.url('https://stackoverflow.com/users/login');
	}
}