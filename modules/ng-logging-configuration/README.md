ng-logging-configuration
=====================

[![npm version](https://badge.fury.io/js/%40bizappframework%2Fng-logging-configuration.svg)](https://badge.fury.io/js/%40bizappframework%2Fng-logging-configuration)

Contains configuration loader module for [@bizappframework/ng-logging](https://www.npmjs.com/package/@bizappframework/ng-logging).

Installation
---------------

```bash
npm install @bizappframework/ng-logging-configuration
```

Setup
---------------

```typescript
import { LoggerModule } from '@bizappframework/ng-logging';
import { LoggingConfigurationModule } from '@bizappframework/ng-logging-configuration';

@NgModule({    
    imports: [
        // Other module imports

        // Logging
        LoggerModule,
        LoggingConfigurationModule
    ]    
})
export class AppModule { }
```

Example
---------------

[ng-logging-aspnetcore-sample](https://github.com/BizAppFramework/ng-logging/tree/master/samples/ng-logging-aspnetcore-sample)

## License

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](/LICENSE)