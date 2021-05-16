import { IPost } from '@shared/index';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PostService } from '@core/index';
import * as postsActions from '@posts/state/posts.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class PostsEffects {

    constructor(
        private _postService: PostService,
        private _actions$: Actions,
        private _snackBar: MatSnackBar) { }

    loadPosts$ = createEffect(() => {
        return this._actions$.pipe(
            ofType(postsActions.loadPosts),
            switchMap(unusedAction => {
                return this._postService.getAll().pipe(
                    map((posts: Array<IPost>) => {
                        return postsActions.loadPostsSuccess({ posts });
                    }),
                    catchError(unusedError => {
                        this.openNotification(
                            'An error occurred while loading posts.',
                            'Cancel',
                            3000
                        );
                        return EMPTY;
                    })
                );
            })
        );
    });

    addPost$ = createEffect(() => {
        return this._actions$.pipe(ofType(postsActions.addPost),
            switchMap(({ post }) => {
                return this._postService.insert(post).pipe(
                    map((post: IPost) => {
                        return postsActions.addPostSuccess({ post });
                    }),
                    catchError(unusedError => {
                        this.openNotification(
                            'An error occurred while trying to add this post.',
                            'Cancel',
                            3000
                        );
                        return EMPTY;
                    })
                );
            }));
    });

    deletePost$ = createEffect(() => {
        return this._actions$.pipe(
            ofType(postsActions.deletePost),
            switchMap(({ postId }) => {
                return this._postService.deleteById(postId).pipe(
                    map(unusedResponse => {
                        return postsActions.deletePostSuccess({ postId });
                    }),
                    catchError(unusedError => {
                        this.openNotification(
                            'An error occurred while trying to update this post.',
                            'Cancel',
                            3000
                        );
                        return EMPTY;
                    })
                );
            })
        );
    });

    updatePost$ = createEffect(() => {
        return this._actions$.pipe(
            ofType(postsActions.updatePost),
            switchMap(({ post }) => {
                return this._postService.update(post).pipe(
                    map( (post: IPost) => {
                        return postsActions.updatePostSuccess({ post });
                    }),
                    catchError(unusedError => {
                        this.openNotification(
                            'An error occurred while trying to delete this post.',
                            'Cancel',
                            3000
                        );
                        return EMPTY;
                    })
                );
            })
        );
    });

    private openNotification(message: string, action: string, duration: number): void {
        this._snackBar.open(
            message,
            action,
            { duration }
        );
    }
}
