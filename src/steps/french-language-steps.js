//@ts-check

/**
 * @ESM syntax && \
 * @import dependencies
 */
import { Given, When, Then } from "cucumber";
import { homePage, clickSpecialOffers, special_Offers_Page, countryIcon, frenchPage } from "../methods/french-language";

Given('the page home URL is loaded on the browser and mouse hovered on special offers link text', async () => {
    await homePage();
});

When('I click on the Special Offers link text', async () => {
    await clickSpecialOffers();
});

Then('I should be re-routed to the Special offers Page and resource-name should equal /offers.htm', async () => {
    await special_Offers_Page();
});

When('I click the country Icon on the navigation bar and choose France from the list of countries drop-down', async () => {
    await countryIcon();
});

Then('the language should change from English to French and have the TLD characters end with .fr', async () => {
    await frenchPage();
})