import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component } from '@angular/core';
import { Model, TodoItem } from './model';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  todoitems$ :Observable<any> = this.http.get('/api/todoitems');
  constructor(private http: HttpClient) {

 http.get(' http://localhost:3000/todoitems')
    .subscribe(response=>{
      console.log(response);
    })




  }

  // model = new Model();
  // isDisplay=false;

  // getItems(){
  //   if (this.isDisplay){
  //     return this.model.items;
  //   }
  //   return this.model.items.filter((item:any) => !item.action);

  // }

  // addItem(value:any){
  //   if(value!=""){
  //     //not completed task so added false in line 25
  //     this.model.items.push(new TodoItem(value,false))
  //   }
  // }

  // deleteItem(){

  // }
}
