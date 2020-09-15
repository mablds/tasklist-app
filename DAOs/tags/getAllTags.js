const database = require('../../models')
const { logger } = require('../../helpers/logger')

//FindAll Tags
module.exports = async () => {
    try {
        const tags = await database.Tags.findAll({
            where: {
                active: true
            }
        });
        
        logger.debug({ status: 200, tags, function: 'DAO - GetAllTags'})
        return { status: 200, tags }
        
    } catch (error) {
        logger.error({ status: 500, msg: error, function: 'DAO - GetAllTags'})
        return { status: 500, msg: error }
    }
}