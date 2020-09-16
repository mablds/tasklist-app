const router = require('express').Router()

//Handlers import
const getAllTags = require('./getAllTags')
const updateOneTag = require('./updateTag')
const deleteTag = require('./deleteTag')

//Midlewares import
const uuidValidateMiddleware = require('../../middlewares/uuidValidateParam')

//Endpoints router
router.get('/', getAllTags)
router.put('/:id', uuidValidateMiddleware, updateOneTag)
router.delete('/:id', uuidValidateMiddleware, deleteTag)

module.exports = router