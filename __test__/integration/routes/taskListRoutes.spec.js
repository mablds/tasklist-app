const request = require("supertest");
const config = require("../../../config/apiConfiguration")
const app = config.setUpServer()

let uuidToTest;

describe("Testing TaskList endpoints", () => {
    
    describe("GET - taskList/", () => {
        it("should return all taskLists and status code 200", () => {
            return request(app)
                .get('/taskList')
                .then((response) => {
                    expect(response.statusCode).toBe(200);
                })
        }) 
    })

    describe("POST - taskList/", () => {
        it("should create a taskList and return status code 201", () => {
            return request(app)
                .post('/taskList')
                .send({name: 'Supertest integration test'})
                .then((response) => {
                    uuidToTest = (response.body.taskList.id)
                    expect(response.statusCode).toBe(201);
                })
        })
    })

    describe("GET - taskList/:id", () => {
        it("should return one taskList and status code 200", () => {
            return request(app)
                .get(`/taskList/${uuidToTest}`)
                .then((response) => {
                expect(response.status).toBe(200);
            })
        }) 
    })

    describe("PUT - taskList/:id", () => {
        it("should update one taskList and return 200", () => {
            return request(app)
                .put(`/taskList/${uuidToTest}`)
                .send({name: 'Supertest update test'})
                .then((response) => {
                    expect(response.statusCode).toBe(200);
                })
        }) 
    })

    describe("DELETE - taskList/:id", () => {
        it("should update one taskList and return 200", () => {
            return request(app)
                .delete(`/taskList/${uuidToTest}`)
                .then((response) => {
                    expect(response.statusCode).toBe(200);
                })
        }) 
    })
})