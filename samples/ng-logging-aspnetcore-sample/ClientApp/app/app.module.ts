import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { ConsoleLoggerModule, LoggerModule } from '@bizappframework/ng-logging';
import { AppInsightsLoggerModule, BrowserAppInsightsModule } from '@bizappframework/ng-logging-application-insights';

import { environment } from 'environments/environment';

import { AppComponent } from './app.component';
import { metaReducers, reducers } from './reducers';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,

        // ngrx
        StoreModule.forRoot(reducers, { metaReducers }),
        // Instrumentation must be imported after importing StoreModule (config is optional)
        StoreDevtoolsModule.instrument({
            logOnly: environment.production // Restrict extension to log-only mode
        }),

        // logging
        LoggerModule.forRoot({ minLevel: 'trace' }),
        ConsoleLoggerModule,
        AppInsightsLoggerModule,
        BrowserAppInsightsModule.forRoot({
            // instrumentationKey: environment.aiInstrumentationKey,
            verboseLogging: true,
            enableDebug: true
        })
    ]
})
export class AppModule { }
