import { LogLevel } from './log-level';
import { Logger } from './logger';

/**
 * Console logger
 */
export class ConsoleLogger implements Logger {
    private readonly _filter: (category: string, logLevel: LogLevel) => boolean;

    constructor(readonly name: string, filter?: (category: string, logLevel: LogLevel) => boolean) {
        if (filter) {
            this._filter = filter;
        } else {
            this._filter = () => true;
        }
    }

    // tslint:disable-next-line:no-any
    trace(message?: string, ...optionalParams: any[]): void {
        if (!this.isEnabled(LogLevel.Trace)) {
            return;
        }

        // tslint:disable-next-line:no-console
        console.trace(message, ...optionalParams);
    }

    // tslint:disable-next-line:no-any
    debug(message: string, ...optionalParams: any[]): void {
        if (!this.isEnabled(LogLevel.Debug)) {
            return;
        }

        // tslint:disable-next-line:no-console
        console.log(message, ...optionalParams);
    }

    // tslint:disable-next-line:no-any
    info(message: string, ...optionalParams: any[]): void {
        if (!this.isEnabled(LogLevel.Info)) {
            return;
        }

        // tslint:disable-next-line:no-console
        console.info(message, ...optionalParams);
    }

    // tslint:disable-next-line:no-any
    warn(message: string, ...optionalParams: any[]): void {
        if (!this.isEnabled(LogLevel.Warn)) {
            return;
        }

        // tslint:disable-next-line:no-console
        console.warn(message, ...optionalParams);
    }

    // tslint:disable-next-line:no-any
    error(message: string | Error, ...optionalParams: any[]): void {
        if (!this.isEnabled(LogLevel.Error)) {
            return;
        }

        // tslint:disable-next-line:no-console
        console.error(message, ...optionalParams);
    }

    isEnabled(logLevel: LogLevel): boolean {
        if (logLevel === LogLevel.None) {
            return false;
        }

        return this._filter(this.name, logLevel);
    }
}
