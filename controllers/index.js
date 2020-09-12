// Express imports
const express = require('express')
const router = express.Router()

// Handlers
const taskListHandler = require('./taskLists/taskListsHandler')
const tagsHandler = require('./tags/tagsHandler')

// Routes in use
router.use('/taskList', taskListHandler)
router.use('/tags', tagsHandler)
// router.use('/tasks')

// Home Endpoint
router.get('/', async (req, res) => {
    res.status(200).json({ msg: `Welcome to TIVIT Task List App - Created by Marcelo Arthur Braga (mablds)!`})
})

module.exports = router