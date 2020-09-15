// Model import
const database = require('../../models')
const { logger } = require('../../helpers/logger')

const createTag = require('../tags/createOneTag')
const updateCountTag = require('../tags/updateCountTag')

//Create Task
module.exports = async (task) => {
    try {
        //TODO - Verify obj to create, implement uuid FK reference, Tag creation/count update
        const task = await database.Task.create(task);
        logger.debug({ status: 201, msg: 'Task created!', task, function: 'DAO - createTask'})
        return { status: 201, msg: 'Task created!', task }
    } catch (error) {
        logger.error({ status: 500, error, task , function: 'DAO - createTask'})
        return { status: 500, msg: error, task }
    }
}