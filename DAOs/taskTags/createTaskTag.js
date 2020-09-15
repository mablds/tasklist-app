// Model import
const database = require('../../models')
const { logger } = require('../../helpers/logger')

//Create TaskTag
module.exports = async (task) => {
    try {
        const taskTag = await database.TaskTags.create(task);
        logger.debug({ status: 201, msg: 'TaskTag created!', taskTag, function: 'DAO - createTaskTag'})
        return { status: 201, msg: 'TaskTag created!', taskTag }
    } catch (error) {
        logger.error({ status: 500, error, task , function: 'DAO - createTaskTag'})
        return { status: 500, msg: error, task }
    }
}