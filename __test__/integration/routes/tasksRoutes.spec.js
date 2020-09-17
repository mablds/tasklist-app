const request = require("supertest");
const config = require("../../../config/apiConfiguration")
const app = config.setUpServer()

let uuidTask;
let uuidToTestTaskList;

let taskToUpdate = {

}


describe("Testing Tasks endpoints", () => {
    jest.retryTimes(2);

    describe("POST - tasks/", () => {
        it("should create a task and return status code 201", async() => {
            jest.setTimeout(10000);
            return request(app)
                .post('/tasks')
                .send({ 
                    title: "Testando Update",
                    status: "open",
                    tags: ["React", "Nodejs"],
                    task_list: "e1682853-bda7-4415-adc5-eb35ae6f8989",
                    notes: "teste",
                    activity_type: "indoors",
                    priority: 3,
                    remind_me_on: "2020-11-07 05:03:22"
                 })
                .then((response) => {
                    uuidTask = response.body.task.id
                    uuidToTestTaskList = response.body.task.task_list
                    expect(response.statusCode).toBe(201);
                })
        })
    })

    describe("GET - tasks/", () => {
        it("should return all tasks from a taskList and status code 200", async() => {
            jest.setTimeout(10000);
            return request(app)
                .get(`/tasks/?id=${uuidToTestTaskList}`)
                .then((response) => {
                    expect(response.statusCode).toBe(200);
                })
        }) 
    })

    describe("PUT - tasks/:id", () => {
        it("should update one task and return 200", async() => {
            jest.setTimeout(10000);
            return request(app)
                .put(`/tasks/${uuidTask}`)
                .send({
                    title: "Testando Update 2",
                    status: "open",
                    task_list: "e1682853-bda7-4415-adc5-eb35ae6f8989",
                    notes: "aaaaa",
                    activity_type: "indoors",
                    priority: 3,
                    remind_me_on: "2020-11-07 05:03:22"
                })
                .then((response) => {
                    expect(response.statusCode).toBe(200);
                })
        }) 
    })

    describe("DELETE - tasks/:id", () => {
        it("should delete one taskList and return 200", async() => {
            jest.setTimeout(10000);
            return request(app)
                .delete(`/tasks/${uuidTask}`)
                .then((response) => {
                    expect(response.statusCode).toBe(200);
                })
        }) 
    })
})