/*
* This is an attempt to use webdriverIO API which are more forgiving when an element is not present at all
* We need a way to conditionally test if text is present on page, the codeceptJS default library does not appear to
* be able to do that.
* I was trying to follow the syntax from here http://webdriver.io/api/utility/scroll.html and here http://blog.kevinlamping.com/selecting-elements-in-webdriverio/
* */

let Helper = codecept_helper;

class WebDriverIOHelper extends Helper {
    /**
     * Try's to locate an element using a selector, without throwing an error when no element does not exist.
     *
     * @param {string|object} selector. Defaults to 'h1'.
     * @returns {null|string} null is return when the element was not found, otherwise 'a WebElement JSON object for the located element'.
     */
    tryLocate(selector = 'h1') {
        const browser = this.helpers['WebDriverIO'].browser;

        return browser.element(selector).getText()
            .then((res) => {
                // console.log('Yay, found the element', res);
                return res;
            })
            .catch((err) => {
                // Catch the error because webdriver.io throws if the element could not be found
                // Source: https://github.com/webdriverio/webdriverio/blob/master/lib/protocol/element.js
                // console.log('Element does not exist');
                return null;
            });
    }
}

module.exports = WebDriverIOHelper;
