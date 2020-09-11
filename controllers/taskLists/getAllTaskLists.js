//DAO import
const getAllTaskListsDAO = require('../../DAOs/taskLists/getAllTaskLists')

//Get All Task list Endpoint
module.exports = async (req, res) => {
    const findAllTaskLists = await getAllTaskListsDAO()
    res.status(findAllTaskLists.status).json(findAllTaskLists)
}