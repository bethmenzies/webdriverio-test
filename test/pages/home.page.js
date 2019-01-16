module.exports = {
	get main() {
		return $('#mainbar');
	},

	get searchResults() {
		return $('.js-search-results');
	},

	open() {
		browser.url("https://stackoverflow.com/")
	}
}
