import { AuthenticationService } from '@core/index';
import { switchMap, map, tap, concatMap, catchError } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as loginActions from '@login/state/login.actions';
import { IJwt, IUser, Nullable } from '@app/shared';
import { Router } from '@angular/router';
import { EMPTY, of } from 'rxjs';

@Injectable()
export class LoginEffects {

    constructor(
        private _actions$: Actions,
        private _authenticationService: AuthenticationService,
        private _router: Router
    ) { }

    authenticateUser$ = createEffect(() => {
        return this._actions$.pipe(
            ofType(loginActions.authenticateUser),
            switchMap(({ credentials }) => {
                return this._authenticationService.authenticate(credentials).pipe(
                    map((jwt: IJwt) => {
                        const user: IUser = this.buildUser(credentials.login);
                        this.setPropertiesInLocalStorage(user, jwt);
                        return loginActions.authenticateUserSuccess({ user, jwt, redirect: true });
                    }),
                    catchError(unusedError => {
                        const errorMessage = 'Bad credentials provided';
                        return of(loginActions.authenticationUserError({ errorMessage }));
                    })
                );
            })
        );
    }
    );

    redirectOnSuccessLogin$ = createEffect(() => {
        return this._actions$.pipe(
            ofType(loginActions.authenticateUserSuccess),
            tap(({ redirect }) => {
                if (redirect) {
                    this._router.navigate(['/']);
                }
            })
        );
    }, { dispatch: false }
    );

    tryAutoConnect$ = createEffect(() => {
        return this._actions$.pipe(
            ofType(loginActions.tryAutoConnect),
            concatMap(unusedAction => {
                const { user, jwt } = this.buildUserAndJwt();
                return user.username && jwt.token
                    ? of(loginActions.authenticateUserSuccess({ user, jwt, redirect: false }))
                    : EMPTY;
            })
        );
    });

    private buildUserAndJwt(): { user: IUser, jwt: IJwt } {
        const user: IUser = this.buildUser(this._authenticationService.getUsername());
        const jwt: IJwt = this.buildJwt(this._authenticationService.getToken());

        return { user, jwt };
    }

    private buildUser(username: Nullable<string>): IUser {
        return { username };
    }

    private buildJwt(token: Nullable<string>): IJwt {
        return { token };
    }

    private setPropertiesInLocalStorage(user: IUser, jwt: IJwt): void {
        this._authenticationService.setUser(user);
        this._authenticationService.setToken(jwt);
    }
}
