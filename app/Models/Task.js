import { generateId } from "../Utils/generateId.js";


export class Task{
  constructor(taskItem) {
    this.name = taskItem.name;
    this.id = taskItem.id || generateId();

  }

  get taskTemplate() {
    return /*html*/`
     <ul>
    <li>${this.name}</li> 
    </ul>`
  }
}