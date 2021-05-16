import { LoginState } from '@login/state';
import { AppState } from '@app/state';
import { loginFeatureKey, loginReducer } from '@login/state';
import { appFeatureKey, appReducer } from '@app/state/app.reducers';

export interface RootState {
    [appFeatureKey]: AppState;
    [loginFeatureKey]: LoginState;
}

export const rootReducerMap = {
    [appFeatureKey]: appReducer,
    [loginFeatureKey]: loginReducer
};
