require('dotenv').config()
const express = require('express')
const cors = require('cors')

module.exports.setUpServer = () => {
    const app = express()

    app.use(express.json())
    app.use(cors())
    //app.use(require('../controllers'))

    app.get('/', (req, res) => {
        res.send('teste');
    })

    return app
}