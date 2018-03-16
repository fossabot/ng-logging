import { NgModule, Optional, SkipSelf } from '@angular/core';

import { LOGGER_PROVIDER } from '@bizappframework/ng-logging';

import { AppInsightsLoggerProvider } from './app-insights-logger-provider';

/**
 * Application Insights logger module
 */
@NgModule({
    providers: [
        {
            provide: LOGGER_PROVIDER,
            useClass: AppInsightsLoggerProvider,
            multi: true
        }
    ]
})
export class AppInsightsLoggerModule {
    constructor(@Optional() @SkipSelf() parentModule: AppInsightsLoggerModule) {
        if (parentModule) {
            throw new Error('AppInsightsLoggerModule has already been loaded, import in root module only.');
        }
    }
}
