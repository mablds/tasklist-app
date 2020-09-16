// Model import
const database = require('../../models')
const { logger } = require('../../helpers/logger')

//Create Tag
module.exports = async (name) => {
    try {
        const tag = await database.Tags.create({ name: name, active: true, count: 1 });

        logger.debug({ status: 201, msg: 'Tag created!', tag, function: 'DAO - createOneTag'})

        return { status: 201, msg: 'Tag created!', tag }
    } catch (error) {
        console.log(error)
        logger.error({ status: 500, msg: error.message, tag: name , function: 'DAO - createOneTag'})
        return { status: 500, msg: error.message, tag: name }
    }
}