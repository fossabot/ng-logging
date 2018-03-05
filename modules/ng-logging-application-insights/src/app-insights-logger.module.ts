import { NgModule } from '@angular/core';

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
export class AppInsightsLoggerModule { }
