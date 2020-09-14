//DAO import
const getAllTagsDAO = require('../../DAOs/tags/getAllTags')

//Get All Tags Endpoint
module.exports = async (req, res) => {
    const findAllTags = await getAllTagsDAO()
    res.status(findAllTags.status).json(findAllTags)
}