import { NgModule } from '@angular/core';

import { BrowserAppInsightsModule } from '@bizappframework/ng-logging-application-insights';

// import { environment } from 'environments/environment';

import { AppComponent } from 'app/app.component';
import { AppSharedModule } from 'app/app.module';

@NgModule({
    bootstrap: [AppComponent],
    imports: [
        AppSharedModule,
        BrowserAppInsightsModule.forRoot({
            // instrumentationKey: environment.aiInstrumentationKey,
            verboseLogging: true,
            enableDebug: true
        })
    ]
})
export class AppModule { }
