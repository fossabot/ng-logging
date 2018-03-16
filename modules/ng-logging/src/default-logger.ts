import { LogLevel } from './log-level';
import { Logger } from './logger';
import { LoggerInformation } from './logger-information';

/**
 * Default logger
 */
export class DefaultLogger implements Logger {
    private _loggers: LoggerInformation[];

    get loggers(): LoggerInformation[] {
        return this._loggers;
    }
    set loggers(value: LoggerInformation[]) {
        this._loggers = value;
    }

    trace(message?: string, ...optionalParams: any[]): void {
        if (!this.loggers) {
            return;
        }

        this.loggers
            .filter(loggerInfo => this.isEnabledInternal(LogLevel.Trace, loggerInfo))
            .forEach(loggerInfo => {
                loggerInfo.logger.trace(message, ...optionalParams);
            });
    }

    debug(message: string, ...optionalParams: any[]): void {
        if (!this.loggers) {
            return;
        }

        this.loggers
            .filter(loggerInfo => this.isEnabledInternal(LogLevel.Debug, loggerInfo))
            .forEach(loggerInfo => {
                loggerInfo.logger.debug(message, ...optionalParams);
            });
    }

    info(message: string, ...optionalParams: any[]): void {
        if (!this.loggers) {
            return;
        }

        this.loggers
            .filter(loggerInfo => this.isEnabledInternal(LogLevel.Info, loggerInfo))
            .forEach(loggerInfo => {
                loggerInfo.logger.info(message, ...optionalParams);
            });
    }

    warn(message: string, ...optionalParams: any[]): void {
        if (!this.loggers) {
            return;
        }

        this.loggers
            .filter(loggerInfo => this.isEnabledInternal(LogLevel.Warn, loggerInfo))
            .forEach(loggerInfo => {
                loggerInfo.logger.warn(message, ...optionalParams);
            });
    }

    error(message: string | Error, ...optionalParams: any[]): void {
        if (!this.loggers) {
            return;
        }

        this.loggers
            .filter(loggerInfo => this.isEnabledInternal(LogLevel.Error, loggerInfo))
            .forEach(loggerInfo => {
                loggerInfo.logger.error(message, ...optionalParams);
            });
    }

    isEnabled(level: LogLevel): boolean {
        if (!this.loggers) {
            return false;
        }

        for (const loggerInfo of this.loggers) {
            if (this.isEnabledInternal(level, loggerInfo)) {
                return true;
            }
        }

        return false;
    }

    private isEnabledInternal(level: LogLevel, loggerInfo: LoggerInformation): boolean {
        if (loggerInfo.minLevel != null &&
            level < loggerInfo.minLevel) {
            return false;
        }

        if (!loggerInfo.logger.isEnabled(level)) {
            return false;
        }

        if (loggerInfo.filter) {
            return loggerInfo.filter(loggerInfo.providerType, loggerInfo.category, level);
        }

        return true;
    }
}
