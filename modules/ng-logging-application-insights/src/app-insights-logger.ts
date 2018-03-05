import { Logger, LogLevel } from '@bizappframework/ng-logging';

import { AppInsightsService, SeverityLevel } from './app-insights.service';

/**
 * Application Insights logger
 */
export class AppInsightsLogger implements Logger {
    private readonly _filter: (category: string, logLevel: LogLevel) => boolean;

    constructor(private readonly _appInsightsService: AppInsightsService,
        readonly name: string,
        filter?: (category: string, logLevel: LogLevel) => boolean) {
        if (filter) {
            this._filter = filter;
        } else {
            this._filter = () => true;
        }
    }

    // tslint:disable-next-line:no-any
    trace(message?: string, ...optionalParams: any[]): void {
        if (!this.isEnabled(LogLevel.Trace)) {
            return;
        }

        this._appInsightsService.trackTrace(message || '',
            this.mapToProperties(...optionalParams),
            SeverityLevel.Verbose);
    }

    // tslint:disable-next-line:no-any
    debug(message: string, ...optionalParams: any[]): void {
        if (!this.isEnabled(LogLevel.Debug)) {
            return;
        }

        this._appInsightsService.trackTrace(message || '',
            this.mapToProperties(...optionalParams),
            SeverityLevel.Verbose);
    }

    // tslint:disable-next-line:no-any
    info(message: string, ...optionalParams: any[]): void {
        if (!this.isEnabled(LogLevel.Info)) {
            return;
        }

        this._appInsightsService.trackTrace(message || '',
            this.mapToProperties(...optionalParams),
            SeverityLevel.Information);
    }

    // tslint:disable-next-line:no-any
    warn(message: string, ...optionalParams: any[]): void {
        if (!this.isEnabled(LogLevel.Warn)) {
            return;
        }

        this._appInsightsService.trackTrace(message || '',
            this.mapToProperties(...optionalParams),
            SeverityLevel.Warning);
    }

    // tslint:disable-next-line:no-any
    error(message: string | Error, ...optionalParams: any[]): void {
        if (!this.isEnabled(LogLevel.Error)) {
            return;
        }

        if (typeof message === 'string') {
            this._appInsightsService.trackTrace(message,
                this.mapToProperties(...optionalParams),
                SeverityLevel.Error);
        } else {
            this._appInsightsService.trackException(message,
                undefined,
                this.mapToProperties(...optionalParams),
                undefined,
                SeverityLevel.Error);
        }
    }

    isEnabled(logLevel: LogLevel): boolean {
        if (logLevel === LogLevel.None || !this._appInsightsService) {
            return false;
        }

        return this._filter(this.name, logLevel);
    }

    // tslint:disable-next-line:no-any
    private mapToProperties(...optionalParams: any[]): { [name: string]: string } | undefined {
        let properties: { [name: string]: string } | undefined;
        if (optionalParams && optionalParams.length && typeof optionalParams[0] === 'object') {
            properties = <{ [name: string]: string }>optionalParams[0];
        }

        return properties || undefined;
    }
}
