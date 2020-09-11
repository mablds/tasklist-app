const uuid = require('uuid')

module.exports = (req, res, next) => {
    let uuidValid = uuid.validate(req.params.id)
    
    if(uuidValid) { 
        next()
    } else {
        res.status(400).json({
            status: 400,
            msg: `Invalid Parameter. Please, check the Documentation!`
        })
    }
}