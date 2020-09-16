const database = require('../../models')
const { logger } = require('../../helpers/logger')

//FindAll Tasks
module.exports = async (id) => {
    try {
        const task = await database.Tasks.findAll({
            where: { task_list: id, active: true }
        })
        
        logger.debug({ status: 200, task, function: 'DAO - GetAllTasks'})
        return { status: 200, task }
        
    } catch (error) {
        logger.error({ status: 500, msg: error, function: 'DAO - GetAllTasks'})
        return { status: 500, msg: error }
    }
}