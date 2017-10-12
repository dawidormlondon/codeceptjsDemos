/*
* This is an attempt to use webdriverIO API which are more forgiving when an element is not present at all
* We need a way to conditionally test if text is present on page, the codeceptJS default library does not appear to
* be able to do that.
* I was trying to follow the syntax from here http://webdriver.io/api/utility/scroll.html and here http://blog.kevinlamping.com/selecting-elements-in-webdriverio/
* */

'use strict';

class WebDriverIOHelper extends Helper {

    async tryLocate() {
        const element = await this.helpers['WebDriverIO'].browser.element("=Most Popular TV");
        element.scroll();
    }

}

module.exports = WebDriverIOHelper;
