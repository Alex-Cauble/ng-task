import { Component, Input, OnInit } from '@angular/core';
import Task from 'src/app/class/task.class';
import { TaskStatus } from '../types/task-status.enum';

@Component({
  selector: 'app-task-list-item',
  template: `
    <div class="row row-1">
      <h4 class="is-size-4 is-capitalized has-text-weight-semibold">
        {{ task.title }}
      </h4>
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
  @Input() task: Task = {
    id: 1,
    title: 'Test Title',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quam error nesciunt incidunt voluptatibus aperiam expedita `,
    status: TaskStatus.OPEN,
  };

  options: Array<{ value: string; text: string }> = [
    { value: 'OPEN', text: 'Open' },
    { value: 'IN_PROGRESS', text: 'In Progress' },
    { value: 'CLOSED', text: 'Closed' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
