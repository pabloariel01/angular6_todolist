import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodolistComponent } from './todolist.component';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../todo';
import { Compiler, NO_ERRORS_SCHEMA } from '@angular/core';
import { TodoService } from '../../todo.service';
import { ApiService } from '../../api.service';
import { ApiMockService } from '../../api-mock.service';


describe('TodolistComponent', () => {
  let component: TodolistComponent;
  let fixture: ComponentFixture<TodolistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[FormsModule],
      declarations: [ TodolistComponent ],
      schemas:[
        NO_ERRORS_SCHEMA
      ],
      providers:[
        TodoService,
        {
          provide:ApiService,
          useClass:ApiMockService
        }
      ]    

      
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // pasa a ser responsabilidad de header
  // it('should have a newTodo',async(()=>{
  //   let fixture=TestBed.createComponent(TodolistComponent);
  //   let app=fixture.debugElement.componentInstance;
  //   expect(app.newTodo instanceof Todo).toBeTruthy();
  // }))
  // it('should say tasks in h3 element',async(()=>{
  //   let fixture=TestBed.createComponent(TodolistComponent);
  //   let compiled=fixture.debugElement.nativeElement
  //   expect(compiled.querySelector('h3').textContent).toContain('Tasks')
  // }))

});
