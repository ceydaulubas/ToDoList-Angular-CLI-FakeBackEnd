import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Model, TodoItem } from './model';


import { fromEvent, Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  constructor(private http: HttpClient) {
  }
  model = new Model();
  isDisplay = false;

  /* GET ALL todoitems*/
  todoitems$: Observable<any> = this.http.get('/api/todoitems');

  /* ADD todoitems */

  addTodoItem(id: string) {
    // var adress = "/api/todoitems/";
    // this.http.post(adress + { id: "", task: "", isDone: "" } )
    //   .subscribe(
    //     (val) => {
    //       console.log("DELETE call successful value returned in body", val);
    //     },
    //     response => {
    //       console.log("DELETE call in error", response);
    //     },
    //     () => {
    //       console.log("The DELETE observable is now completed.");
    //     });

    // this.http.post<any>("/api/todoitems/", { id: "", task: "", isDone: "" }).subscribe({
    //   next: data => {
    //     this.postId = data.id;
    //   },
    //   error: error => {
    //       this.errorMessage = error.message;
    //       console.error('There was an error!', error);
    //   }
    // })
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

}
