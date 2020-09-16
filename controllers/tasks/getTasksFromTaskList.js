const uuid = require('uuid')

//DAO import
const getOneTaskDAO = require('../../DAOs/tasks/getOneTask')

//Get One Task
module.exports = async (req, res) => {
    if(req.query.id && uuid.validate(req.query.id)) {
        const findOneTask = await getOneTaskDAO(req.query.id);
        res.status(findOneTask.status).json(findOneTask)
    } else {
        res.status(400).json({ status: 400, msg: `Invalid Param! Please check the documentation.` })
    }
}