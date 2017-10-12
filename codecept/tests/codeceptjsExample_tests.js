Feature('HomePage Tests');

Scenario('Check home page', function (I) {
    I.amOnPage('http://codecept.io/');
    I.wait(10);
});
