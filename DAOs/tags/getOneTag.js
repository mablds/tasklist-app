const database = require('../../models')
const { Op } = require("sequelize");
const { logger } = require('../../helpers/logger')

//FindAll TaskLists
module.exports.byName = async (name) => {
    try {
        const tags = await database.Tags.findAll({
            where: {    
                [Op.and]: [
                    { name },
                    { active: true }
                ]
            }
        });

        if(tags.length > 0) {
            logger.debug({ status: 200, tag: tags, function: 'DAO - GetOneTag'})
            return { status: 200, tag: tags }
        } else {
            logger.error({ status: 404, msg: 'Tag not Found', function: 'DAO - GetOneTag'})
            return { status: 404, msg: 'Tag not Found' }
        }

    } catch (error) {
        logger.error({ status: 500, msg: error.message, function: 'DAO - GetOneTag'})
        return { status: 500, msg: error.message }
    }
}

module.exports.byId = async (id) => {
    try {
        const tags = await database.Tags.findAll({
            where: {    
                [Op.and]: [
                    { id },
                    { active: true }
                ]
            }
        });

        if(tags.length > 0) {
            logger.debug({ status: 200, tag: tags, function: 'DAO - GetOneTag'})
            return { status: 200, tag: tags }
        } else {
            logger.error({ status: 404, msg: 'Tag not Found', function: 'DAO - GetOneTag'})
            return { status: 404, msg: 'Tag not Found' }
        }

    } catch (error) {
        logger.error({ status: 500, msg: error.message, function: 'DAO - GetOneTag'})
        return { status: 500, msg: error.message }
    }
}