import { tasksService } from "../Services/TasksService.js"

export class TasksController{
  constructor() {
    
  }
  createTask(listItemId) {
    event.preventDefault()
    let form = event.target
    
    let taskData = {
      name: form.taskName.value,
      listItemid: listItemId
    }
    console.log('yee from tk contoller')
    tasksService.createTask(taskData)
  }

}

