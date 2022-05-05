import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ReactiveDrivenComponent } from './reactive-driven/reactive-driven.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';

const routes: Routes = [{path: 'register', component:TemplateDrivenComponent},
{path:'login', component:LoginComponent},
{path:'sign-up',component:ReactiveDrivenComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
