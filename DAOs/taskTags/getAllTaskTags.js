const database = require('../../models')
const { logger } = require('../../helpers/logger')

//FindAll TaskTags
module.exports = async () => {
    try {
        const taskTags = await database.TaskTags.findAll({
            where: { active: true }
        });
        
        logger.debug({ status: 200, taskTags, function: 'DAO - GetAllTaskTags'})
        return { status: 200, taskTags }
        
    } catch (error) {
        logger.error({ status: 500, msg: error, function: 'DAO - GetAllTaskTags'})
        return { status: 500, msg: error }
    }
}