import { InjectionToken } from '@angular/core';

import { LogLevel, LogLevelString } from './log-level';
import { LoggerFilterRule } from './logger-filter-rule';

/**
 * Logger config
 */
export interface LoggerConfig {
    minLevel?: LogLevel | LogLevelString | null;
    [key: string]: LogLevel | LogLevelString | object | null | undefined;
}

/**
 * Logger filter options
 */
export interface LoggerFilterOptions {
    minLevel?: LogLevel | null;
    rules: LoggerFilterRule[];
}

export const LOGGER_CONFIG = new InjectionToken<LoggerConfig>('LOGGER_CONFIG');
export const LOGGER_FILTER_OPTIONS = new InjectionToken<LoggerFilterOptions>('LOGGER_FILTER_OPTIONS');
