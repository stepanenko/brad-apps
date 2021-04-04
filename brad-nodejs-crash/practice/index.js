
const Logger = require('./logger');

const logger = new Logger();

logger.on('message', (data) => console.log(data));

logger.log('Hello there!');
