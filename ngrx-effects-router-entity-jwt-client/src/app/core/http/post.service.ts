import { environment } from '@environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost } from 'src/app/shared';

const API_BASE_URL = environment.API_BASE_URL;

@Injectable({
    providedIn: 'root'
})
export class PostService {
    constructor(private _http: HttpClient) {
    }

    getAll(): Observable<Array<IPost>> {
        return this._http.get<Array<IPost>>(`${API_BASE_URL}/posts`);
    }

    insert(post: IPost): Observable<IPost> {
        return this._http.post<IPost>(`${API_BASE_URL}/posts`, post);
    }

    deleteById(postId: string): Observable<void> {
        return this._http.delete<void>(`${API_BASE_URL}/posts/${postId}`);
    }

    update(post: IPost): Observable<IPost> {
        return this._http.put<IPost>(`${API_BASE_URL}/posts/${post.id}`, post);
    }
}
