// Model import
const database = require('../../models')
const { logger } = require('../../helpers/logger')

//Delete One TaskList
module.exports = async (id) => {
    // I created these two try catch blocks because the MODEL.update method doesnt 
    // verify if the id searched really exists. It just try to update. 
    // If the instance doesnt exists, it return success.
    try {
        const taskListToRemove = await database.TaskLists.findAll({
            where: { id, active: true }
        })

        if(taskListToRemove.active) { //If taskList is active...
            try {
                await database.TaskLists.update(
                    { active: false },
                    { where: { id } }
                );
                logger.debug({ status: 200, msg: `TaskList removed successfully!`, function: 'DAO - deleteOneTaskList' })
                return { status: 200, msg: `TaskList removed successfully!` }
                
            } catch(error) {
                logger.error({ status: 500, msg: error, function: 'DAO - deleteOneTaskList' })
                return { status: 500, msg: error }
            }
        } else { //The TaskList is already inactive
            logger.debug({ status: 400, msg: `TaskList already deleted!`, function: 'DAO - deleteOneTaskList' })
            return { status: 400, msg: `TaskList already deleted!` }
        }

    } catch (error) {
        return { status: 404, msg: `TaskList not Found` }
    }
}