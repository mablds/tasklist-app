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
        await database.TaskTags.findAll({
            where: { id }
        })

        try {
            await database.TaskTags.update(
                { infosToUpdate },
                { where: { id } }
            );
            logger.debug({ status: 200, msg: `TaskTag updated successfully!`, function: 'DAO - UpdateOneTaskTag' })
            return { status: 200, msg: `TaskTag updated successfully!` }
            
        } catch(error) {
            logger.error({ status: 500, msg: error, function: 'DAO - UpdateOneTaskTag' })
            return { status: 500, msg: error }
        }

    } catch (error) { //TaskTag active and with same id not found
        logger.info({ status: 404, msg: `TaskTag not Found` })
        return { status: 404, msg: `TaskTag not Found` }
    }
}