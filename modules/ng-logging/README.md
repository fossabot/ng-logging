# ng-logging

[![npm version](https://badge.fury.io/js/%40bizappframework%2Fng-logging.svg)](https://badge.fury.io/js/%40bizappframework%2Fng-logging)  

Contains logging abstractions and a few implementations for Angular projects based on [Microsoft ASP.Net Logging](https://github.com/aspnet/Logging).


Installation
---------------

```bash
npm install @bizappframework/ng-logging
```

Setup
---------------

```typescript
import { ConsoleLoggerModule, LoggerModule } from '@bizappframework/ng-logging';

@NgModule({    
    imports: [
        // Other module imports

        // Logging
        LoggerModule.forRoot({ minLevel: 'trace' }),
        ConsoleLoggerModule
    ]    
})
export class AppModule { }
```

Usage
---------------

```typescript
import { Component, OnInit } from '@angular/core';

import { Logger, LoggerFactory } from '@bizappframework/ng-logging';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    private readonly _logger: Logger;

    constructor(loggerFactory: LoggerFactory) {
        this._logger = loggerFactory.createLogger('app');
    }

    ngOnInit(): void {
        this._logger.trace('Testing trace');
        this._logger.debug('Testing debug');
        this._logger.info('Testing info');
        this._logger.warn('Testing warn');
        this._logger.error('Testing error');
    }
}
```

Example
---------------

[ng-logging-aspnetcore-sample](https://github.com/BizAppFramework/ng-logging/tree/master/samples/ng-logging-aspnetcore-sample)

## License

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](/LICENSE)