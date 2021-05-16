import { IJwt, IUser, Nullable } from '@shared/index';

export interface LoginState {
    user: Nullable<IUser>;
    jwt: Nullable<IJwt>;
    errorMessage?: string;
}
