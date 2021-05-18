import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-view',
  template: `
    <div
      class="container is-max-desktop is-justify-content-center flex-center mt-4"
    >
      <div class="card p-6">
        <app-add-task></app-add-task>
        <app-task-list></app-task-list>
      </div>
    </div>
  `,
  styles: [
    `
      .card {
        max-width: 500px;
        margin: auto 0;
      }
    `,
  ],
})
export class TaskViewComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
