import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskViewComponent } from './task-view.component';
import { AddTaskComponent } from './add-task.component';
import { TaskListComponent } from './task-list.component';
import { TaskListItemComponent } from './task-list-item.component';

@NgModule({
  declarations: [TaskViewComponent, AddTaskComponent, TaskListComponent, TaskListItemComponent],
  imports: [CommonModule],
})
export class TaskModule {}
