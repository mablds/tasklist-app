//DAO import
const updateOneTaskListDAO = require('../../DAOs/taskLists/updateOneTaskList')

//Update One Task list Endpoint
module.exports = async (req, res) => {
    if(req.body.name || req.body.active) {
        const updateTaskList = await updateOneTaskListDAO(req.params.id, req.body.name)
        res.status(updateTaskList.status).json({ 
            status: updateTaskList.status, 
            msg: updateTaskList.status == 200 ? 'TaskList update successfully!' : updateTaskList.msg
        })
    } else {
        res.status(400).json({ status: 400, msg: `Invalid Body! Please check the documentation.` })
    }
}