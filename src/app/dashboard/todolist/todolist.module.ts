import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodolistRoutingModule } from './/todolist-routing.module';
import { TodolistComponent } from './todolist.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    TodolistRoutingModule,
    FormsModule
  ],
  declarations: [TodolistComponent, HeaderComponent, ListComponent, ListItemComponent, FooterComponent]
})
export class TodolistModule { }
