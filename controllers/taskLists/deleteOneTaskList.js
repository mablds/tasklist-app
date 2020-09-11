//DAO import
const deleteOneTaskListDAO = require('../../DAOs/taskLists/deleteOneTaskList')

//Delete One Task list Endpoint
module.exports = async (req, res) => {
    const deleteTaskList = await deleteOneTaskListDAO(req.params.id)
    res.status(deleteTaskList.status).json(deleteTaskList)
}