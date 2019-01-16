Feature: Performing a search on Stack Overflow

	Scenario: Performing search from home page
		Given I am on Stack Overflow page
		When I search for node 8
		Then I am taken to Search Results page
		And I see results for node 8