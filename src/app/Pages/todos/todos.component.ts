import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Model, TodoItem } from '../../model';

import { fromEvent, Observable } from 'rxjs';

import * as uuid from 'uuid';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class AppComponent {

  constructor(private http: HttpClient) {
  }
  // model = new Model();
  isDisplay = false;

  /* GET ALL todoitems*/
  todoitems$: Observable<any> = this.http.get('/api/todoitems');

  /* ADD todoitems */

  addTodoItem(task: string) {
    var adress = "/api/todoitems/";
    const myId = uuid.v4();
    this.http.post<any>(adress ,{ id:myId , task:task, isDone: false })
      .subscribe(
        (val) => {
          console.log("ADD call successful value returned in body", val);
          window.location.reload();
        },
        response => {
          console.log("ADD call in error", response);
          window.location.reload();
        },
        () => {
          console.log("The ADD observable is now completed.");
          window.location.reload();
        });
  }

  /* DELETE todoitem id*/

  deleteTodoItem(id: string) {
    var adress = "/api/todoitems/";
    this.http.delete(adress + id)
      .subscribe(
        (val) => {
          console.log("DELETE call successful value returned in body", val)
          window.location.reload();
        },
        response => {
          console.log("DELETE call in error", response)
          window.location.reload();
        },
        () => {
          console.log("The DELETE observable is now completed.")
          window.location.reload();
        });
  }

  /* CHANGE isDone status*/

changeIsDone(id: string, task:string, isDone:boolean ){

  var adress = "/api/todoitems/";
  this.http.put(adress + id,{task:task, isDone:!isDone})
  .subscribe(
    (val) => {
      console.log("PUT call successful value returned in body", val)
      window.location.reload();
    },
    response => {
      console.log("PUT call in error", response)
      window.location.reload();
    },
    () => {
      console.log("The PUT observable is now completed.")
      window.location.reload();
    });
}

}