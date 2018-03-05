import { InjectionToken } from '@angular/core';

import { LogLevel, LogLevelString } from './log-level';
import { LoggerFilterRule } from './logger-filter-rule';

/**
 * Logger filter options
 */
export interface LoggerFilterOptions {
    minLevel?: LogLevel | null;
    rules: LoggerFilterRule[];
}

/**
 * Logger config
 */
export interface LoggerConfig {
    minLevel?: LogLevel | LogLevelString | null;
    [key: string]: LogLevel | LogLevelString | object | null | undefined;
}

export const LOGGER_CONFIG = new InjectionToken<LoggerConfig>('app.logger-config');
export const LOGGER_FILTER_OPTIONS = new InjectionToken<LoggerFilterOptions>('app.logger-filter-options');
