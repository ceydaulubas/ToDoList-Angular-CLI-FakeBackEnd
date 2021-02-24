import { stringify } from "@angular/compiler/src/util";

export class Model {
  title:string;
  items:any;

  constructor() {
    this.title = 'TO DO LIST';
    this.items = [
      new TodoItem("study angular", true),
      new TodoItem("read book", false),
      new TodoItem("write daily", false),
      new TodoItem("play PS5", true)
    ]
  }
}

export class TodoItem {
  description:any;
  action:boolean;

  constructor(description:any, action:boolean) {
    this.description= description;
    this.action=action;
  }
}
