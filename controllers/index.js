// Express imports
const express = require('express')
const router = express.Router()

// Handlers
const taskListHandler = require('./taskLists/taskListsHandler')

// Routes in use
router.use('/taskList', taskListHandler)
// router.use('/tasks')
// router.use('/tags')

// Home Endpoint
router.get('/', async (req, res) => {
    res.status(200).json({ msg: `Bem vindos(as) à API de Tasklist da TIVIT! Criada por Marcelo Arthur Braga!`})
})

module.exports = router