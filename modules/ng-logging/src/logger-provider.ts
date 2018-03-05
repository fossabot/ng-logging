import { InjectionToken } from '@angular/core';

import { Logger } from './logger';

/**
 * Logger provider interface
 */
export interface LoggerProvider {
    readonly name: string;
    createLogger(category: string): Logger;
}

export const LOGGER_PROVIDER = new InjectionToken<LoggerProvider>('app.logger-provider');
