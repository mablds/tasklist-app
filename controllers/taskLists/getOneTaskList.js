const uuid = require('uuid')

//DAO import
const getOneTaskListDAO = require('../../DAOs/taskLists/getOneTaskList')

//Get One Task list
module.exports = async (req, res) => {
    if(req.params.id && uuid.validate(req.params.id)) {
        const findOneTaskList = await getOneTaskListDAO(req.params.id);
        res.status(findOneTaskList.status).json(findOneTaskList)
    } else {
        res.status(400).json({ status: 400, msg: `Invalid Param! Please check the documentation.` })
    }
}