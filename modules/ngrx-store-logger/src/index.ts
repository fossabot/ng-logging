/* tslint:disable:no-console */

import { ActionReducer } from '@ngrx/store';

const isBrowser = typeof document === 'object' && !!document && typeof window === 'object' && !!window;
const ua = isBrowser && window.navigator.userAgent ? window.navigator.userAgent : '';
const ie = isBrowser && (ua.indexOf('MSIE ') > -1 || ua.indexOf('Trident/'));

export function storeLogger(reducer: ActionReducer<any>): ActionReducer<any> {
    return (state: any, action: any): any => {
        if (action.type.startsWith('@ngrx/store/init')) {
            return reducer(state, action);
        }

        try {
            console.group(action.type);
        } catch (e) {
            console.log(action.type);
        }

        const nextState = reducer(state, action);

        if (isBrowser && !ie) {
            console.log('%c prev state', 'color: #9E9E9E; font-weight: bold', state);
            console.log('%c action', 'color: #03A9F4; font-weight: bold', action);
            console.log('%c next state', 'color: #4CAF50; font-weight: bold', nextState);
        } else {
            console.log('prev state', state);
            console.log('action', action);
            console.log('next state', nextState);
        }

        try {
            console.groupEnd();
        } catch (e) {
            console.log('—— log end ——');
        }

        return nextState;
    };
}
