import { Logger } from './logger';

/**
 * Null logger
 */
export class NullLogger implements Logger {
    trace(): void {
        // Do nothing
    }

    debug(): void {
        // Do nothing
    }

    info(): void {
        // Do nothing
    }

    warn(): void {
        // Do nothing
    }

    error(): void {
        // Do nothing
    }

    isEnabled(): boolean {
        return false;
    }
}
