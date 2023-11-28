@fulltest
Feature: Search products function 

    @search
    Scenario: Verify result list is paginated if there are more than 16 items
        Given the user is on the search page
        When the user performs a search with the following details:
            | Department | Books   |
            | Keyword    | apple   |
            | Language   | en |
        Then the result list displays exactly 16 items per page
        And pagination display


    @search
    Scenario: Verify result list can be sorted on demand
        Given the user is on the search page
        When the user performs a search with the following details:
            | Department | Books   |
            | Keyword    | apple   |
            | Language   | en |
        And the user changes the sort option to "Publication Date"
        Then the result list is sorted by Publication date