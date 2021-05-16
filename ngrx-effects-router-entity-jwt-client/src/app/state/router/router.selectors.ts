import { RouterReducerState } from '@ngrx/router-store';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRouter from '@app/state/router/router-url.state';

export const selectRouterState = createFeatureSelector<
    RouterReducerState<fromRouter.RouterUrlState>
>(fromRouter.routerFeatureKey);

export const selectCurrentRoute = () => createSelector(
    selectRouterState,
    (router: RouterReducerState<fromRouter.RouterUrlState>) => router.state
);
