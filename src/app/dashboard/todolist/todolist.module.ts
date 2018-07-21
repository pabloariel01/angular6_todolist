import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodolistRoutingModule } from './/todolist-routing.module';
import { TodolistComponent } from './todolist.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    TodolistRoutingModule,
    FormsModule
  ],
  declarations: [TodolistComponent]
})
export class TodolistModule { }
