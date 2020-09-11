// Model import
const database = require('../../models')

//FindAll TaskLists
module.exports = async () => {
    try {
        const taskLists = await database.TaskLists.findAll({
            where: {
                active: true
            }
        });
        return { status: 200, taskLists: taskLists }
    } catch (error) {
        return { status: 500, msg: error }
    }
}