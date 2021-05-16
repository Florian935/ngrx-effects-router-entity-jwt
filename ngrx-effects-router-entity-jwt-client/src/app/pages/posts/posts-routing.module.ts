import { EditPostsComponent } from '@posts/components/edit-posts/edit-posts.component';
import { PostListComponent } from '@posts/components/post-list/post-list.component';
import { AddPostComponent } from '@posts/components/add-post/add-post.component';
import { PostsComponent } from '@posts/components/posts.component';
import { DetailOnePostComponent } from '@posts/components/detail-one-post/detail-one-post.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
    { path: 'details/:id', component: DetailOnePostComponent },
    {
        path: '', component: PostsComponent,
        children: [
            { path: '', redirectTo: 'list' },
            {
                path: 'list',
                component: PostListComponent,
                children: [
                    { path: 'edit/:id', component: EditPostsComponent }
                ]
            },
            { path: 'add', component: AddPostComponent }
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class PostsRoutingModule {

}
