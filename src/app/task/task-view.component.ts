import { Component } from '@angular/core';

@Component({
  selector: 'app-task-view',
  template: `
    <app-navbar
      (showSearchTaskEvent)="showSearchTask()"
      (showAddTaskEvent)="showAddTask()"
    >
    </app-navbar>

    <!-- <app-search-task
      class="pt-2"
      *ngIf="isSearchTaskShown"
      (close)="closeAddTask()"
    >
    </app-search-task> -->

    <app-add-task class="mt-2" *ngIf="isAddTaskShown" (close)="closeAddTask()">
    </app-add-task>

    <app-task-list class="mt-2"> </app-task-list>
  `,
})
export class TaskViewComponent {
  isAddTaskShown = false;
  isSearchTaskShown = false;

  constructor() {}

  showAddTask() {
    this.isAddTaskShown = true;
  }

  closeAddTask() {
    this.isAddTaskShown = false;
  }

  showSearchTask() {
    this.isSearchTaskShown = true;
  }

  closeSearchTask() {
    this.isSearchTaskShown = false;
  }
}
