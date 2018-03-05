import { Injectable, Optional } from '@angular/core';

import { AppInsights } from 'applicationinsights-js';

import { AppInsightsConfig } from './app-insights-config';
import { AppInsightsService } from './app-insights.service';

import IAppInsights = Microsoft.ApplicationInsights.IAppInsights;

@Injectable()
export class BrowserAppInsightsService implements IAppInsights, AppInsightsService {
    context: Microsoft.ApplicationInsights.ITelemetryContext;
    queue: (() => void)[];
    private _config: AppInsightsConfig;

    get config(): AppInsightsConfig {
        return this._config;
    }
    set config(value: AppInsightsConfig) {
        AppInsights.config = {...AppInsights.config, ...value};
        this._config = AppInsights.config;
    }

    constructor(@Optional() config: AppInsightsConfig) {
        if (config) {
            this.config = config;
        }
    }

    trackEvent(eventName: string,
        eventProperties?: { [name: string]: string },
        metricProperty?: { [name: string]: number }): void {
        try {
            AppInsights.trackEvent(eventName, eventProperties, metricProperty);
        } catch (ex) {
            console.warn('Angular application insights Error [trackEvent]: ', ex);
        }
    }

    startTrackEvent(name: string): void {
        try {
            AppInsights.startTrackEvent(name);
        } catch (ex) {
            console.warn('Angular application insights Error [startTrackEvent]: ', ex);
        }
    }

    stopTrackEvent(name: string, properties?: { [p: string]: string }, measurements?: { [p: string]: number }): void {
        try {
            AppInsights.stopTrackEvent(name, properties, measurements);
        } catch (ex) {
            console.warn('Angular application insights Error [stopTrackEvent]: ', ex);
        }
    }

    trackPageView(name?: string,
        url?: string,
        properties?: { [name: string]: string },
        measurements?: { [name: string]: number },
        duration?: number): void {
        try {
            AppInsights.trackPageView(name, url, properties, measurements, duration);
        } catch (ex) {
            console.warn('Angular application insights Error [trackPageView]: ', ex);
        }
    }

    startTrackPage(name?: string): void {
        try {
            AppInsights.startTrackPage(name);
        } catch (ex) {
            console.warn('Angular application insights Error [startTrackPage]: ', ex);
        }
    }

    stopTrackPage(name?: string,
        url?: string,
        properties?: { [name: string]: string },
        measurements?: { [name: string]: number }): void {
        try {
            AppInsights.stopTrackPage(name, url, properties, measurements);
        } catch (ex) {
            console.warn('Angular application insights Error [stopTrackPage]: ', ex);
        }
    }

    trackMetric(name: string,
        average: number,
        sampleCount?: number,
        min?: number,
        max?: number,
        properties?: { [name: string]: string }): void {
        try {
            AppInsights.trackMetric(name, average, sampleCount, min, max, properties);
        } catch (ex) {
            console.warn('Angular application insights Error [trackMetric]: ', ex);
        }
    }

    trackException(exception: Error,
        handledAt?: string,
        properties?: { [name: string]: string },
        measurements?: { [name: string]: number },
        severityLevel?: number): void {
        try {
            AppInsights.trackException(exception, handledAt, properties, measurements, severityLevel);
        } catch (ex) {
            console.warn('Angular application insights Error [trackException]: ', ex);
        }
    }

    trackTrace(message: string, properties?: { [name: string]: string }, severityLevel?: number): void {
        try {
            AppInsights.trackTrace(message, properties, severityLevel);
        } catch (ex) {
            console.warn('Angular application insights Error [trackTrace]: ', ex);
        }
    }

    trackDependency(id: string,
        method: string,
        absoluteUrl: string,
        pathName: string,
        totalTime: number,
        success: boolean,
        resultCode: number): void {
        try {
            AppInsights.trackDependency(id, method, absoluteUrl, pathName, totalTime, success, resultCode);
        } catch (ex) {
            console.warn('Angular application insights Error [trackDependency]: ', ex);
        }
    }

    flush(): void {
        try {
            AppInsights.flush();
        } catch (ex) {
            console.warn('Angular application insights Error [flush]: ', ex);
        }
    }

    setAuthenticatedUserContext(authenticatedUserId: string, accountId?: string): void {
        try {
            AppInsights.setAuthenticatedUserContext(authenticatedUserId, accountId);
        } catch (ex) {
            console.warn('Angular application insights Error [setAuthenticatedUserContext]: ', ex);
        }
    }

    clearAuthenticatedUserContext(): void {
        try {
            AppInsights.clearAuthenticatedUserContext();
        } catch (ex) {
            console.warn('Angular application insights Error [clearAuthenticatedUserContext]: ', ex);
        }
    }

    _onerror(message: string): void {
        console.warn('Angular application insights Error [_onerror]: ', message);
    }

    init(): void {
        if (!AppInsights.downloadAndSetup) {
            if (AppInsights.config && AppInsights.config.instrumentationKey) {
                // tslint:disable-next-line:no-any
                const startTrackPageUrl = (<any>AppInsights)._startTrackPageUrl;
                if (typeof startTrackPageUrl === 'string') {
                    try {
                        AppInsights.stopTrackPage(startTrackPageUrl);
                        // tslint:disable-next-line:no-any
                        delete (<any>AppInsights)._startTrackPageUrl;
                    } catch (err) {
                        console.warn('Angular application insights Error [stopTrackPage]: ', err);
                    }
                }
            }

            return;
        }

        if (!this.config) {
            console.warn('The application insights config has not been initialized.');

            return;
        }

        if (!this.config.instrumentationKey) {
            console.warn('An instrumentationKey value is required to initialize application insights.');

            return;
        }

        try {
            AppInsights.downloadAndSetup(this.config);
        } catch (ex) {
            console.warn('Angular application insights Error [downloadAndSetup]: ', ex);
        }
    }
}
