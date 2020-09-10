const config = require('../config/config')

describe("Setting Up Server", () => {
    test('It should return successfully a function when we setup the express server.', () => {
        const app = config.setUpServer();
        expect(typeof(app) == 'function').toBe(true);
    })
});