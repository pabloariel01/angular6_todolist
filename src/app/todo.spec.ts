import { Todo } from './todo';

describe('Todo', () => {
  it('should create an instance', () => {
    expect(new Todo()).toBeTruthy();
  });

  it("should accept params in constructor",()=>{
    let todo=new Todo({
      title:'todo test',
      done:true
    })

    expect(todo.title).toEqual('todo test');
    expect(todo.done).toEqual(true)
  })



});
