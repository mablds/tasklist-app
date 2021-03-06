//DAO import
const updateOneTagDAO = require('../../DAOs/tags/updateOneTag')

//Update Tag Endpoint
module.exports = async (req, res) => {
//Update One Task list Endpoint
    if(req.body.name) {
        const updateTag = await updateOneTagDAO(req.params.id, req.body.name)
        res.status(updateTag.status).json({ 
            status: updateTag.status, 
            msg: updateTag.status == 200 ? 'Tag updated successfully!' : updateTag.msg
        })
    } else {
        res.status(400).json({ status: 400, msg: `Invalid Body! Please check the documentation.` })
    }
}