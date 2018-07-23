import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodolistComponent } from './todolist.component';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../todo';
import { Compiler } from '@angular/core';


describe('TodolistComponent', () => {
  let component: TodolistComponent;
  let fixture: ComponentFixture<TodolistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[FormsModule],
      declarations: [ TodolistComponent ]
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

  it('should have a newTodo',async(()=>{
    let fixture=TestBed.createComponent(TodolistComponent);
    let app=fixture.debugElement.componentInstance;
    expect(app.newTodo instanceof Todo).toBeTruthy();
  }))

  it('should say tasks in h3 element',async(()=>{
    let fixture=TestBed.createComponent(TodolistComponent);
    let compiled=fixture.debugElement.nativeElement
    expect(compiled.querySelector('h3').textContent).toContain('Tasks')
  }))

});
