import { stringify } from "@angular/compiler/src/util";

export class Model {
  items:any;

  constructor() {
    this.items = [
    ]
  }
}

export class TodoItem {
  id:string;
  task:string;
  isDone:boolean;

  constructor(id:string,task:string, isDone:boolean) {
    this.id= id;
    this.task= task;
    this.isDone=isDone;
  }
}
