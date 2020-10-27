const logger = require('./logger')

logger.log('this is an informational message')

const customLogger = new logger.constructor('CUSTOM')
customLogger.log('this is an informational message')