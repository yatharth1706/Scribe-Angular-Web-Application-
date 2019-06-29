import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import {LoginComponent} from './login/login.component';
import { MyblogsComponent } from './myblogs/myblogs.component';
import { YashGuard } from './yash.guard';
import {HomeComponent} from './home/home.component';
import {ViewComponent} from './view/view.component';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

const routes: Routes = [{
  path: '', component: HomeComponent
},{
  path:'login', component: LoginComponent
},
{ path:'signup', component: SignupComponent},
{path: 'myBlogs', component: MyblogsComponent, canActivate: [YashGuard]},
{path: 'profile/:id', component: ProfileComponent},
{path: 'edit-profile/:id', component: EditProfileComponent},
{path: 'view/:postId', component: ViewComponent },
{path:'**', redirectTo: 'login'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
