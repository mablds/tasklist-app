const database = require('../../models')
const { Op } = require('sequelize')
const { logger } = require('../../helpers/logger')

//FindAll TaskTags
module.exports = async (id) => {
    try {
        const taskTag = await database.TaskTags.findAll({
            where: { 
                [Op.and]: [
                    { task_id: id },
                    { active: true }
                ]
            }
        });
        
        logger.debug({ status: 200, taskTag, function: 'DAO - getOneTaskTag'})
        return { status: 200, taskTag }
        
    } catch (error) {
        logger.error({ status: 500, msg: error, function: 'DAO - getOneTaskTag'})
        return { status: 500, msg: error }
    }
}