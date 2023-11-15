//@ts-check

/**
 * @import dependencies && \
 * @ESM syntax
 * @variables
 */
import { ClientFunction, Selector, t } from "testcafe";

const resourcePath = '/view-booking';
const pageInnerHtmlText = 'My Booking';
const innerHTMLTag = 'h3';
const emailTextBoxSelector = Selector('#Email'); //[id="Email"]
const passwordTextBoxSelector = Selector('#BookingReference'); //[data-ms-editor="true"]
const submitButton = Selector('#manage-booking-button'); //[data-qa="manage-booking-button"]
const baseURL = 'https://account.directferries.com/?culture=en-GB'
const userName = 'qatesting@directferries.com'
const password = 'DFP164826683'
const pathName = ClientFunction(() => window.location.pathname.toString());
const bookingNavigationSelector = Selector('[data-qa="outbound-view-booking"]');
const bookingDetailsSelector = Selector('[class="detail"]');
const Lead_Passenger = 'TestOne TestRD';
const Child_Passenger = 'TestTwo TestRD';
const Make_Model = 'Abarth 500 (Car)';

/**
 * @function load-URL-Page 
 */
export const loadLoginPage = async () => {
    await t
        .maximizeWindow()
        .navigateTo(baseURL)
        .takeScreenshot();
};

/**
 * @function login-confirm-Account-Page
 */
export const signIntoAccount = async () => {
    await t
        .wait(3)
        .typeText(emailTextBoxSelector, userName)
        .typeText(passwordTextBoxSelector, password)
        .click(submitButton)
        .expect(pathName()).contains(resourcePath)
        .expect(Selector(innerHTMLTag).innerText).contains(pageInnerHtmlText)
        .takeScreenshot();
};

/**
 * @function Outbound-&&-Inbound-Passengers
 */
export const confirmBookings = async () => {

    //[class="df-ticket-specifics-total"]
    const spanTagClass = Selector('.df-ticket-specifics-total');
    const spanTag = await spanTagClass.count;
    for (let i = 0; i < spanTag; i++) {
        if (await spanTagClass.nth(i).innerText == '2') {
            await t
                .expect(spanTagClass.innerText).eql('2')
        }
    }
    //[class="df-ticket-specifics-details"]
    const liTagClass = Selector('.df-ticket-specifics-details');
    const liSpanCount = await liTagClass.count;
    for (let i = 0; i < liSpanCount; i++) {
        if (await liTagClass.nth(i).innerText == '1') {
            await t
                .expect(liTagClass.innerText).eql('1')
        }
    }
    //[data-qa="passenger-count"]
    const returnLiTagAttr = Selector('[data-qa="passenger-count"]');
    const returnLiTagCount = await returnLiTagAttr.count;
    for (let i = 0; i < returnLiTagCount; i++) {
        if (await returnLiTagAttr.nth(i).innerText == '1') {
            await t
                .expect(returnLiTagAttr.innerText).eql('1')
        }
    }
    //[data-qa="vehicle-count"]
    const returnVehicle = Selector('[data-qa="vehicle-count"]');
    const returnVehicleCount = await returnVehicle.count;
    for (let i = 0; i < returnVehicleCount; i++) {
        if (await returnVehicle.nth(i).innerText == '1') {
            await t
                .expect(returnVehicle.innerText).eql('1')
        }
    }
}

/**
 * @function View-Booking-Navigation
 */
export const viewBookingNavigation = async () => {
    //[class="detail"] const bookingDetailsSelector=Selector('[class="detail"]')
    await t
        .wait(1)
        .takeElementScreenshot(bookingNavigationSelector)
        .click(bookingNavigationSelector);
}

/**
 * @function View-Booking-Details
 */
export const checkBookingDetails = async () => {

    await t
        .wait(1)
        .expect(Selector(bookingDetailsSelector).nth(0).innerText).eql(Lead_Passenger)
        .expect(Selector(bookingDetailsSelector).nth(1).innerText).eql(Child_Passenger)
        .expect(Selector(bookingDetailsSelector).nth(2).innerText).eql(Make_Model)
        .takeScreenshot();
}