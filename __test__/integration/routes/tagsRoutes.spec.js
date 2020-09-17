const request = require("supertest");
const config = require("../../../config/apiConfiguration")
const app = config.setUpServer()

let uuidToTest = "55b84e17-064d-4965-9213-ed36f3d7f5e2"

describe("Testing TaskList endpoints", () => {
    jest.setTimeout(10000);
    jest.retryTimes(2);
    
    describe("GET - tags/", () => {
        it("should return all tags and status code 200", async () => {
            return await request(app)
                .get('/tags')
                .then((response) => {
                    expect(response.statusCode).toBe(200);
                })
        }) 
    })

    describe("PUT - tags/:id", () => {
        it("should update one tag and return 200", async () => {
            return await request(app)
                .put(`/tags/${uuidToTest}`)
                .send({name: 'Supertest'})
                .then((response) => {
                    expect(response.statusCode).toBe(200);
                })
        }) 
    })

    describe("DELETE - tags/:id", () => {
        it("shouldnt delete one tag and return 400 because of an invalid UUID", async () => {
            return request(app)
                .delete(`/tags/shoudnt-work-uuid-invalid`)
                .expect('Content-Type', /json/)
                .then((response) => {
                    expect(response.statusCode).toBe(400);
                })
        }) 
    })
})