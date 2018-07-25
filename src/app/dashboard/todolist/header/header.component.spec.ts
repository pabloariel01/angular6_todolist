import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../../todo';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports:[FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a new todo',async(()=>{
    expect(component.newTodo instanceof Todo).toBeTruthy()
  }))

  it("should say taks",async(()=>{
    let compiled=fixture.debugElement.nativeElement;
    expect(compiled.querySelector("h3").textContent).toEqual("Tasks")
  }))
});
