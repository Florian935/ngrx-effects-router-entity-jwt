import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { IPost } from '@shared/interfaces/post.interface';
import * as fromPosts from '@posts/state';

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
    posts$: Observable<Array<IPost>> = this._store.pipe(select(fromPosts.selectPosts));

    constructor(private _store: Store<fromPosts.PostsState>) { }

    ngOnInit(): void {
        this._store.dispatch(fromPosts.loadPosts());
    }

}
