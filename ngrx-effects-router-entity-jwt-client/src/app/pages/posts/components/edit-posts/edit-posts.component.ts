import { Store, select } from '@ngrx/store';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import * as fromPosts from '@posts/state';
import { UnsubscribeOnDestroyAdapter } from '@shared/index';
import { IPost } from '@shared/interfaces/post.interface';
@Component({
    selector: 'app-edit-posts',
    templateUrl: './edit-posts.component.html',
    styleUrls: ['./edit-posts.component.scss']
})
export class EditPostsComponent extends UnsubscribeOnDestroyAdapter implements OnInit {
    editForm!: FormGroup;
    post?: IPost;

    constructor(
        private _formBuilder: FormBuilder,
        private _route: ActivatedRoute,
        private _store: Store<fromPosts.PostsState>,
        private _router: Router
    ) {
        super();
    }

    ngOnInit(): void {
        this.subscriptions.add(this._route.params.subscribe((params: Params) => {
            const id = params.id;
            this.subscriptions.add(
                this._store.pipe(
                    select(fromPosts.selectPostById, { id })).subscribe((post) => {
                        this.post = post;
                        this.buildEditForm();
                    })
            );
        }));
    }

    private buildEditForm(): void {
        this.editForm = this._formBuilder.group({
            title: [this.post?.title, [Validators.required]],
            body: [this.post?.body, [Validators.required]]
        });
    }

    onSubmitForm(): void {
        const post: IPost = { ...this.post, ...this.editForm.value };
        this._store.dispatch(fromPosts.updatePost({ post }));
        this._router.navigate(['/posts']);
    }
}
