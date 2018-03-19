import { Component, OnInit } from '@angular/core';

import { AppInsightsService } from '@bizappframework/ng-application-insights';
import { Logger, LoggerFactory } from '@bizappframework/ng-logging';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    private readonly _logger: Logger;

    constructor(loggerFactory: LoggerFactory, private readonly _appInsightsService: AppInsightsService) {
        this._logger = loggerFactory.createLogger('app');
    }

    ngOnInit(): void {
        this._appInsightsService.trackEvent('ngOnInit');

        this._logger.trace('Testing trace');
        this._logger.debug('Testing debug');
        this._logger.info('Testing info');
        this._logger.warn('Testing warn');
        this._logger.error('Testing error');
    }
}
