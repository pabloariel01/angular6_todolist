import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';


const routes:Routes=[
  {
    path:'',
    component:DashboardComponent,
    children:[
      {path:'',loadChildren:'./todolist/todolist.module#TodolistModule'}

    ]
  }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [],
  exports:[RouterModule]
})
export class DashboardRoutingModule { }
