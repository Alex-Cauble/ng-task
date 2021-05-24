import { Component, Input, OnInit } from '@angular/core';
import Task from 'src/app/class/task.class';
import { TaskStatus } from '../types/task-status.enum';

@Component({
  selector: 'app-task-list-item',
  template: `
    <div class="row row-1">
      <h5 class="is-size-4 is-capitalized has-text-weight-semibold">
        {{ task.title }}
      </h5>
      <div class="select">
        <select>
          <option *ngFor="let option of options" [value]="option.value">
            {{ option.text }}
          </option>
        </select>
      </div>
    </div>
    <div class="row row-2">
      <p>{{ task.description }}</p>
    </div>
  `,
  styles: [
    `
      .row {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }
    `,
  ],
})
export class TaskListItemComponent implements OnInit {
  @Input() task!: Task;

  options = [
    { value: 'OPEN', text: 'Open' },
    { value: 'IN_PROGRESS', text: 'In Progress' },
    { value: 'CLOSED', text: 'Closed' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
