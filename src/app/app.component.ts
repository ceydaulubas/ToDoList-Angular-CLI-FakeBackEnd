import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Model, TodoItem } from './model';


import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent  {

  constructor(private http: HttpClient) {
  }
  model = new Model();
  isDisplay = false;

  /* GET ALL todoitems*/
  todoitems$: Observable<any> = this.http.get('/api/todoitems');

  /* ADD todoitems */

  addItem(value: any) {
    if (value != "") {
      console.log("false")
    }
  }

  /* DELETE todoitem id*/

  deleteTodoItem() {
    this.http.delete("/api/todoitems/317")
    .subscribe(
        (val) => {
            console.log("DELETE call successful value returned in body",
                        val);
        },
        response => {
            console.log("DELETE call in error", response);
        },
        () => {
            console.log("The DELETE observable is now completed.");
        });
}

}

