import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponentComponent } from './login-component/login-component.component';
import { RegisterComponentComponent } from './register-component/register-component.component';
import { FormComponentComponent } from './form-component/form-component.component';


const routes: Routes = [
// { path: '/', redirectTo: '/login', pathMatch: 'full'},
{ path: 'login', component: LoginComponentComponent },
{path:'register', component: RegisterComponentComponent},
{path:'form', component: FormComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
