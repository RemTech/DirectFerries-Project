//@ts-check

/**
 * @ESM syntax && \
 * @import dependencies
 */
import { Given, When, Then } from "cucumber";
import { loadLoginPage, signIntoAccount, confirmBookings, viewBookingNavigation, checkBookingDetails } from "../methods/login";

Given('I navigate to the  the home URL', async () => {
    await loadLoginPage();
});

When('I log into the account using the correct username and password', async () => {
    await signIntoAccount();
});

Then('I should be re-directed to the My Account page and 2 passengers and 1 vehicle for outbound sailing and 1 passenger and 1 vehicle for the return sailing is present', async () => {
    await confirmBookings();
});

When('I Navigate to view the details of the outbound sailing', async () => {
    await viewBookingNavigation();
});

Then('Vehicle shows as Abarth 500, Lead passenger name as "TestOne TestRD" and Other passenger name as "TestTwo TestRD"', async () => {
    await checkBookingDetails();
})