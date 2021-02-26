import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Model, TodoItem } from './model';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

todoitems$ :Observable<any> = this.http.get('/api/todoitems');
  constructor(private http: HttpClient) {
  }


  model = new Model();
  isDisplay=false;

  getItems(){
    if (this.isDisplay){
      return this.todoitems$ ;
    }
    return this.todoitems$ ;
    //this.model.items.filter((item:any) => !item.action);

  }

  addItem(value:any){
    if(value!=""){
      //not completed task so added false in line 25
      console.log("false")
      this.http.post('/api/todoitems',value)

      // this.model.items.push(new TodoItem(value.id,value.task,value.isDone))
    }
  }

  // deleteItem(){

  }

