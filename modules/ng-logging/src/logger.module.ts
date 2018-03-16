import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

import { DefaultLoggerFactory } from './default-logger-factory';
import { LoggerFactory } from './logger-factory';
import { LOGGER_CONFIG, LOGGER_FILTER_OPTIONS, LoggerConfig, LoggerFilterOptions } from './logger-options';
import { parseConfig } from './parse-config';

export function loggerConfigFactory(config: LoggerFilterOptions | LoggerConfig | null): LoggerFilterOptions | null {
    if (!config) {
        return null;
    }

    if (typeof config !== 'object') {
        throw new Error('Invalid logging configuration.');
    }

    return parseConfig(config);
}

/**
 * Logger module
 */
@NgModule()
export class LoggerModule {
    constructor(@Optional() @SkipSelf() parentModule: LoggerModule) {
        if (parentModule) {
            throw new Error('LoggerModule has already been loaded, import in root module only.');
        }
    }

    static forRoot(config: LoggerFilterOptions | LoggerConfig | null = null):
        ModuleWithProviders {
        return {
            ngModule: LoggerModule,
            providers: [
                DefaultLoggerFactory,
                {
                    provide: LOGGER_CONFIG,
                    useValue: config
                },
                {
                    provide: LOGGER_FILTER_OPTIONS,
                    useFactory: (loggerConfigFactory),
                    deps: [LOGGER_CONFIG]
                },
                {
                    provide: LoggerFactory,
                    useClass: DefaultLoggerFactory
                }
            ]
        };
    }
}
