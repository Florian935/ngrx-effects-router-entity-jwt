import { exhaustMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as fromLogin from '@login/state';
import { Store, select } from '@ngrx/store';

const AUTHORIZATION = 'Authorization';
const BEARER = 'Bearer ';

@Injectable({
    providedIn: 'root'
})
export class JwtInterceptor implements HttpInterceptor {

    constructor(private _store: Store<fromLogin.LoginState>) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return this._store.pipe(
            select(fromLogin.selectToken),
            exhaustMap(token => {
                req = token ? this.cloneAndAddAuthHeader(req, token) : req;

                return next.handle(req);
            })
        );
    }

    cloneAndAddAuthHeader(httpRequest: HttpRequest<any>, token: string): HttpRequest<any> {
        const modifiedRequest = httpRequest.clone({
            headers: httpRequest.headers.set(AUTHORIZATION, `${BEARER}${token}`)
        });

        return modifiedRequest;
    }
}
