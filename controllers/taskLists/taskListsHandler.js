const router = require('express').Router()

//Handlers import
const getOneTaskList = require('./getOneTaskList')
const getAllTaskLists = require('./getAllTaskLists')
const createTaskList = require('./createTaskList')
const updateTaskList = require('./updateOneTaskList')
const deleteTaskList = require('./deleteOneTaskList')

//Midlewares import
const uuidValidateMiddleware = require('../../middlewares/uuidValidateParam')

//Endpoints router
router.get('/', getAllTaskLists)
router.post('/', createTaskList)
router.get('/:id', uuidValidateMiddleware, getOneTaskList)
router.put('/:id', uuidValidateMiddleware, updateTaskList)
router.delete('/:id', uuidValidateMiddleware, deleteTaskList)

module.exports = router