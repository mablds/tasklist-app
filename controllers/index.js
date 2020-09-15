// Router import
const router = require('express').Router()

// Handlers
const taskListHandler = require('./taskLists/taskListsHandler')
const tagsHandler = require('./tags/tagsHandler')
const taskHandler = require('./tasks/tasksHandler')

// Routes in use
router.use('/taskList', taskListHandler)
router.use('/tags', tagsHandler)
router.use('/tasks', taskHandler)

// Home Endpoint
router.get('/', async (req, res) => {
    res.status(200).json({ 
        msg: `Welcome to TIVIT Task List App - Created by Marcelo Arthur Braga (mablds)!`,
        doc: `https://github.com/mablds/tasklist-app`
    })
})

module.exports = router