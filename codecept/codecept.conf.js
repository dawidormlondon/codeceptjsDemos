exports.config = {
    helpers: {
        WebDriverIO: {
            host: 'http://localhost:3000',
            url: process.env.CODECEPT_URL || 'http://localhost:3000'
        }
    },
};
