//@ts-check

/**
 * @import dependencies && \
 * @ESM syntax
 */
import { ClientFunction, Selector, t } from "testcafe";
const specialOffers = 'Special offers';
const resource = '/offers.htm';
const attrKey = 'href';
const attrValue = '/offers.htm';
const frenchPageText = 'Compagnies de ferry';
const pathName = ClientFunction(() => window.location.pathname.toString());
const top_Level_Domain = ClientFunction(() => window.location.href.toString());
const topLevelDomain = '.fr';
const baseURL = 'https://www.directferries.com';
const iconElement = '[aria-label="Language Dropdown"]';
const anchorTag = Selector('a');
const h3Tag = Selector('h3');

/**
 * @function homepage
 */
export const homePage = async () => {
    await t
        .maximizeWindow()
        .navigateTo(baseURL)
        .wait(2)
        .hover(anchorTag.withExactText(specialOffers))
};

/**
 * @function click special-offers
 */
export const clickSpecialOffers = async () => {
    await t
        .wait(3)
        .click(anchorTag.withAttribute(attrKey, attrValue))
};

/**
 * @function special-offers page
 */
export const special_Offers_Page = async () => {
    await t
        .wait(3)
        .expect(pathName()).contains(resource)
};

/**
 * @function click country icon
 * @URL for issue https://testcafe.io/documentation/402752/reference/test-api/selector/filterhidden
 * @issue dimention for the property is 0 X 0 
 */
export const countryIcon = async () => {

    /**await t
        .wait(1)
        .click(iconSelector.nth(0).filterHidden()); **/

    await
        t
        .wait(2)
        .takeElementScreenshot(getSelector(iconElement).filterHidden())
        .click(getSelector(iconElement).filterHidden());
};

/**
 * @function confirm page is french with Top Level Domain Name(TLD) .fr
 */
export const frenchPage = async () => {
    await t
        .wait(3)
        .takeScreenshot()
        .expect(h3Tag.innerText).eql(frenchPageText)
        .expect(top_Level_Domain()).contains(topLevelDomain);
};

/**
 * @function selector-method thinking of putting this in a util folder/helper codes
 * @reuseable code/function
 */
export const getSelector = Selector((tagElement) => {
    return document.querySelector(tagElement);
});
