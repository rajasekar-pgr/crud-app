import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => AuthModule,
    component: AuthLayoutComponent
  }

 
];


@NgModule({
  imports: [RouterModule.forRoot(routes /*, { enableTracing: true}*/)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
