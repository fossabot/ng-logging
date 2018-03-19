ng-application-insights-configuration
=====================

[![npm version](https://badge.fury.io/js/%40bizappframework%2Fng-application-insights-configuration.svg)](https://badge.fury.io/js/%40bizappframework%2Fng-application-insights-configuration)

Contains configuration loader module for [@bizappframework/ng-application-insights](https://www.npmjs.com/package/@bizappframework/ng-application-insights).

Installation
---------------

```bash
npm install @bizappframework/ng-application-insights-configuration
```

Setup
---------------

```typescript
import { BrowserAppInsightsModule } from '@bizappframework/ng-application-insights';
import { AppInsightsConfigurationModule } from '@bizappframework/ng-application-insights-configuration';

@NgModule({    
    imports: [
        // Other module imports

        BrowserAppInsightsModule,
        AppInsightsConfigurationModule
    ]    
})
export class AppModule { }
```

Example
---------------

[ng-logging-aspnetcore-sample](https://github.com/BizAppFramework/ng-logging/tree/master/samples/ng-logging-aspnetcore-sample)

## License

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](/LICENSE)