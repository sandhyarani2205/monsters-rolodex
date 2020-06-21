import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './login/login-form.component';
import { SignUpComponent } from './signup/sign-up.component';
import { InvalidPageComponent } from './page-not-found/invalid-page.component';
import { Authservice } from './auth.service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginFormComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'not-found', component: InvalidPageComponent },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [Authservice]
})
export class AuthRoutingModule { }