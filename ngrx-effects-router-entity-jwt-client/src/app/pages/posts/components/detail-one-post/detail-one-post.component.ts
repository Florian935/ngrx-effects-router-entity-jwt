import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { IPost, Nullable } from '@app/shared';
import * as fromPosts from '@posts/state';

@Component({
    selector: 'app-detail-one-post',
    templateUrl: './detail-one-post.component.html',
    styleUrls: ['./detail-one-post.component.scss']
})
export class DetailOnePostComponent implements OnInit {
    post$?: Observable<Nullable<IPost>>;

    constructor(private _store: Store<fromPosts.PostsState>) { }

    ngOnInit(): void {
        this.post$ = this._store.pipe(select(fromPosts.selectPostById()));
    }

}
