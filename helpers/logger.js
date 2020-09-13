const winston = require('winston');

module.exports.logger =  winston.createLogger({
  transports: [
    new winston.transports.File({
      level: 'info',
      filename: './logs/tivit-task-list.log',
      json: true,
      format: winston.format.combine(winston.format.timestamp(), winston.format.json())
    }),

    new winston.transports.File({
      level: 'error',
      filename: './logs/tivit-task-list.log',
      json: true,
      format: winston.format.combine(winston.format.timestamp(), winston.format.json())
    }),

    new winston.transports.File({
      level: 'warn',
      filename: './logs/tivit-task-list.log',
      json: true,
      format: winston.format.combine(winston.format.timestamp(), winston.format.json())
    }),

    new winston.transports.File({
      level: 'debug',
      filename: './logs/tivit-task-list.log',
      json: true,
      format: winston.format.combine(winston.format.timestamp(), winston.format.json())
    })
  ]
});

//setting up the obj with Stream write function to log morgan output in winston logs
module.exports.morganToWinstonStream = {
    write: text => this.logger.info(text)
}