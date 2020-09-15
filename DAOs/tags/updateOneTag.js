// Model import
const database = require('../../models')
const { Op } = require("sequelize");
const { logger } = require('../../helpers/logger')

//Update One Tag
module.exports = async (id, newTagName) => {
    // I created these two try catch blocks because the MODEL.update method doesnt 
    // verify if the id searched really exists. It just try to update. 
    // If the instance doesnt exists, it return success.
    try {
        await database.Tags.findAll({
            where: {
                [Op.and]: [
                  { id },
                  { active: true }
                ]
            }
        })

        try {
            await database.Tags.update(
                { name: newTagName },
                { where: { id } }
            );

            logger.debug({ status: 200, msg: `Tags updated successfully!`, function: 'DAO - updateOneTag' })
            return { status: 200, msg: `Tag updated successfully!` }
        } catch (error) {
            logger.error({ status: 500, msg: error.message, function: 'DAO - updateOneTag' })
            return { status: 500, msg: error.message }
        }

    } catch (error) {
        logger.error({ status: 404, msg: 'Unable to find the Tag informed', error: error.message , function: 'DAO - updateOneTag' })
        return { status: 404, msg: 'Unable to find the Tag informed', error: error.message }
    }
}