import { LogLevel } from './log-level';
import { LoggerFilterOptions } from './logger-options';

interface LogLevelSection {
    [key: string]: string | number | null;
}

export function parseConfig(config: object): LoggerFilterOptions {
    const options: LoggerFilterOptions = { rules: [], minLevel: null };

    if (config['minLevel'] != null) {
        if (typeof config['minLevel'] === 'string') {
            options.minLevel = getSwitch(config['minLevel']);
        } else if (typeof config['minLevel'] === 'number') {
            options.minLevel = <LogLevel>config['minLevel'];
        } else {
            throw new Error(`Invalid logging configuration, minLevel value '${config['minLevel']}' is not supported.`);
        }
    }

    if (config['rules']) {
        if (!Array.isArray(config['rules'])) {
            throw new Error('Invalid logging configuration.');
        }

        return <LoggerFilterOptions>config;
    }

    Object.keys(config).forEach(key => {
        if (key === 'minLevel') {
            return;
        }

        const configSection = config[key];
        if (typeof configSection !== 'object') {
            return;
        }

        if (key === 'logLevel') {
            // Load global category defaults
            loadRules(options, configSection, null);
        } else if (configSection['logLevel']) {
            const logLevelSection = <LogLevelSection>configSection['logLevel'];

            if (typeof logLevelSection !== 'object') {
                throw new Error('Invalid logging configuration.');
            }

            // Load logger specific rules
            const loggerName = key;
            loadRules(options, logLevelSection, loggerName);
        }
    });

    return options;
}

function loadRules(options: LoggerFilterOptions,
    section: LogLevelSection,
    loggerName: string | null): void {
    Object.keys(section).forEach(key => {
        const category = key === 'default' ? null : key;
        let logLevel: LogLevel | null = null;
        const value = section[key];
        if (value != null) {
            if (typeof value === 'string') {
                logLevel = getSwitch(value);
            } else if (typeof value === 'number') {
                logLevel = <LogLevel>value;
            } else {
                throw new Error(`Invalid logging configuration, logLevel value '${value}' is not supported.`);
            }
        }

        if (logLevel != null) {
            const newRule = { providerName: loggerName, categoryName: category, logLevel: logLevel };
            options.rules.push(newRule);
        }
    });
}

function getSwitch(value: string): LogLevel {
    switch (value) {
        case 'trace':
        case 'Trace':
            return LogLevel.Trace;
        case 'debug':
        case 'Debug':
            return LogLevel.Debug;
        case 'info':
        case 'Info':
            return LogLevel.Info;
        case 'warn':
        case 'Warn':
            return LogLevel.Warn;
        case 'error':
        case 'Error':
            return LogLevel.Error;
        case 'critical':
        case 'Critical':
            return LogLevel.Critical;
        case 'none':
        case 'None':
            return LogLevel.None;
        default:
            throw new Error(`Invalid logging configuration, logLevel value '${value}' is not supported.`);
    }
}
