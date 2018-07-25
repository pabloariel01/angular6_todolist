import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../todo.service';
import { Todo } from '../../todo';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent implements OnInit {
  todos:Todo[]=[];

  constructor(
    private todoService:TodoService
  ) { 
  }

  ngOnInit() {
    this.todoService.getAll()
      .subscribe(todos=>this.todos=todos)
  }
  
  addTodo(todo:Todo){
    this.todoService.add(todo)
      .subscribe(newtodo=>this.todos=this.todos.concat(newtodo))

  }

  toggleComplete(todo){
    this.todoService.toggleComplete(todo)
      .subscribe(changedtodo=>todo=changedtodo)
  }
  
  removeTodo(todo){
    this.todoService.delete(todo.id)
      .subscribe(_=>{this.todos=this.todos.filter(t=>t.id!==todo.id)})
  }


}
