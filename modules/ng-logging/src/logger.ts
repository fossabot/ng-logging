import { LogLevel } from './log-level';

/**
 * The logger interface
 */
export interface Logger {
    isEnabled(logLevel: LogLevel): boolean;
    // tslint:disable-next-line:no-any
    trace(message?: string, ...optionalParams: any[]): void;
    // tslint:disable-next-line:no-any
    debug(message: string, ...optionalParams: any[]): void;
    // tslint:disable-next-line:no-any
    info(message: string, ...optionalParams: any[]): void;
    // tslint:disable-next-line:no-any
    warn(message: string, ...optionalParams: any[]): void;
    // tslint:disable-next-line:no-any
    error(message: string | Error, ...optionalParams: any[]): void;
}
