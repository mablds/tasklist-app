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
router.put('/:id', uuidValidateMiddleware, updateTask)
router.delete('/:id', uuidValidateMiddleware, deleteTask)


module.exports = router