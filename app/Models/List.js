import {generateId} from "../Utils/generateId.js"

export class List{
  constructor(listData) {
    this.id = listData.id || generateId();
    this.title = listData.title;
    // this.task = listData.task;
    this.color = listData.color
    
  }

  get ListTemplate() {
    return /*html*/`
<div class="col-lg-4 ms-5">
  <div class="card mt-3">
        <h5 class="card-header d-flex justify-content-between pt-4 pb-4 ${this.color} ">${this.title}<i
       class="fas fa-times-circle"></i>
        </h5>
    <div class="card-body">
      
   </div>
   <form action="submit" onsubmit="app.tasksController.createTask()" class="text-center pb-3">
     <input class="p-1" type="text" name="taskName">
     <i class="fas fa-plus-circle"></i>
   </form>
  </div>
 </div>
`}
}