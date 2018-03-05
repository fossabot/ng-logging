import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';

import { ConsoleLoggerModule, LoggerModule } from '@bizappframework/ng-logging';
import { AppInsightsLoggerModule } from '@bizappframework/ng-logging-application-insights';

import { AppComponent } from 'app/app.component';

export const appId = 'ng-logging-app';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent
    ],
    imports: [
        CommonModule,
        BrowserModule.withServerTransition({
            appId: appId
        }),
        BrowserTransferStateModule,

        // logging
        LoggerModule.forRoot({ minLevel: 'trace' }),
        ConsoleLoggerModule,
        AppInsightsLoggerModule
    ],
    providers: []
})
export class AppSharedModule { }
