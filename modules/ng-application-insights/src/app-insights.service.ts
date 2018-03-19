import { Injectable } from '@angular/core';

import { AppInsightsConfig } from './app-insights-config';

export enum SeverityLevel {
    Verbose = 0,
    Information = 1,
    Warning = 2,
    Error = 3,
    Critical = 4,
}

@Injectable()
export abstract class AppInsightsService {
    abstract config: AppInsightsConfig | null | undefined;

    // Log a user action or other occurrence.
    abstract trackEvent(eventName: string,
        eventProperties?: { [name: string]: string },
        metricProperty?: { [name: string]: number }): void;

    abstract startTrackEvent(name: string): void;

    abstract stopTrackEvent(name: string, properties?: { [p: string]: string }, measurements?: { [p: string]: number }): void;

    // Logs that a page or similar container was displayed to the user.
    abstract trackPageView(name?: string,
        url?: string,
        properties?: { [name: string]: string },
        measurements?: { [name: string]: number },
        duration?: number): void;

    // Starts the timer for tracking a page view. Use this instead of trackPageView if you want to control when the
    // page view timer starts and stops, but don't want to calculate the duration yourself. This method doesn't send any
    // telemetry. Call stopTrackPage to log the end of the page view and send the event.
    abstract startTrackPage(name?: string): void;

    // Stops the timer that was started by calling startTrackPage and sends the page view telemetry with the
    // specified properties and measurements. The duration of the page view will be the time between
    // calling startTrackPage and stopTrackPage.
    abstract stopTrackPage(name?: string,
        url?: string, properties?: { [name: string]: string },
        measurements?: { [name: string]: number }): void;

    // Log a positive numeric value that is not associated with a specific event.
    // Typically used to send regular reports of performance indicators.
    abstract trackMetric(name: string,
        average: number,
        sampleCount?: number,
        min?: number,
        max?: number,
        properties?: { [name: string]: string }): void;

    // Log an exception you have caught. (Exceptions caught by the browser are also logged.)
    abstract trackException(exception: Error, handledAt?: string, properties?: { [name: string]: string },
        measurements?: { [name: string]: number }, severityLevel?: SeverityLevel): void;

    // Log a diagnostic event such as entering or leaving a method.
    abstract trackTrace(message: string, properties?: { [name: string]: string }, severityLevel?: SeverityLevel): void;

    // Log a dependency call (for instance: ajax)
    abstract trackDependency(id: string,
        method: string,
        absoluteUrl: string,
        pathName: string,
        totalTime: number,
        success: boolean,
        resultCode: number): void;

    // Immediately send all queued telemetry. Synchronous.
    // * You don't usually have to use this, as it happens automatically on window closing.
    abstract flush(): void;

    // Set the authenticated user id and the account id in this session. Use this when you have identified a specific
    // signed-in user. Parameters must not contain spaces or ,;=|
    abstract setAuthenticatedUserContext(authenticatedUserId: string, accountId?: string): void;

    // Clears the authenticated user id and the account id from the user context, and clears the associated cookie.
    abstract clearAuthenticatedUserContext(): void;

    abstract _onerror(message: string): void;

    abstract init(): void;
}
