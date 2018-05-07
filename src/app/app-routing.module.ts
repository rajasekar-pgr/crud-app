import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => AuthModule,
    component: AuthLayoutComponent
  },
  {
    path: '',
    component: LayoutComponent,
      children: [
      { path: 'dashboard', component: DashboardComponent }
  
    ]
  },
  { path: '**', redirectTo: '' }

 
];


@NgModule({
  imports: [RouterModule.forRoot(routes /*, { enableTracing: true}*/)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
