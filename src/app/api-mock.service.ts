import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class ApiMockService {

  constructor() { }
  
  public getAllTodos():Observable<Todo[]>{
    return of([
      new Todo({id: 1, title: 'Read article', complete: false})
    ]) 
  }

  public getTodoById(id:number):Observable<Todo>{
    return of(
      new Todo({id: 1, title: 'Read article', complete: false})
    ) 
  }

  public createTodo(todo:Todo):Observable<Todo>{
    return of(
      new Todo({id: 1, title: 'Read article', complete: false})
    ) 
  }

  public updateTodo(todo:Todo):Observable<Todo>{
    return of(
      new Todo({id: 1, title: 'Read article', complete: false})
    ) 
  }

  public deleteTodoByid(id:number):Observable<null>{
    return of(null)
  }
  
}
