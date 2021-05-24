import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskViewComponent } from './task-view.component';
import { AddTaskComponent } from './add-task.component';
import { TaskListComponent } from './task-list.component';
import { TaskListItemComponent } from './task-list-item.component';
import { NavbarModule } from '../navbar/navbar.module';
import { SearchTaskComponent } from './search-task.component';

@NgModule({
  declarations: [
    TaskViewComponent,
    AddTaskComponent,
    TaskListComponent,
    TaskListItemComponent,
    SearchTaskComponent,
  ],
  imports: [CommonModule, NavbarModule],
})
export class TaskModule {}
