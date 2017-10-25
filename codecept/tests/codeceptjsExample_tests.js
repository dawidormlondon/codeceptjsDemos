Feature('HomePage Tests');

Scenario('Check home page', function * (I) {
    I.amOnPage('http://codecept.io/');
    if(yield I.tryLocate() === "CodeceptJS") {
        console.log("text found!")
    } else {
        console.log("text not found!")
    }
    I.wait(10);
});
