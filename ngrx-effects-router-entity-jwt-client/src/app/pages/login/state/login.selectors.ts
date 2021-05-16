import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromLogin from '@login/state/login.reducers';
import { LoginState } from '@login/state/login.state';

const selectLoginState = createFeatureSelector<LoginState>(fromLogin.loginFeatureKey);

export const selectConnectedUser = () => createSelector(
    selectLoginState,
    (loginState: LoginState) => loginState.user
);

export const selectToken = () => createSelector(
    selectLoginState,
    (loginState: LoginState) => loginState.jwt?.token
);

export const selectErrorMessage = () => createSelector(
    selectLoginState,
    (loginState: LoginState) => loginState.errorMessage
);
