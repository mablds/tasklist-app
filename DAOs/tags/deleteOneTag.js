// Model import
const database = require('../../models')
const { logger } = require('../../helpers/logger')

//Delete One Tag
module.exports = async (id) => {
    // I created these two try catch blocks because the MODEL.update method doesnt 
    // verify if the id searched really exists. It just try to update. 
    // If the instance doesnt exists, it return success.
    try {
        const tagToRemove = await database.Tags.findAll({
            where: { id }
        })

        if(tagToRemove[0].dataValues.active) { //If tag is active...
            try {
                //Tags table
                await database.Tags.update(
                    { active: false },
                    { where: { id } }
                )

                //TaskTags table
                await database.TaskTags.update(
                    { active: false },
                    { where: { tag_id: id } }
                )

                logger.debug({ status: 200, msg: `Tag removed successfully!`, function: 'DAO - deleteOneTag' })
                return { status: 200, msg: `Tag removed successfully!` }
                
            } catch(error) {
                logger.error({ status: 500, msg: error.message, function: 'DAO - deleteOneTag' })
                return { status: 500, msg: error.message }
            }
        } else { //The tag is already inactive
            logger.debug({ status: 400, msg: `Tag already deleted!`, function: 'DAO - deleteOneTag' })
            return { status: 400, msg: `Tag already deleted!` }
        }

    } catch (error) {
        return { status: 404, msg: `Tag not Found` }
    }
}