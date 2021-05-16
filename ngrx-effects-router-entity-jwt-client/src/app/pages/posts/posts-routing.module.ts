import { EditPostsComponent } from './components/edit-posts/edit-posts.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { PostsComponent } from './components/posts.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
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
    }
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
