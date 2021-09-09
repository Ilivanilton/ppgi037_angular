import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from "./authentication/components/login/login.component";
import { CreateAccountComponent } from "./authentication/components/create-account/create-account.component";

const routes: Routes = [
  {path: 'auth', component: LoginComponent},
  {path: 'auth/login', component: LoginComponent},
  {path: 'auth/create', component: CreateAccountComponent},
  {path:'', redirectTo:'auth',pathMatch:'full'},
  {path:'**', redirectTo:'auth', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
