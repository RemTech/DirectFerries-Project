Feature: Change language to french

    Scenario:
        Given the page home URL is loaded on the browser and mouse hovered on special offers link text
        When I click on the Special Offers link text
        Then I should be re-routed to the Special offers Page and resource-name should equal /offers.htm
        When I click the country Icon on the navigation bar and choose France from the list of countries drop-down
        Then the language should change from English to French and have the TLD characters end with .fr

