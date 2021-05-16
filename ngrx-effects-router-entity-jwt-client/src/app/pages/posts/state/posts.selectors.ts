import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPosts from '@posts/state/posts.reducers';
import { PostsState } from './posts.state';

export const selectPostsState = createFeatureSelector<PostsState>(fromPosts.postsFeatureKey);

export const selectPosts = () => createSelector(
    selectPostsState,
    (postsState: PostsState) => postsState.posts
);

export const selectPostById = (id: string) => createSelector(
    selectPostsState,
    (postsState: PostsState) => {
        return postsState.posts.find(post => post.id === id);
    }
);
