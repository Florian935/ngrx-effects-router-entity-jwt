import { ICredential, IJwt, IUser } from '@shared/index';
import { LoginActions } from './login-actions.enum';
import { createAction, props } from '@ngrx/store';

export const authenticateUser = createAction(
    LoginActions.AUTHENTICATE_USER,
    props<{ credentials: ICredential }>()
);

export const authenticateUserSuccess = createAction(
    LoginActions.AUTHENTICATE_USER_SUCCESS,
    props<{ user: IUser, jwt: IJwt, redirect: boolean }>()
);

export const authenticationUserError = createAction(
    LoginActions.AUTHENTICATE_USER_ERROR,
    props<{ errorMessage: string }>()
);

export const tryAutoConnect = createAction(
    LoginActions.TRY_AUTO_CONNECT
);
