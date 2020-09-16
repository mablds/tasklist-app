// Model import
const database = require('../../models')
const { logger } = require('../../helpers/logger')

//Find One TaskList
module.exports = async (id) => {
    try {
        const taskList = await database.TaskLists.findOne({
            where: { id, active: true }
        });

        logger.debug({ status: 200, taskList, function: 'DAO - getOneTaskList' })
        return { status: 200, taskList }
    } catch (error) {
        logger.error({ status: 500, msg: error.message, function: 'DAO - getOneTaskList' })
        return { status: 500, msg: error.message }
    }
}