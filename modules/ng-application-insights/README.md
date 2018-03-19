# ng-application-insights

[![npm version](https://badge.fury.io/js/%40bizappframework%2Fng-application-insights.svg)](https://badge.fury.io/js/%40bizappframework%2Fng-application-insights)

Contains Microsoft Azure Application Insights module for Angular projects.

Installation
---------------

```bash
npm install @bizappframework/ng-application-insights
```

Setup
---------------

```typescript
import { BrowserAppInsightsModule } from '@bizappframework/ng-application-insights';

@NgModule({    
    imports: [
        // Other module imports

        // Note: Only import in browser module
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

import { AppInsightsService } from '@bizappframework/ng-application-insights';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    private readonly _logger: Logger;

    constructor(private readonly _appInsightsService: AppInsightsService) { }

    ngOnInit(): void {
        this._appInsightsService.trackEvent('ngOnInit');
    }
}
```

Example
---------------

[ng-logging-aspnetcore-sample](https://github.com/BizAppFramework/ng-logging/tree/master/samples/ng-logging-aspnetcore-sample)

## License

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](/LICENSE)