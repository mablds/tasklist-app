//DAO import
const deleteTaskDAO = require('../../DAOs/tasks/deleteTask')

//Tags relations
const getOneTag = require('../../DAOs/tags/getOneTag')
const deleteTag = require('../../DAOs/tags/deleteOneTag')
const updateCountTag = require('../../DAOs/tags/updateCountTag')

//TaskTag Relation
const getTaskTags = require('../../DAOs/taskTags/getOneTaskTag')
const deleteTaskTag = require('../../DAOs/taskTags/deleteTaskTag')

//Delete Task Endpoint
module.exports = async (req, res) => {
    if(req.params.id){
        const taskDeleted = await deleteTaskDAO(req.params.id)
        
        const taskTagSelect = await getTaskTags(req.params.id)
        
        taskTagSelect.taskTag.forEach(async el => {
            await deleteTaskTag(el.dataValues.id)
            
            const selectTag = await getOneTag.byId(el.dataValues.tag_id)
            
            if(selectTag.tag){
                selectTag.tag.forEach(async el2 => {
                    //I disliked the complexity of this algorithm, but i really didnt have time to improve it. Sorry! :(
                    el2.dataValues.count <= 1 ? await deleteTag(el2.dataValues.task_id) : await updateCountTag(el2.dataValues.id, false) //increase count = false
                })
            }
        })

        res.status(taskDeleted.status).json(taskDeleted)
    } else {
        //Invalid body. Insuficient infos to store.
        res.status(400).json({ status: 400, msg: `Invalid body! Please check the documentation.` })
    }
}