const router = require('express').Router()

//Handlers import
const getAllTasksFromTaskList = require('./getTasksFromTaskList')
const createTask = require('./createTask')
const deleteTask = require('./deleteTask')
const updateTask = require('./updateTask')

//Midlewares import
const uuidValidateMiddleware = require('../../middlewares/uuidValidateParam')

//Endpoints router
router.get('/', getAllTasksFromTaskList)
router.post('/', createTask)
router.delete('/:id', uuidValidateMiddleware, deleteTask)
//router.put('/:id', uuidValidateMiddleware, updateTask)


module.exports = router