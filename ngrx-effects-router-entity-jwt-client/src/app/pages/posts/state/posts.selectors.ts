import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPosts from '@posts/state/posts.reducers';
import { PostsState } from '@posts/state/posts.state';
import * as fromRouter from '@app/state/router/router.selectors';
import { RouterUrlState } from '@app/state';
import { IPost } from '@app/shared';

export const selectPostsState = createFeatureSelector<PostsState>(fromPosts.postsFeatureKey);

export const selectPosts = () => createSelector(
    selectPostsState,
    (postsState: PostsState) => postsState.posts
);

export const selectPostById = () => createSelector(
    selectPosts(),
    fromRouter.selectCurrentRoute(),
    (posts: Array<IPost>, routerState: RouterUrlState) => {
        return posts ? posts.find(post => post.id === routerState.params.id) : null;
    }
);
