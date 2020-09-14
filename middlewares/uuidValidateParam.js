const uuid = require('uuid')
const { logger } = require('../helpers/logger')

module.exports = (req, res, next) => {
    let uuidValid = uuid.validate(req.params.id)
    
    if(uuidValid) {
        logger.debug({ uuid: req.params.id, uuidValid })
        next()
    } else {
        logger.warn({ uuid: req.params.id, msg: `Invalid UUID. Attention to multiple bad requests.`, status: 400 })
        res.status(400).json({
            status: 400,
            msg: `Invalid Parameter. Please, check the Documentation!`
        })
    }
}