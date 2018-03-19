import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { ConfigModule } from '@bizappframework/ng-config';
import { ConfigHttpLoaderModule } from '@bizappframework/ng-config/http-loader';

import { BrowserAppInsightsModule } from '@bizappframework/ng-application-insights';
import { AppInsightsConfigurationModule } from '@bizappframework/ng-application-insights-configuration';

import { ConsoleLoggerModule, LoggerModule } from '@bizappframework/ng-logging';
import { LoggingConfigurationModule } from '@bizappframework/ng-logging-configuration';

import { AppInsightsLoggerModule } from '@bizappframework/ng-logging-application-insights';

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
        HttpClientModule,

        // ngrx
        StoreModule.forRoot(reducers, { metaReducers }),
        StoreDevtoolsModule.instrument({
            logOnly: environment.production
        }),

        // Config
        ConfigModule.loadWithAppInitializer(),
        ConfigHttpLoaderModule,

        // Application Insights
        BrowserAppInsightsModule,
        AppInsightsConfigurationModule,

        // Logging
        LoggerModule,
        LoggingConfigurationModule,
        ConsoleLoggerModule,
        AppInsightsLoggerModule
    ]
})
export class AppModule { }
