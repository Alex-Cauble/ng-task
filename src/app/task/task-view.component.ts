import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-view',
  template: `
    <app-navbar></app-navbar>
    <app-add-task></app-add-task>
    <app-task-list></app-task-list>
  `,
})
export class TaskViewComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
