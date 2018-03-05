import { NgModule } from '@angular/core';

import { ConsoleLoggerProvider } from './console-logger-provider';
import { LOGGER_PROVIDER } from './logger-provider';

/**
 * Console logger module
 */
@NgModule({
    providers: [
        {
            provide: LOGGER_PROVIDER,
            useClass: ConsoleLoggerProvider,
            multi: true
        }
    ]
})
export class ConsoleLoggerModule { }
