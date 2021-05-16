import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromLogin from '@login/state/login.reducers';
import { LoginState } from '@login/state/login.state';

const selectLoginState = createFeatureSelector<LoginState>(fromLogin.loginFeatureKey);

const _selectConnectedUser = (loginState: LoginState) => loginState.user;

export const selectConnectedUser = createSelector(
    selectLoginState,
    _selectConnectedUser
);

const _selectToken = (loginState: LoginState) => loginState.jwt?.token;

export const selectToken = createSelector(
    selectLoginState,
    _selectToken
);

const _selectErrorMessage = (loginState: LoginState) => loginState.errorMessage;

export const selectErrorMessage = createSelector(
    selectLoginState,
    _selectErrorMessage
);
