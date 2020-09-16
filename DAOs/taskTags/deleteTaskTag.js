// Model import
const database = require('../../models')
const { logger } = require('../../helpers/logger')

//Delete One TaskTag
module.exports = async (id) => {
    // I created these two try catch blocks because the MODEL.update method doesnt 
    // verify if the id searched really exists. It just try to update. 
    // If the instance doesnt exists, it return success.
    try {
        const taskToRemove = await database.TaskTags.findOne({
            where: { id }
        })

        if(taskToRemove.active) { //If task is active...
            try {
                await database.TaskTags.update(
                    { active: false },
                    { where: { id } }
                );
                logger.debug({ status: 200, msg: `TaskTag removed successfully!`, function: 'DAO - deleteTaskTag' })
                return { status: 200, msg: `TaskTag removed successfully!` }
                
            } catch(error) {
                logger.error({ status: 500, msg: error, function: 'DAO - deleteTaskTag' })
                return { status: 500, msg: error }
            }
        } else { //The Task is already inactive
            logger.debug({ status: 400, msg: `TaskTag already deleted!`, function: 'DAO - deleteTaskTag' })
            return { status: 400, msg: `TaskTag already deleted!` }
        }

    } catch (error) { //Task active and with same id not found
        logger.info({ status: 404, msg: `TaskTag not Found` })
        return { status: 404, msg: `TaskTag not Found` }
    }
}