import * as winston from 'winston'

const logger = winston.createLogger({
    level: 'silly',
    handleExceptions: true,
    handleRejections: true,
    format: winston.format.combine(
        //winston.format.errors({ stack: true }),
        winston.format.simple(),
    )
});

logger.add(new winston.transports.Console({
}));

logger.log('error', 'Important error: ', new Error('Error passed as meta'));

logger.error(new Error('Error as info'));