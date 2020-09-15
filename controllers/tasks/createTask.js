const uuid = require('uuid')

//DAO import
const createTaskDAO = require('../../DAOs/tasks/createTask')
//GetTaskListDAO to verify the uuid sent in DB
const getTaskListDAO = require('../../DAOs/taskLists/getOneTaskList')
//Tags and TaskTags relations
const getOneTag = require('../../DAOs/tags/getOneTag')
const createTag = require('../../DAOs/tags/createOneTag')
const updateCountTag = require('../../DAOs/tags/updateCountTag')
//Create TaskTag function
const createTaskTag = require('../../DAOs/taskTags/createTaskTag')

//Create Task Endpoint
module.exports = async (req, res) => {
    if(
        req.body.title && 
        req.body.status && 
        req.body.tags && 
        typeof(req.body.tags) == 'object' &&
        req.body.task_list && 
        uuid.validate(req.body.task_list)
    ){
        const taskListVerified = await getTaskListDAO(req.body.task_list)
        
        if(taskListVerified.status == 200) {
            const createTask = await createTaskDAO(req.body)
            
            req.body.tags.forEach(async el => {
                const tag = await getOneTag(el)
                if(tag.status !== 200) {
                    const tagCreated = await createTag(el)
                    const taskTagCreated = await createTaskTag(createTask.task.dataValues.id, tagCreated.tag.dataValues.id)
                } else {
                    //If Tag exists = ++
                    updateCountTag(tag.tag[0].dataValues.id)
                }
            })

            res.status(createTask.status).json(createTask)
        } else {
            //In case taskList is not Found
            res.status(404).json({ status: 404, msg: `TaskList not Found. Please, insert a valid TaskList uuid` })    
        }
    } else {
        //Invalid body. Insuficient infos to store.
        res.status(400).json({ status: 400, msg: `Invalid body! Please check the documentation.` })
    }
}