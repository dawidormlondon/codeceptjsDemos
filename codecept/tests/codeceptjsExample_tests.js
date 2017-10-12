Feature('HomePage Tests');

Scenario('Check home page', function (I) {
    I.amOnPage('http://codecept.io/');
    I.tryLocate();
    I.wait(10);
});
