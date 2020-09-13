require('dotenv').config()
const config = require('./config/apiConfiguration.js');
const { logger } = require('./helpers/logger')

const PORT = process.env.PORT || 3000
const app = config.setUpServer()

app.listen(PORT, () => {
    logger.debug(`TIVIT Task List server up. Running on Port: ${PORT}!`)
    console.log(`TIVIT Task List server up. Running on Port: ${PORT}!`)
})