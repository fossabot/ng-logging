import { NgModule, Optional, SkipSelf } from '@angular/core';

import { AppInsightsService } from './app-insights.service';
import { NoopAppInsightsService } from './noop-app-insights.service';

@NgModule({
    providers: [
        {
            provide: AppInsightsService,
            useClass: NoopAppInsightsService
        }
    ]
})
export class NoopAppInsightsModule {
    constructor(@Optional() @SkipSelf() parentModule: NoopAppInsightsModule) {
        if (parentModule) {
            throw new Error(
                'NoopAppInsightsModule is already loaded. Import it in the AppModule only');
        }
    }
}
