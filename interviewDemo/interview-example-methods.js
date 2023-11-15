//@ts-check

/**
 * @CommonJS Syntax
 * /
/** const { Selector, t } = require('testcafe');
    module.exports = {
     onHomepage: async function () {
        await t
        .navigateTo('https://www.directferries.com')
     }
  } */


  /**
   * @ESM Syntax && \
   * @import dependencies
   */
import { Selector, t } from 'testcafe';

/**
 * @function to visit the homepage
 
export const homePage = async () => {
    await t
        .navigateTo('https://www.directferries.com')
        .maximizeWindow();  
}; */
