// Model import
const database = require('../../models')
const { logger } = require('../../helpers/logger')

//Create TaskList
module.exports = async ({ name }) => {
    try {
        const taskList = await database.TaskLists.create({ name, active: true });
        logger.debug({ status: 201, msg: 'TaskList created!', taskList, function: 'DAO - createOneTaskList'})
        return { status: 201, msg: 'TaskList created!', taskList }
    } catch (error) {
        logger.error({ status: 500, error, taskList: name , function: 'DAO - createOneTaskList'})
        return { status: 500, msg: error, taskList: name }
    }
}