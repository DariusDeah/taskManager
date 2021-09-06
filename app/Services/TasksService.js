import { ProxyState } from "../AppState.js";
import { Task } from "../Models/Task.js";


class TasksService{
  constructor() {
    // ProxyState.on('tasks', saveState)
 
  
  }

  createTask(taskData) {
    ProxyState.tasks = [...ProxyState.tasks,new Task(taskData)]
  }
}

export const tasksService = new TasksService