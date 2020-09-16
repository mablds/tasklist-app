//DAO import
const updateTaskDAO = require('../../DAOs/tasks/updateOneTask')

//Tags relations
const createTag = require('../../DAOs/tags/createOneTag')
const deleteTag = require('../../DAOs/tags/deleteOneTag')

//TaskTag Relation
const getTaskTags = require('../../DAOs/taskTags/getOneTaskTag')
const createTaskTag = require('../../DAOs/taskTags/createTaskTag')

//Delete Task Endpoint
module.exports = async (req, res) => {
    if(req.body.tags.length > 0) {//If has tags on the body obj to update
        const taskId = req.params.id;

        //Delete the previous tags
        const taskTagsAssociated = await getTaskTags.byTaskId(taskId)
        taskTagsAssociated.taskTag.forEach(async element => {
            await deleteTag(element.dataValues.tag_id)
        });

        //Crete the new tags
        req.body.tags.forEach(async el => {
            const tagCreated = await createTag(el)
            await createTaskTag(taskId, tagCreated.tag.dataValues.id)
        });
    }
    
    if(
        req.body.notes || 
        req.body.priority || 
        req.body.remind_me_on || 
        req.body.activity_type || 
        req.body.status || 
        req.body.task_list 
    ){

        const taskUpdated = await updateTaskDAO(req.body)
        res.status(taskUpdated.status).json(taskUpdated)

    } else {
        //Invalid body. Insuficient infos to store.
        res.status(400).json({ status: 400, msg: `Invalid body! Please check the documentation.` })
    }
}