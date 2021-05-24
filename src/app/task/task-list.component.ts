import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskService } from '../services/task.service';
import Task from 'src/app/class/task.class';

@Component({
  selector: 'app-task-list',
  template: `
    <div class="card p-4 center">
      <app-task-list-item
        class="list-item"
        [task]="task"
        *ngFor="let task of tasks$ | async"
      >
      </app-task-list-item>
    </div>
  `,
  styles: [
    `
      .center {
        display: block;
        max-width: 800px;
        margin: 0 auto;
      }

      app-task-list-item {
        background-color: #2160c4;
      }
    `,
  ],
})
export class TaskListComponent {
  tasks$: Observable<Task[]> = this.taskService.tasks$;

  constructor(private taskService: TaskService) {}
}
