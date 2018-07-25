import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

import { HttpClient } from '@angular/common/http';
import { Observable, } from 'rxjs';
import {map, catchError, tap} from 'rxjs/operators';
import { Todo } from './todo';

const apiUrl=environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http:HttpClient
  ) { }

  public getAllTodos():Observable<Todo[]>{
    return this.http.get<Todo[]>(apiUrl+"/todos").pipe(
      map(response=>
            response.map(todo=>new Todo(todo))
      ),
    catchError(this.handleError)
  )}

  public getTodoById(id:number):Observable<Todo>{
    return this.http.get<Todo>(`${apiUrl}/todos/${id}`)
      .pipe(
        map(response=>new Todo(response)),
      catchError(this.handleError))
  }

  public createTodo(todo:Todo):Observable<Todo>{
    return this.http.post<Todo>(`${apiUrl}/todos`,todo)
      .pipe(
        map(response=>new Todo(response)),
        catchError(this.handleError))
  }

  public updateTodo(todo:Todo):Observable<Todo>{
    return this.http.put<Todo>(`${apiUrl}/todos/${todo.id}`,todo)
      .pipe(
        map(response=>new Todo(response)),
        catchError(this.handleError)
      )
  }

  public deleteTodoByid(id:number):Observable<null>{
    return this.http.delete(`${apiUrl}/todos/${id}`)
    .pipe(
      map(response=>null),
      catchError(this.handleError)

    )
  }

  private handleError(error:Response|any){
    console.error("apiservice::error",error)
    return Observable.throw(error)
  }
}
