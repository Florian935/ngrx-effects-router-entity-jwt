import { createAction } from '@ngrx/store';
import { AppActions } from './app-actions.enum';

export const initTitle = createAction(
    AppActions.INIT_TITLE
);
