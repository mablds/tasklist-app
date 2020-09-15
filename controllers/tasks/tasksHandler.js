const router = require('express').Router()

//Handlers import
const createTask = require('./createTask')

//Midlewares import
const uuidValidateMiddleware = require('../../middlewares/uuidValidateParam')

//Endpoints router
// router.get('/', getAllTags)
router.post('/', createTask)
// router.put('/:id', uuidValidateMiddleware, updateOneTag)
// router.patch('/:id', uuidValidateMiddleware, editCountTag)
// router.delete('/:id', uuidValidateMiddleware, deleteTag)


module.exports = router