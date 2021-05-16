import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from './app.state';
import * as fromApp from './app.reducers';

export const selectAppState = createFeatureSelector<AppState>(fromApp.appFeatureKey);

export const _selectTitle = (state: AppState) => state.title;

export const selectTitle = createSelector(
    selectAppState,
    _selectTitle
);
