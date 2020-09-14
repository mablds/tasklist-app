const router = require('express').Router()

//Handlers import
const getAllTags = require('./getAllTags')
const getOneTag = require('./getOneTag')

//Midlewares import
const uuidValidateMiddleware = require('../../middlewares/uuidValidateParam')

//Endpoints router
router.get('/', getAllTags)
router.get('/:id', uuidValidateMiddleware, getOneTag)
// router.get('/:id', uuidValidate, getOneTaskList)
// router.put('/:id', uuidValidate, updateTaskList)
// router.delete('/:id', uuidValidate, deleteTaskList)


module.exports = router