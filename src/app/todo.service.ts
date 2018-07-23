import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos:Todo[]=[];

  constructor() { }

  add(todo:Todo){
    if(!todo.id){
      todo.id=this.todos.length
    }
    this.todos.push(todo)
    return this
  }

  delete(id:number){
    this.todos=this.todos.filter(todo=>todo.id!==id)
    return this;
  }

  update(id:number,values:Object={}){
    let todo=this.getById(id);
    if(!todo){return null}
    Object.assign(todo,values)
    return todo;
  }

  getAll():Todo[]{
    return this.todos;
  }

  getById(id:number):Todo{
    return this.todos
      .filter(todo=>todo.id===id)
      .pop()
  }

  toggleComplete(todo:Todo){
    let update= this.update(todo.id,{
      done:!todo.done
    })
    return update;
  }
}
