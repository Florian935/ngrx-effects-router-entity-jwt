import { createReducer, on } from '@ngrx/store';
import * as postsActions from '@posts/state/posts.actions';
import { PostsState, postsAdapter } from '@posts/state/posts.state';

export const postsFeatureKey = 'postsState';

const initialPostsState: PostsState = postsAdapter.getInitialState();

export const postsReducer = createReducer(
    initialPostsState,
    on(postsActions.loadPostsSuccess, (postsState, { posts }) => {
        return postsAdapter.setAll(posts, postsState);
    }),
    on(postsActions.addPostSuccess, (postsState, { post }) => {
        return postsAdapter.addOne(post, postsState);
    }),

    on(postsActions.deletePostSuccess, (postsState, { postId }) => {
        return postsAdapter.removeOne(postId, postsState);
    }),
    on(postsActions.updatePostSuccess, (postsState, { post }) => {
        return postsAdapter.updateOne(post, postsState);
    })
);
