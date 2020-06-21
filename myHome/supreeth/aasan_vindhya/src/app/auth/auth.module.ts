import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login/login-form.component';
import { InvalidPageComponent } from './page-not-found/invalid-page.component';
import { SignUpComponent } from './signup/sign-up.component';
import { FormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { AppRoutingModule } from '../app-routing.module';
import { MaterialModule } from '../material.module';


@NgModule({
  declarations: [
    LoginFormComponent,
    InvalidPageComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule,
  ],


})
export class AuthModule { }
