import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from './app.state';
import * as fromApp from './app.reducers';

export const selectAppState = createFeatureSelector<AppState>(fromApp.appFeatureKey);

export const selectTitle = () => createSelector(
    selectAppState,
    (state: AppState) => state.title
);
