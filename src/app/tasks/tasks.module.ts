// Angular Modules
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Custom Modules
import { SharedModule } from '../ui/shared.module';

// Components
import { TasksComponent } from './tasks.component';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';

@NgModule({
  declarations: [TasksComponent, TaskComponent, NewTaskComponent],
  imports: [FormsModule, CommonModule, SharedModule],
  exports: [TasksComponent],
})
export class TasksModule {}
