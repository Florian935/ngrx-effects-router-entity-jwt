import { AppState } from './app.state';

import { createReducer, on } from '@ngrx/store';
import * as appActions from './app.actions';

export const appFeatureKey = 'appState';


const initialAppState: AppState = {
    title: 'Multiple state with JWT authentication'
};

export const appReducer = createReducer(
    initialAppState,
    on(appActions.initTitle, (appState) => {
        return { ...appState };
    })
);
