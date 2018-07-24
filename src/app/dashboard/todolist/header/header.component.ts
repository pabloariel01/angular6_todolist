import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../../todo';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  newTodo:Todo =new Todo()
  @Output() add:EventEmitter<Todo>=new EventEmitter();
  constructor() { 
  
  }

  ngOnInit() {
  }
  
  addTodo(){
    this.add.emit(this.newTodo)
    this.newTodo=new Todo()

  }
}
