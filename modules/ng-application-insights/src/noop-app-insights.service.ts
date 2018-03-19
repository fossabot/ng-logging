import { Injectable } from '@angular/core';

import { AppInsightsConfig } from './app-insights-config';
import { AppInsightsService } from './app-insights.service';

@Injectable()
export class NoopAppInsightsService implements AppInsightsService {
    config: AppInsightsConfig | null | undefined;

    trackEvent(): void {
        // do nothing
    }

    startTrackEvent(): void {
        // do nothing
    }

    stopTrackEvent(): void {
        // do nothing
    }

    trackPageView(): void {
        // do nothing
    }

    startTrackPage(): void {
        // do nothing
    }

    stopTrackPage(): void {
        // do nothing
    }

    trackMetric(): void {
        // do nothing
    }

    trackException(): void {
        // do nothing
    }

    trackTrace(): void {
        // do nothing
    }

    trackDependency(): void {
        // do nothing
    }

    flush(): void {
        // do nothing
    }

    setAuthenticatedUserContext(): void {
        // do nothing
    }

    clearAuthenticatedUserContext(): void {
        // do nothing
    }

    _onerror(): void {
        // do nothing
    }

    init(): void {
        // do nothing
    }
}
