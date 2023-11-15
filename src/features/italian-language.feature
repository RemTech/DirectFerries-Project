Feature: Change language to Italian

Scenario:
       Given the page home URL is loaded on the browser and I hover on Special Offers link text in the navigation bar.
       When I click on the Special Offers link text.
       Then I should be re-routed to the Special offers Page and resource-name should equal /offers.htm.
       When I click on the country Icon on the navigation bar and change country to Italia from the list of countries drop-down menu.
       Then the language should change from English to "Italian" and I should see the TLD name end with .it
    
