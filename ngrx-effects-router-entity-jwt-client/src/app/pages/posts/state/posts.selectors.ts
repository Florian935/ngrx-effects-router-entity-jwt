import { postsAdapter } from './posts.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPosts from '@posts/state/posts.reducers';
import { PostsState } from '@posts/state/posts.state';
import * as fromRouter from '@app/state/router/router.selectors';
import { RouterUrlState } from '@app/state';
import { IPost } from '@app/shared';
import { Dictionary } from '@ngrx/entity';

export const postsSelectors = postsAdapter.getSelectors();

export const selectPostsState = createFeatureSelector<PostsState>(fromPosts.postsFeatureKey);

export const selectPosts = () => createSelector(
    selectPostsState,
    postsSelectors.selectAll
);

export const selectPostsEntities = () => createSelector(
    selectPostsState,
    postsSelectors.selectEntities
);

export const selectPostById = () => createSelector(
    selectPostsEntities(),
    fromRouter.selectCurrentRoute(),
    (posts: Dictionary<IPost>, routerState: RouterUrlState) => {
        return posts ? posts[routerState.params.id] : null;
    }
);
