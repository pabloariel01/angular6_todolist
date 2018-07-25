import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(
    private api:ApiService
  ) { }

  add(todo:Todo):Observable<Todo>{
    return this.api.createTodo(todo)
  }

  delete(id:number):Observable<Todo>{
    return this.api.deleteTodoByid(id)
  }

  update(todo:Todo):Observable<Todo>{
    return this.api.updateTodo(todo)
  }

  getAll():Observable<Todo[]>{
    return this.api.getAllTodos()
  }

  getById(id:number):Observable<Todo>{
    return this.api.getTodoById(id)
  }

  toggleComplete(todo:Todo):Observable<Todo>{
    todo.complete=!todo.complete;
    return this.api.updateTodo(todo)
  }
}
