// Model import
const database = require('../../models')
const { logger } = require('../../helpers/logger')

//Create Task
module.exports = async (taskObj) => {
    try {
        const task = await database.Tasks.create({
            title: taskObj.title,
            status: taskObj.status,
            task_list: taskObj.task_list,
            notes: taskObj.notes ? taskObj.notes : null,
            priority: taskObj.priority ? taskObj.priority : null,
            remind_me_on: taskObj.remind_me_on ? taskObj.remind_me_on : null,
            activity_type: taskObj.activity_type ? taskObj.activity_type : null,
            active: true
        });
        logger.debug({ status: 201, msg: 'Task created!', task, function: 'DAO - createTask'})
        return { status: 201, msg: 'Task created!', task }
    } catch (error) {
        logger.error({ status: 500, error: error.message, taskObj , function: 'DAO - createTask'})
        return { status: 500, msg: error.message }
    }
}