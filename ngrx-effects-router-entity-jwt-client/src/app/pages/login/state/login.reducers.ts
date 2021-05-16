import { LoginState } from './login.state';
import { createReducer, on } from '@ngrx/store';
import * as loginActions from './login.actions';

export const loginFeatureKey = 'loginState';


const initialLoginnState: LoginState = {
    user: null,
    jwt: null
};

export const loginReducer = createReducer(
    initialLoginnState,
    on(loginActions.authenticateUserSuccess, (loginState, { user, jwt }) => {
        return { ...loginState, user, jwt };
    }),
    on(loginActions.tryAutoConnect, (loginState) => {
        return { ...loginState };
    }),
    on(loginActions.authenticationUserError, (loginState, { errorMessage }) => {
        return { ...loginState, errorMessage };
    })
);

