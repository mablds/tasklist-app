// Model import
const database = require('../../models')

//Delete One TaskList
module.exports = async (id) => {
    // I created these two try catch blocks because the MODEL.update method doesnt 
    // verify if the id searched really exists. It just try to update. 
    // If the instance doesnt exists, it return success.
    try {
        const taskListToRemove = await database.TaskLists.findAll({
            where: { id }
        })

        if(taskListToRemove.active) { //If taskList is active...
            try {
                const taskListRemoved = await database.TaskLists.update(
                    { active: false },
                    { where: { id } }
                );
        
                return { status: 200, msg: `TaskList removed successfully!` }
                
            } catch(error) {
                return { status: 500, msg: `Internal error` }
            }
        } else { //The TaskList is already inactive
            return { status: 400, msg: `TaskList already deleted!` }
        }

    } catch (error) {
        return { status: 404, msg: `TaskList not Found` }
    }
}