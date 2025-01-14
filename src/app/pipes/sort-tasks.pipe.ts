import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../models/task.model';

@Pipe({
  name: 'sortTasks',
  standalone: false
})
export class SortTasksPipe implements PipeTransform {

  transform(task: Task[]): Task[] {
    const sorted: Task[] = [...task];
    
    sorted.sort((a , b) => {
      return a.dueDate.getTime() - b.dueDate.getTime();
    });

    return sorted;
  }
}
