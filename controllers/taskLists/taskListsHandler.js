const router = require('express').Router()
const uuid = require('uuid')

//Handlers import
const getOneTaskList = require('./getOneTaskList')
const getAllTaskLists = require('./getAllTaskLists')
const createTaskList = require('./createTaskList')
const updateTaskList = require('./updateOneTaskList')
const deleteTaskList = require('./deleteOneTaskList')

//Midlewares import
const uuidValidate = require('../../middlewares/uuidValidateParam')

//Endpoints router
router.get('/', getAllTaskLists)
router.post('/', createTaskList)
router.get('/:id', uuidValidate, getOneTaskList)
router.put('/:id', uuidValidate, updateTaskList)
router.delete('/:id', uuidValidate, deleteTaskList)


module.exports = router