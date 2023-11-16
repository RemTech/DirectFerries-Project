//@ts-check

/**
 * @import dependencies && \
 * @ESM syntax
 */
import { ClientFunction, Selector, t } from "testcafe";
const specialOffers = 'Special offers';
const resource = '/offers.htm';
const attrKey='href';
const attrValue='/offers.htm';
const frenchPageText = 'Compagnies de ferry';
const pathName=ClientFunction(() => window.location.pathname.toString());
const top_Level_Domain= ClientFunction(() => window.location.href.toString());
const topLevelDomain='.fr';
const baseURL='https://www.directferries.com';
const iconSelector=Selector('[aria-controls="langDropdown"]');
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
        .click(anchorTag.withAttribute(attrKey,attrValue))
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

      /*  await
         t
         .wait(2)
         .takeElementScreenshot(element.find('a').withAttribute('aria-label','Language Dropdown').filterHidden())
         .click(Selector(element,{visibilityCheck:true}).find('a').withAttribute('aria-label','Language Dropdown').filterHidden());
      */
       await t
       .wait(1)
       .click(iconSelector.nth(0).filterHidden());
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
