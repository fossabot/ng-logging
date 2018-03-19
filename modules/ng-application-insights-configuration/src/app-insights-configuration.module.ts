import { NgModule, Optional, SkipSelf } from '@angular/core';

import { AppInsightsConfig, AppInsightsService } from '@bizappframework/ng-application-insights';
import { ConfigService } from '@bizappframework/ng-config';

@NgModule()
export class AppInsightsConfigurationModule {
    constructor(configService: ConfigService,
        appInsightsService: AppInsightsService,
        @Optional() @SkipSelf() parentModule: AppInsightsConfigurationModule) {
        if (parentModule) {
            throw new Error('AppInsightsConfigurationModule has already been loaded, import in root module only.');
        }

        configService.loadEvent
            .subscribe((evt) => {
                if (evt.loaded) {
                    if (evt.data && evt.data.applicationInsights) {
                        appInsightsService.config = <AppInsightsConfig>evt.data.applicationInsights;
                    }
                }
            });
    }
}
