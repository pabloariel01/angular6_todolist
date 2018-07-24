import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../../todo';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() todos:Todo[];
  @Output() removeTodo:EventEmitter<Todo>=new EventEmitter();
  @Output() toggleComplete:EventEmitter<Todo>=new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onToggleComplete(todo:Todo){
    this.toggleComplete.emit(todo)
  }
  onRemove(todo:Todo){
    this.removeTodo.emit(todo)
  }

}
