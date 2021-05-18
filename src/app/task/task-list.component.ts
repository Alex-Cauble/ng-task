import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  template: `
    <div class="card p-4 center">
      <app-task-list-item></app-task-list-item>
    </div>
  `,
  styles: [
    `
      .center {
        display: block;
        max-width: 800px !important;
        margin: 0 auto !important;
      }
    `,
  ],
})
export class TaskListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
