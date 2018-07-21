import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TodolistComponent } from './todolist.component';


const routes:Routes=[
  {path:'',component:TodolistComponent}
]
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [],
  exports:[RouterModule]
})
export class TodolistRoutingModule { }
