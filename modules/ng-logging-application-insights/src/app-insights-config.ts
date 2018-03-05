import { Injectable } from '@angular/core';

@Injectable()
export class AppInsightsConfig implements Microsoft.ApplicationInsights.IConfig {
    instrumentationKey?: string;
    endpointUrl?: string;
    emitLineDelimitedJson?: boolean;
    accountId?: string;
    sessionRenewalMs?: number;
    sessionExpirationMs?: number;
    maxBatchSizeInBytes?: number;
    maxBatchInterval?: number;
    enableDebug?: boolean;
    disableExceptionTracking?: boolean;
    disableTelemetry?: boolean;
    verboseLogging?: boolean;
    diagnosticLogInterval?: number;
    samplingPercentage?: number;
    autoTrackPageVisitTime?: boolean;
    disableAjaxTracking?: boolean;
    overridePageViewDuration?: boolean;
    maxAjaxCallsPerView?: number;
    disableDataLossAnalysis?: boolean;
    disableCorrelationHeaders?: boolean;
    disableFlushOnBeforeUnload?: boolean;
    enableSessionStorageBuffer?: boolean;
    isCookieUseDisabled?: boolean;
    cookieDomain?: string;
    isRetryDisabled?: boolean;
    isPerfAnalyzerEnabled?: boolean;
    url?: string;
    isStorageUseDisabled?: boolean;
    isBeaconApiDisabled?: boolean;
}
