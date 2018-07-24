import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Todo } from '../../../todo';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input() todo:Todo;
  @Output() toggleComplete:EventEmitter<Todo>=new EventEmitter();
  @Output() remove:EventEmitter<Todo>=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onToggleComplete(todo:Todo){
    this.toggleComplete.emit(todo)
  }

  onRemoveTodo(todo:Todo){
    this.remove.emit(todo)
  }
}
