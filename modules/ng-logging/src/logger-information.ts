import { LogLevel } from './log-level';
import { Logger } from './logger';

export type FilterFunc = (providerType: string, category: string, logLevel: LogLevel) => boolean;

/**
 * Logger information
 */
export interface LoggerInformation {
    logger: Logger;
    category: string;
    providerType: string;
    minLevel: LogLevel | null;
    filter: FilterFunc | null;
}
