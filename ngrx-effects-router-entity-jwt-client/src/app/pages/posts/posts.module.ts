import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { PostsRoutingModule } from './posts-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './components/posts.component';
import * as fromPosts from './state';
import { PostItemComponent } from './components/post-list/post-item/post-item.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditPostsComponent } from './components/edit-posts/edit-posts.component';

import { MatSnackBarModule } from '@angular/material/snack-bar';

const materials = [
    MatSnackBarModule
];
@NgModule({
    declarations: [
        PostsComponent,
        PostItemComponent,
        AddPostComponent,
        PostListComponent,
        EditPostsComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        PostsRoutingModule,
        StoreModule.forFeature(fromPosts.postsFeatureKey, fromPosts.postsReducer),
        EffectsModule.forFeature([fromPosts.PostsEffects]),
        materials
    ]
})
export class PostsModule {

}
