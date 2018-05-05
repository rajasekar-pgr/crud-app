import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule } from '@angular/forms';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  imports: [
    CommonModule,FormsModule, AuthRoutingModule
  ],
  declarations: [ SigninComponent, SignupComponent]
})
export class AuthModule { 
  constructor(){
  }
}