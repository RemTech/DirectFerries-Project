//@ts-check

/**
 * @import dependencies && \
 * @ESM syntax
 */
import { ClientFunction, Selector, t } from "testcafe";

const specialOffers = 'Special offers';
const resource = '/offers.htm';
const italianPageText = 'Compagnie Navali';
const top_Level_Domain= ClientFunction(() => window.location.href.toString());
const pathName=ClientFunction(() => window.location.pathname.toString());
const attrKey='href';
const attrValue='/offers.htm';
const topLevelDomain='.it';
const baseURL='https://www.directferries.com';
const element=Selector('div.user-actions');
const anchorSelectorTag=Selector('a');
const h3SelectorTag=Selector('h3')

/**
 * @function homepage
 */
export const homePage = async () => {
    await t
        .maximizeWindow()
        .navigateTo(baseURL)
        .wait(2)
        .hover(anchorSelectorTag.withExactText(specialOffers))
};

/**
 * @function click special-offers
 */
export const clickSpecialOffers = async () => {
    await t
        .wait(3)
        .click(anchorSelectorTag.withAttribute(attrKey,attrValue))
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
 * @issue dimension for the property is 0 X 0 
 */
export const countryIcon = async () => {
    //div.df__navbar-actions > section > div > div > div > a 
        await
         t
         .wait(2)
         .takeElementScreenshot(element.find('a').withAttribute('aria-label','Language Dropdown').filterHidden())
         .click(Selector(element,{visibilityCheck:true}).find('a').withAttribute('aria-label','Language Dropdown').filterHidden());
};

/**
 * @function confirm page is italian with Top Level Domain Name(TLD) .it
 */
export const italianPage = async () => {
   
    await t
        .wait(3)
        .takeScreenshot()
        .expect(h3SelectorTag.innerText).eql(italianPageText)
        .expect(top_Level_Domain()).contains(topLevelDomain);
};