# ng-logging-application-insights

[![npm version](https://badge.fury.io/js/%40bizappframework%2Fng-logging-application-insights.svg)](https://badge.fury.io/js/%40bizappframework%2Fng-logging-application-insights)

Contains Microsoft Azure Application Insights module and logging target for Angular projects.

Installation
---------------

```bash
npm install @bizappframework/ng-logging-application-insights
```

Setup
---------------

```typescript
import { LoggerModule } from '@bizappframework/ng-logging';
import { AppInsightsLoggerModule, BrowserAppInsightsModule } from '@bizappframework/ng-logging-application-insights';

@NgModule({    
    imports: [
        // Other module imports

        // Logging
        LoggerModule.forRoot({ minLevel: 'trace' }),
        AppInsightsLoggerModule,
        BrowserAppInsightsModule.forRoot({
            // instrumentationKey: environment.aiInstrumentationKey,
            verboseLogging: true,
            enableDebug: true
        })
    ]    
})
export class AppModule { }
```

Usage
---------------

```typescript
import { Component, OnInit } from '@angular/core';

import { Logger, LoggerFactory } from '@bizappframework/ng-logging';
import { AppInsightsService } from '@bizappframework/ng-logging-application-insights';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    private readonly _logger: Logger;

    constructor(loggerFactory: LoggerFactory, private readonly _appInsightsService: AppInsightsService) {
        this._logger = loggerFactory.createLogger('app');
    }

    ngOnInit(): void {
        // with appInsight service
        this._appInsightsService.trackEvent('ngOnInit');

        // with appInsight logging target
        this._logger.debug('Testing debug');        
    }
}
```

Example
---------------

[ng-logging-aspnetcore-sample](https://github.com/BizAppFramework/ng-logging/tree/master/samples/ng-logging-aspnetcore-sample)

## License

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](/LICENSE)