import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  list:string[];
  item:string;
  itm:string;
  constructor() { 
    this.list=[]
    this.itm=""
  }

  ngOnInit() {
  }

  addItem(item){
    console.log(this.itm)
    this.list.push(item)
    this.itm='';

  }

}
