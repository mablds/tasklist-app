const request = require("supertest");
const config = require("../../../config/apiConfiguration")
const app = config.setUpServer()

describe("Testing TaskList endpoints", () => {
    describe("GET - taskList/:id", () => {
        it("should return 400 status because the invalid UUID informed", () => {
            return request(app)
                .get(`/taskList/itshould-fail-because-itsnotauuid`)
                .then((response) => {
                expect(response.status).toBe(400);
            })
        }) 
    })
})