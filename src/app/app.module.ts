import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { CommentComponent } from './comment/comment.component';
import { LoginComponent } from './login/login.component';
import { PostComponent } from './post/post.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { SinglePostComponent } from './single-post/single-post.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentComponent,
    LoginComponent,
    PostComponent,
    PostEditComponent,
    CreateUserComponent,
    AllPostsComponent,
    SinglePostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
