import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';
import { Observable, of } from 'rxjs';
import { map, mergeMap, switchMap, concatMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = [
    {
      id: 1,
      name: 'Yusuf',
      description: 'Practicing',
      dueDate: new Date(500000),
      status: true,
    },
    {
      id: 2,
      name: 'BloodPrince',
      description: 'Practicing Harder',
      dueDate: new Date(6000),
      status: false,
    },
    {
      id: 3,
      name: 'BloodKing',
      description: 'Practicing Harder Harder',
      dueDate: new Date(70000),
      status: false,
    },
  ];

  // Get tasks as an observable
  getTasks(): Observable<Task[]> {
    return of(this.tasks);
  }

  addTask(task: Task): void {
    this.tasks.push(task);
    console.log(this.tasks);
  }

  changeTaskStatus(id: number): void {
    const task = this.tasks.find((t) => t.id === id);
    if (task) {
      task.status = !task.status;
    }
  }

  getTaskDetailsUsingMergeMap(id: number): Observable<Task | null> {
    return of(this.tasks).pipe(
      mergeMap((tasks) => of(...tasks)), // Convert tasks to obserb
      map((task) => (task.id === id ? task : null)) 
    );
  }

  getTaskDetailsUsingSwitchMap(id: number): Observable<Task | null> {
    return of(id).pipe(
      switchMap((taskId) =>
        of(this.tasks).pipe(
          map((tasks) => tasks.find((task) => task.id === taskId) || null)
        )
      )
    );
  }

  getTaskDetailsUsingConcatMap(id: number): Observable<Task | null> {
    return of(id).pipe(
      concatMap((taskId) =>
        of(this.tasks).pipe(
          map((tasks) => tasks.find((task) => task.id === taskId) || null)
        )
      )
    );
  }
}
