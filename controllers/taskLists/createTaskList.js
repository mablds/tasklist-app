//DAO import
const createTaskListDAO = require('../../DAOs/taskLists/createOneTaskList')

//Create Task list Endpoint
module.exports = async (req, res) => {
    if(req.body.name) {
        const createList = await createTaskListDAO(req.body);
        res.status(createList.status).json(createList);
    } else {
        res.status(400).json({ status: 400, msg: `Invalid body! Please check the documentation.` })
    }
}