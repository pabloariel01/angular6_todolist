import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from "@angular/router";
import { TodolistComponent } from './dashboard/todolist/todolist.component';
import { TestComponent } from './test/test.component';

const routes:Routes=[
  // {path:'' ,loadChildren:'./dashboard/dashboard.module#DashboardModule'},
  // {path:'asd' ,component:TodolistComponent},
  {path:'asd' ,component:TestComponent},
  {path:'test' ,component:TestComponent},
  {path:'dashboard' ,loadChildren:'./dashboard/dashboard.module#DashboardModule'},
  {path:'**' ,redirectTo:''},
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }