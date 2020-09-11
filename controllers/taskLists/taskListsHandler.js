const router = require('express').Router()
const uuid = require('uuid')

//Handlers import
const getOneTaskList = require('./getOneTaskList')
const getAllTaskLists = require('./getAllTaskLists')
const createTaskList = require('./createTaskList')

//Endpoints router
router.get('/', getAllTaskLists)
router.post('/', createTaskList)
router.get('/:id', getOneTaskList)

//Update One TaskList
router.put('/:id', async (req, res) => {

})

//Delete One TaskList
router.delete('/:id', async (req, res) => {

})


module.exports = router