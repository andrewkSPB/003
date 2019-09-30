import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { PostComponent } from './post/post.component';
import { AllPostsComponent } from './all-posts/all-posts.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'create-post', component: PostEditComponent},
  {path: 'create-account', component: CreateUserComponent},
  {path: '', component: AllPostsComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
