// Model import
const database = require('../../models')
const { logger } = require('../../helpers/logger')

//Update One Tag
module.exports = async (id, infosToUpdate) => {
    // I created these two try catch blocks because the MODEL.update method doesnt 
    // verify if the id searched really exists. It just try to update. 
    // If the instance doesnt exists, it return success.
    try {
        await database.Tags.findAll(
            { where: { id, active: true } }
        )

        try {
            await database.Tags.update(
                infosToUpdate,
                { where: { id } }
            );

            logger.debug({ status: 200, msg: `Tags updated successfully!`, function: 'DAO - updateOneTag' })
            return { status: 200, msg: `Tag updated successfully!` }
        } catch (error) {
            logger.error({ status: 500, msg: error, function: 'DAO - updateOneTag' })
            return { status: 500, msg: error }
        }

    } catch (error) {
        logger.error({ status: 404, msg: 'Unable to find the Tag informed', error , function: 'DAO - updateOneTag' })
        return { status: 404, msg: 'Unable to find the Tag informed', error }
    }
}