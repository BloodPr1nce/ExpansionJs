import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root' //"any" then any lazy loaded used will be created as seperated instance in case of multiple modules
})
export class TaskService {

  private tasks: Task[] = [
    {
    id: 1,
    name: "Yusuf",
    description: "Practicing",
    dueDate: new Date(500000),
    status: true,
    },
    {
      id: 2,
      name: "BloodPrince",
      description: "Practicing HArder",
      dueDate: new Date(6000),
      status: false,
    },
    {
      id: 3,
      name: "BloodKing",
      description: "Practicing HArder Harder",
      dueDate: new Date(70000),
      status: false,
    }
  ] 

  getTasks() {
    return this.tasks;
  }

  

  addTask(task: Task) {
    this.tasks.push(task);
    console.log(this.tasks);
  }

  changeTaskStatus(id: number) {
    const referencedTask = this.tasks.find((dummy) => {
      return dummy.id === id;
    });

    if(referencedTask)
    referencedTask.status = !referencedTask?.status;
  }

}
