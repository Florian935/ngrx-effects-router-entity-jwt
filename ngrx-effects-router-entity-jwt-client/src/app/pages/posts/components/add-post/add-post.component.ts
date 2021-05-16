import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as fromPost from '@posts/state';
import { IPost } from '@shared/interfaces/post.interface';
import { Router } from '@angular/router';

@Component({
    selector: 'app-add-post',
    templateUrl: './add-post.component.html',
    styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
    postForm!: FormGroup;

    constructor(
        private _formBuilder: FormBuilder,
        private _store: Store<fromPost.PostsState>,
        private _router: Router) { }

    ngOnInit(): void {
        this.buildPostForm();
    }

    private buildPostForm(): void {
        this.postForm = this._formBuilder.group({
            title: ['', [Validators.required]],
            body: ['', [Validators.required]]
        });
    }

    onAddPost(): void {
        const post: IPost = this.postForm.value;
        this._store.dispatch(fromPost.addPost({ post }));
        this._router.navigate(['/posts']);
    }
}
