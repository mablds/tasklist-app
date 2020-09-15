// Model import
const database = require('../../models')
const { logger } = require('../../helpers/logger')

const updateCountTag = require('../tags/updateCountTag')

//Update One Task
module.exports = async (id, infosToUpdate) => {
    // I created these two try catch blocks because the MODEL.update method doesnt 
    // verify if the id searched really exists. It just try to update. 
    // If the instance doesnt exists, it return success.
    try {
        await database.Tasks.findAll({
            where: { id }
        })

        try {
            await database.Tasks.update(
                { infosToUpdate },
                { where: { id } }
            );
            
            logger.debug({ status: 200, msg: `Task updated successfully!`, function: 'DAO - UpdateOneTask' })
            return { status: 200, msg: `Task updated successfully!` }
            
        } catch(error) {
            logger.error({ status: 500, msg: error, function: 'DAO - UpdateOneTask' })
            return { status: 500, msg: error }
        }

    } catch (error) { //Task active and with same id not found
        logger.info({ status: 404, msg: `Task not Found` })
        return { status: 404, msg: `Task not Found` }
    }
}