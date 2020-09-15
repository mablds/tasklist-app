const database = require('../../models')
const { logger } = require('../../helpers/logger')

//FindAll Tasks
module.exports = async () => {
    try {
        const tasks = await database.Tasks.findAll({
            where: { active: true }
        });
        
        logger.debug({ status: 200, tasks, function: 'DAO - GetAllTasks'})
        return { status: 200, tasks }
        
    } catch (error) {
        logger.error({ status: 500, msg: error, function: 'DAO - GetAllTasks'})
        return { status: 500, msg: error }
    }
}