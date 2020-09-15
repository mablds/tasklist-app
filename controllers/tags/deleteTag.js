//DAO import
const deleteTagDAO = require('../../DAOs/tags/deleteOneTag')

//Delete Tag Endpoint
module.exports = async (req, res) => {
    //Delete One Tag Endpoint
    const deleteTag = await deleteTagDAO(req.params.id)
    res.status(deleteTag.status).json({ 
        status: deleteTag.status, 
        msg: deleteTag.status == 200 ? 'Tag deleted successfully!' : deleteTag.msg
    })
    res.status(400).json({ status: 400, msg: `Invalid Body! Please check the documentation.` })
}