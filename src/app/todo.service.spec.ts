import { TestBed, inject } from '@angular/core/testing';
import {Todo} from "./todo";
import { TodoService } from './todo.service';

describe('TodoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoService]
    });
  });

  it('should be created', inject([TodoService], (service: TodoService) => {
    expect(service).toBeTruthy();
  }));
  
  describe("get all todos:getall()",()=>{
    it('should return empty object by default',inject([TodoService],(service:TodoService)=>{
      expect(service.getAll()).toEqual([]);
    }))

    it('should return all todos',inject([TodoService],(service:TodoService)=>{
      let todo1=new Todo({title:"test1",done:false})
      let todo2=new Todo({title:"test2",done:true})
      service.add(todo1);
      service.add(todo2);
      expect(service.getAll()).toEqual([todo1,todo2])
    }))
  })
  
  describe("save todos:add()",()=>{
    it('should autoassign ids',inject([TodoService],(service:TodoService)=>{
      let todo1=new Todo({title:"test1",done:false})
      let todo2=new Todo({title:"test2",done:true})
      service.add(todo1);
      service.add(todo2);
      expect(service.getById(0)).toEqual(todo1)
      expect(service.getById(1)).toEqual(todo2)      
    }));

  })

  describe("delete todos:add()",()=>{
    it('should remove todos with correspondig ids',inject([TodoService],(service:TodoService)=>{
      let todo1=new Todo({title:"test1",done:false})
      let todo2=new Todo({title:"test2",done:true})
      service.add(todo1);
      service.add(todo2);
      expect(service.getAll()).toEqual([todo1,todo2])
      service.delete(0)
      expect(service.getAll()).toEqual([todo2])
      service.delete(1)
      expect(service.getAll()).toEqual([])
    }))

    it('shouldnt remove if invalid id',inject([TodoService],(service:TodoService)=>{
      let todo1=new Todo({title:"test1",done:false})
      let todo2=new Todo({title:"test2",done:true})
      service.add(todo1);
      service.add(todo2);
      expect(service.getAll()).toEqual([todo1,todo2])
      service.delete(3)
      expect(service.getAll()).toEqual([todo1,todo2])
    }))

  })

  describe('update()',()=>{

    it('should return the new todo',inject([TodoService],(service:TodoService)=>{
      let todo1=new Todo({title:"test1",done:false})
      service.add(todo1);
      let updatedTodo=service.update(0,{title:'new title'})
      expect(updatedTodo.title).toEqual('new title')
    }))

    it('should return null if the id doesnt exist',inject([TodoService],(service:TodoService)=>{
      let todo1=new Todo({title:"test1",done:false})
      service.add(todo1);
      let updatedTodo=service.update(5,{title:'new title'})
      expect(updatedTodo).toEqual(null)
    }))
    
  })
  
  describe('toggleComplete',()=>{
    it('should change the done status',inject([TodoService],(service:TodoService)=>{
      let todo1=new Todo({title:"test1",done:false})
      service.add(todo1);
      let updated=service.toggleComplete(todo1)
      expect(updated.done).toEqual(true)
      service.toggleComplete(todo1)
      expect(updated.done).toEqual(false)

    }))
  })



});

