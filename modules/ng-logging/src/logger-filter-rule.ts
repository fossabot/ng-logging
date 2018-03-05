import { LogLevel } from './log-level';

/**
 * Defines a rule used to filter log messages
 */
export interface LoggerFilterRule {
    providerName: string | null;
    categoryName: string | null;
    logLevel: LogLevel;
}
