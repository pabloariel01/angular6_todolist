import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../todo.service';
import { Todo } from '../../todo';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent implements OnInit {


  constructor(private todoService:TodoService) { 
  }

  ngOnInit() {
  }
  
  addTodo(todo:Todo){
    this.todoService.add(todo)

  }

  toggleComplete(todo){
    this.todoService.toggleComplete(todo)
  }
  
  removeTodo(todo){
    console.log(todo)
    this.todoService.delete(todo.id)
  }

  getTodos(){
    return this.todoService.getAll();
  }

}
