import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

import { AppInsightsConfig } from './app-insights-config';
import { AppInsightsService } from './app-insights.service';
import { BrowserAppInsightsService } from './browser-app-insights.service';

@NgModule({
    providers: [
        {
            provide: AppInsightsService,
            useClass: BrowserAppInsightsService
        }
    ]
})
export class BrowserAppInsightsModule {
    constructor(
        @Optional() @SkipSelf() parentModule: BrowserAppInsightsModule,
        appInsightsService: AppInsightsService
    ) {
        if (parentModule) {
            throw new Error(
                'BrowserAppInsightsModule is already loaded. Import it in the AppModule only');
        }

        if (appInsightsService.config && appInsightsService.config.instrumentationKey) {
            appInsightsService.init();
        }
    }

    static forRoot(config: AppInsightsConfig | null = null): ModuleWithProviders {
        return {
            ngModule: BrowserAppInsightsModule,
            providers: [
                {
                    provide: AppInsightsConfig,
                    useValue: config
                }
            ]
        };
    }
}
