import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../todo.service';
import { Todo } from '../../todo';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
  providers:[TodoService]
})
export class TodolistComponent implements OnInit {

  newTodo:Todo=new Todo()
  constructor(private todoService:TodoService) { 
  
  }

  ngOnInit() {
  }
  
  addTodo(){
    this.todoService.add(this.newTodo)
    this.newTodo=new Todo()

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
