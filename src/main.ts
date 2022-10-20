import ArgsParser from 'args-parser';
import logger from './common/logger';

import { inspect } from 'util';

const args = ArgsParser(process.argv);

logger.level = args.loglevel || 'info';

logger.info('Args:', process.argv);