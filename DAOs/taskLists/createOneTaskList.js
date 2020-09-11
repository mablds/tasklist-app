// Model import
const database = require('../../models')

module.exports = async ({ name }) => {
    try {
        const taskList = await database.TaskLists.create({ name, active: true });
        return { status: 201, msg: 'TaskList created!', taskList: taskList }
    } catch (error) {
        return { status: 500, msg: error, taskList: name }
    }
}