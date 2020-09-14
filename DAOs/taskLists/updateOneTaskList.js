// Model import
const database = require('../../models')
const { logger } = require('../../helpers/logger')

//Update One TaskList
module.exports = async (id, infosToUpdate) => {
    // I created these two try catch blocks because the MODEL.update method doesnt 
    // verify if the id searched really exists. It just try to update. 
    // If the instance doesnt exists, it return success.
    try {
        const taskListToRemove = await database.TaskLists.findAll(
            { where: { id } }
        )

        try {
            const taskListUpdated = await database.TaskLists.update(
                infosToUpdate,
                { where: { id } }
            );

            logger.debug({ status: 200, msg: `TaskList updated successfully!`, function: 'DAO - deleteOneTaskList' })
            return { status: 200, msg: `TaskList updated successfully!` }
        } catch (error) {
            return { status: 500, msg: error.message }
        }

    } catch (error) {
        return { status: 404, msg: error.message }
    }
}