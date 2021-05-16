import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { IPost } from '@shared/index';

export interface PostsState extends EntityState<IPost> {
}

export const postsAdapter = createEntityAdapter<IPost>();
