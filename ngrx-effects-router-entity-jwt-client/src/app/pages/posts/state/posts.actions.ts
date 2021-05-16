import { createAction, props } from '@ngrx/store';
import { IPost } from 'src/app/shared';
import { PostsActions } from './posts-actions.enum';

export const loadPosts = createAction(
    PostsActions.LOAD_POSTS
);

export const loadPostsSuccess = createAction(
    PostsActions.LOAD_POSTS_SUCCESS,
    props<{ posts: Array<IPost> }>()
);

export const addPost = createAction(
    PostsActions.ADD_POST,
    props<{ post: IPost }>()
);

export const addPostSuccess = createAction(
    PostsActions.ADD_POST_SUCCESS,
    props<{ post: IPost }>()
);

export const deletePost = createAction(
    PostsActions.DELETE_POST,
    props<{ postId: string }>()
);

export const deletePostSuccess = createAction(
    PostsActions.DELETE_POST_SUCCESS,
    props<{ postId: string }>()
);

export const updatePost = createAction(
    PostsActions.UPDATE_POST,
    props<{ post: IPost }>()
);

export const updatePostSuccess = createAction(
    PostsActions.UPDATE_POST_SUCCESS,
    props<{ post: IPost }>()
);
