import { Store } from '@ngrx/store';
import { Component, Input, OnInit } from '@angular/core';
import { IPost } from '@shared/interfaces/post.interface';
import * as fromPosts from '@posts/state';
@Component({
    selector: 'app-post-item',
    templateUrl: './post-item.component.html',
    styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit {
    @Input() post!: IPost;

    constructor(private _store: Store<fromPosts.PostsState>) { }

    ngOnInit(): void {
    }

    onDeletePost(): void {
        this._store.dispatch(fromPosts.deletePost({ postId: this.post?.id }));
    }
}
