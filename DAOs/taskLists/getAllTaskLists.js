// Model import
const database = require('../../models')
const { logger } = require('../../helpers/logger')

//FindAll TaskLists
module.exports = async () => {
    try {
        const taskLists = await database.TaskLists.findAll({
            where: {
                active: true
            }
        });

        logger.debug({ status: 200, taskLists, function: 'DAO - getAllTaskLists' })
        return { status: 200, taskLists }
    } catch (error) {
        logger.error({ status: 500, msg: error, function: 'DAO - getAllTaskLists' })
        return { status: 500, msg: error }
    }
}