const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const { morganToWinstonStream } = require('../helpers/logger')

module.exports.setUpServer = () => {
    const app = express()

    //Body Parser - JSON
    app.use(express.json())
    //Enabling Cors
    app.use(cors())
    //Morgan log middleware setup to Winston's log Stream
    app.use(morgan("combined", { stream: morganToWinstonStream }))
    //Routing to Controller Index
    app.use(require('../controllers'))

    return app
}