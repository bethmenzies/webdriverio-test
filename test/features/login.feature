Feature: Logging into Stack Overflow

	Scenario: Log in from the home page
		Given I am on Stack Overflow page
		When I click on Log In button
		Then I am taken to Log In page

	Scenario: Log in with existing credentials
		Given I am on Log In page
		When I provide email
		And I provide password
		And I log in
		Then I am logged in 
