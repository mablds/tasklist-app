// Model import
const database = require('../../models')
const { logger } = require('../../helpers/logger')

//Update One Tag
module.exports = async (id, increase) => {
    // I created these two try catch blocks because the MODEL.update method doesnt 
    // verify if the id searched really exists. It just try to update. 
    // If the instance doesnt exists, it return success.
    try {
        const tag = await database.Tags.findAll({
            where: { id, active: true }
        })

        try {
            await database.Tags.update(
                { count: increase ? tag[0].dataValues.count + 1 : tag[0].dataValues.count - 1 },
                { where: { id } }
            );

            logger.debug({ status: 200, msg: `Tags count updated successfully!`, function: 'DAO - updateCountTag' })
            return { status: 200, msg: `Tag count updated successfully!` }
        } catch (error) {
            logger.error({ status: 500, msg: error.message, function: 'DAO - updateOneTag' })
            return { status: 500, msg: error.message }
        }

    } catch (error) {
        logger.error({ status: 404, msg: 'Unable to find the Tag informed', error: error.message , function: 'DAO - updateCountTag' })
        return { status: 404, msg: 'Unable to find the Tag informed', error: error.message }
    }
}