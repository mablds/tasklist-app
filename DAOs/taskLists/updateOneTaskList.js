// Model import
const database = require('../../models')
const { logger } = require('../../helpers/logger')

//Update One TaskList
module.exports = async (id, nameToUpdate) => {
    // I created these two try catch blocks because the MODEL.update method doesnt 
    // verify if the id searched really exists. It just try to update. 
    // If the instance doesnt exists, it return success.
    try {
        await database.TaskLists.findAll({ 
            where: { id, active: true }
        })

        try { //TaskList Update
            await database.TaskLists.update(
                { name: nameToUpdate },
                { where: { id } }
            );

            logger.debug({ status: 200, msg: `TaskList updated successfully!`, function: 'DAO - updateOneTaskList' })
            return { status: 200, msg: `TaskList updated successfully!` }

        } catch (error) {
            //Unable to Update TaskList
            logger.error({ status: 500, msg: error, function: 'DAO - updateOneTaskList' })
            return { status: 500, msg: error }
            
        }

    } catch (error) {
        //Unable to find a TaskList active and with equal id
        logger.error({ status: 404, msg: 'Unable to find the TaskList informed', error , function: 'DAO - updateOneTaskList' })
        return { status: 404, msg: 'Unable to find the TaskList informed', error }
    }
}