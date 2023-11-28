@fulltest
Feature: Verify Login function

@login
Scenario Outline: Verify user can not login with invalid account
    Given user is in login page
    When user enter '<username>' and '<password>' and click on Login button
    Then user get error message
    Examples:
        |username|password|
        |invalidemail@gmail.com|invaliadpass|
     
@login
Scenario Outline: Verify user can login with valid account
    Given user is in login page
    When user enter '<username>' and '<password>' and click on Login button
    Then user can login successfully
    Examples:
        |username|password|
        |huythanhn11@gmail.com|@Huy123456|


