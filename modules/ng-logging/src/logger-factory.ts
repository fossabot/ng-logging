import { Logger } from './logger';

/**
 * The logger factory
 */
export abstract class LoggerFactory {
    abstract createLogger(category: string): Logger;
}
