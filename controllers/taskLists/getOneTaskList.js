//DAO import
const getOneTaskListDAO = require('../../DAOs/taskLists/getOneTaskList')

//Get One Task list
module.exports = async (req, res) => {
    const findOneTaskList = await getOneTaskListDAO(req.params.id);
    res.status(findOneTaskList.status).json(findOneTaskList)
}