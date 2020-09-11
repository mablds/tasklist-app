const router = require('express').Router()

//DAOs import
const createTaskList = require('../../DAOs/taskLists/createOneTaskList')
const getAllTaskLists = require('../../DAOs/taskLists/getAllTaskLists')

//Get All TaskLists
router.get('/', async (req, res) => {
    const findAllTaskLists = await getAllTaskLists()
    res.status(findAllTaskLists.status).json(findAllTaskLists)
})

//Get One TaskList
router.get('/:id', (req, res) => {
    
})


//Create TaskList
router.post('/', async (req, res) => {
    if(req.body.name) {
        const createList = await createTaskList(req.body);
        res.status(createList.status).json(createList);
    } else {
        res.status(400).json({ status: 400, msg: `Invalid body! Please check the documentation.` })
    }
})

module.exports = router