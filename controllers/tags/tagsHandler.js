const router = require('express').Router()

//Handlers import
const getAllTags = require('./getAllTags')
const updateOneTag = require('./updateTag')
const editCountTag = require('./editCountTag')
const deleteTag = require('./deleteTag')

//Midlewares import
const uuidValidateMiddleware = require('../../middlewares/uuidValidateParam')

//Endpoints router
router.get('/', getAllTags)
router.put('/:id', uuidValidateMiddleware, updateOneTag)
router.patch('/:id', uuidValidateMiddleware, editCountTag)
router.delete('/:id', uuidValidateMiddleware, deleteTag)


module.exports = router