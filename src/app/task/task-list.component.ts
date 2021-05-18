import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  template: `
    <p>task-list works!</p>
    <app-task-list-item></app-task-list-item>
  `,
  styles: [],
})
export class TaskListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
