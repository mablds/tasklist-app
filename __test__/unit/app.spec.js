const config = require('../../config/apiConfiguration')

describe("Setting Up Server", () => {
    test('It should return successfully a function when we setup the express server.', () => {
        const app = config.setUpServer();
        expect(typeof(app)).toBe('function');
    })
});