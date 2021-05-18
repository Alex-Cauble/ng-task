import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list-item',
  template: `
    <p>
      task-list-item works!
    </p>
  `,
  styles: [
  ]
})
export class TaskListItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
