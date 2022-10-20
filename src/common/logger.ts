import * as winston from 'winston';

const logger = (() => {
    const logger = winston.createLogger({
        handleExceptions: true,
        handleRejections: true,
        format: winston.format.combine(
            winston.format.prettyPrint(),
            winston.format.splat(),
            //
        ),
    });

    if (process.env.NODE_ENV !== 'production') {
        logger.add(new winston.transports.Console({
            format: winston.format.combine(
                winston.format.errors({ stack: false }),
                winston.format.colorize(),
                winston.format.simple(),
            )
        }));
    } else {
        logger.add(new winston.transports.Console({
            format: winston.format.combine(
                winston.format.errors({ stack: false }),
                winston.format.colorize(),
                winston.format.simple(),
            )
        }));
    }

    logger.info('env.NODE_ENV: %s', process.env.NODE_ENV);

    return logger;
})();

export default logger;