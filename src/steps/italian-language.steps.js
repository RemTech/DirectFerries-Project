//@ts-check

/**
 * @ESM syntax && \
 * @import dependencies
 */
import { Given, When, Then } from "cucumber";
import { homePage, clickSpecialOffers, special_Offers_Page, countryIcon, italianPage } from "../methods/italian-language";

Given('the page home URL is loaded on the browser and I hover on Special Offers link text in the navigation bar.', async () => {
    await homePage();
});

When('I click on the Special Offers link text.', async () => {
    await clickSpecialOffers();
});

Then('I should be re-routed to the Special offers Page and resource-name should equal /offers.htm.', async () => {
    await special_Offers_Page();
});

When('I click on the country Icon on the navigation bar and change country to Italia from the list of countries drop-down menu.', async () => {
    await countryIcon();
});

Then('the language should change from English to Italian and I should see the TLD name end with .it', async () => {
    await italianPage();
})