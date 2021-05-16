import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICredential, IJwt, IUser, Nullable } from '@shared/index';
import { environment } from '@environments/environment';

const API_BASE_URL = environment.API_BASE_URL;
const TOKEN_KEY = 'token';
const USERNAME_KEY = 'username';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    constructor(private _http: HttpClient) {}

    authenticate(credentials: ICredential): Observable<IJwt> {
        return this._http.post<IJwt>(`${API_BASE_URL}/authenticate`, credentials);
    }

    setToken(jwt: IJwt): void {
        if (jwt.token) {
            localStorage.setItem(TOKEN_KEY, jwt.token);
        }
    }

    setUser(user: IUser): void {
        if (user.username) {
            localStorage.setItem(USERNAME_KEY, user.username);
        }
    }

    getToken(): Nullable<string> {
        return localStorage.getItem(TOKEN_KEY);
    }

    getUsername(): Nullable<string> {
        return localStorage.getItem(USERNAME_KEY);
    }
}
