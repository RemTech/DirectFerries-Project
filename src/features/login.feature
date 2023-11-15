Feature: Login User

     Scenario: 
             Given I navigate to the  the home URL
             When I log into the account using the correct username and password
             Then I should be re-directed to the My Account page and 2 passengers and 1 vehicle for outbound sailing and 1 passenger and 1 vehicle for the return sailing is present
             When I Navigate to view the details of the outbound sailing
             Then Vehicle shows as Abarth 500, Lead passenger name as "TestOne TestRD" and Other passenger name as "TestTwo TestRD"