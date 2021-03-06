import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { fromEvent, Observable } from 'rxjs';

import * as uuid from 'uuid';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  constructor(private http: HttpClient) {
  }

  /* GET ALL todoitems*/
  todoitems$: Observable<any> = this.http.get('/api/todoitems');

  /* ADD todoitems */
  addTodoItem(task: string) {
    var adress = "/api/todoitems/";
    const myId = uuid.v4();
    this.http.post<any>(adress, { id: myId, task: task, isDone: false })
      .subscribe(
        (val) => { // successful
          console.log("ADD call successful value returned in body", val);
          window.location.reload();
        },
        response => { // get error
          console.log("ADD call in error", response);
          window.location.reload();
        },
        () => { // completed
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

  changeIsDone(id: string, task: string, isDone: boolean) {

    var adress = "/api/todoitems/";
    this.http.put(adress + id, { task: task, isDone: !isDone })
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
