import { Task } from "../Models/Task.js"
import { tasksService } from "../Services/TasksService.js"

export class TasksController{
  constructor() {
    
  }
  createTask(listItemId) {
    event.preventDefault()
    let form = event.target
    
    let taskData = {
      name: form.taskName.value,
      listItemId: listItemId
    }
    tasksService.createTask(taskData)
    console.log(taskData,Task.id)
  }
 

}

