module.exports = {
	get search() {
		return $('#search');
	},

	get searchInput() {
		return $('.s-input');
	},

	get searchSubmitButton() {
		return $('button[type="submit"]');
	},

	get logIn() {
		return $('a.btn-topbar-clear');
	},

	get signUp() {
		return $('a.btn-topbar-primary');
	},

	submitSearch() {
		this.searchSubmitButton.click();
	}
}