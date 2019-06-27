import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { MyblogsComponent } from './myblogs/myblogs.component';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { NgxEditorModule } from 'ngx-editor';
import { HttpClientModule } from '@angular/common/http';
import { DisplayPostComponent } from './display-post/display-post.component';
import { ViewComponent } from './view/view.component';
import { CommentsComponent } from './comments/comments.component';



  // Your web app's Firebase configuration
  let config = {
    apiKey: "AIzaSyCvsocvSXlFaAAjNwzdmxeuPUfv8PXtKvE",
    authDomain: "scribe-bf4d4.firebaseapp.com",
    databaseURL: "https://scribe-bf4d4.firebaseio.com",
    projectId: "scribe-bf4d4",
    storageBucket: "scribe-bf4d4.appspot.com",
    messagingSenderId: "1052688696801",
    appId: "1:1052688696801:web:55eb8534194fcdb4"
  };

  firebase.initializeApp(config);

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    MenuComponent,
    MyblogsComponent,
    HomeComponent,
    PostsComponent,
    DisplayPostComponent,
    ViewComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxEditorModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
