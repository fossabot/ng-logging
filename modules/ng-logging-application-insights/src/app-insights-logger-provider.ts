import { Injectable } from '@angular/core';

import { AppInsightsService } from '@bizappframework/ng-application-insights';
import { Logger, LoggerProvider } from '@bizappframework/ng-logging';

import { AppInsightsLogger } from './app-insights-logger';

/**
 * Application Insights logger provider
 */
@Injectable()
export class AppInsightsLoggerProvider implements LoggerProvider {
    get name(): string {
        return 'applicationInsights';
    }

    constructor(private readonly _appInsightsService: AppInsightsService) { }

    createLogger(category: string): Logger {
        return new AppInsightsLogger(this._appInsightsService, category, undefined);
    }
}
