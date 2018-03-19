import { NgModule, Optional, SkipSelf } from '@angular/core';

import { ConfigService } from '@bizappframework/ng-config';
import { DefaultLoggerFactory, LoggerFactory } from '@bizappframework/ng-logging';

@NgModule()
export class LoggingConfigurationModule {
    constructor(configService: ConfigService,
        loggerFactory: LoggerFactory,
        @Optional() @SkipSelf() parentModule: LoggingConfigurationModule) {
        if (parentModule) {
            throw new Error('LoggingConfigurationModule has already been loaded, import in root module only.');
        }

        configService.loadEvent
            .subscribe((evt) => {
                if (evt.loaded) {
                    if (evt.data && evt.data.logging && loggerFactory instanceof DefaultLoggerFactory) {
                        loggerFactory.setConfig(evt.data.logging);
                    }
                }
            });
    }
}
