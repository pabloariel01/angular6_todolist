import { TodolistRoutingModule } from './todolist-routing.module';

describe('TodolistRoutingModule', () => {
  let todolistRoutingModule: TodolistRoutingModule;

  beforeEach(() => {
    todolistRoutingModule = new TodolistRoutingModule();
  });

  it('should create an instance', () => {
    expect(todolistRoutingModule).toBeTruthy();
  });
});
