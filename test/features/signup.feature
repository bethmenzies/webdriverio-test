Feature: Signing up on Stack Overflow

	Scenario: Sign up from the home page
		Given I am on Stack Overflow page
		When I click on Sign Up button
		Then I am taken to Sign Up page

	Scenario: Enter details
		Given I am on Sign Up page
		When I add a display name
		And I add an email address
		And I add a password
		And I sign up
		Then I am told to do the captcha