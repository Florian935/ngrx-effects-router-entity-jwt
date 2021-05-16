import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPosts from '@posts/state/posts.reducers';
import { PostsState } from './posts.state';

export const selectPostsState = createFeatureSelector<PostsState>(fromPosts.postsFeatureKey);

const _selectPosts = (postsState: PostsState) => postsState.posts;

export const selectPosts = createSelector(
    selectPostsState,
    _selectPosts
);

const _getPostById = (postsState: PostsState, { id }: { id: string }) => {
    return postsState.posts.find(post => post.id === id);
};

export const selectPostById = createSelector(
    selectPostsState,
    _getPostById
);
