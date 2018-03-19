# ngrx-store-logger

[![npm version](https://badge.fury.io/js/%40bizappframework%2Fngrx-store-logger.svg)](https://badge.fury.io/js/%40bizappframework%2Fngrx-store-logger)

Contains logging middleware for @ngrx/store applications.

Installation
---------------

```bash
npm install @bizappframework/ngrx-store-logger
```

Usage
---------------

```typescript
import { storeLogger } from '@bizappframework/ngrx-store-logger';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import { environment } from 'environments/environment';

export interface State { }

export const reducers: ActionReducerMap<State> = {};

export const metaReducers: MetaReducer<State>[] = environment.production
    ? [] : [storeLogger];
```

Example
---------------

[ng-logging-aspnetcore-sample](https://github.com/BizAppFramework/ng-logging/tree/master/samples/ng-logging-aspnetcore-sample)

## License

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](/LICENSE)