// Model import
const database = require('../../models')

//Find One TaskList
module.exports = async (id) => {
    try {
        const taskList = await database.TaskLists.findAll({
            where: { id }
        });
        return { status: 200, taskList: taskList }
    } catch (error) {
        return { status: 500, msg: error }
    }
}