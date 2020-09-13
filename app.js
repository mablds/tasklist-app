require('dotenv').config()

const config = require('./config/apiConfiguration.js');
const { logger } = require('./helpers/logger')

const port = process.env.PORT || 3000
const app = config.setUpServer()

app.listen(port, () => {
    logger.info(`TIVIT Task List server up.`)
    logger.debug(`TIVIT Task List server up. Running on Port: ${port}!`)
})