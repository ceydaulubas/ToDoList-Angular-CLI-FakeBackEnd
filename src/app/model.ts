import { stringify } from "@angular/compiler/src/util";

export class Model {
  items:any;

  constructor() {
    this.items = [
      new TodoItem("12","study angular", "no"),
    ]
  }
}

export class TodoItem {
  id:string;
  task:string;
  isDone:string;

  constructor(id:string,task:string, isDone:string) {
    this.id= id;
    this.task= task;
    this.isDone=isDone;
  }
}
