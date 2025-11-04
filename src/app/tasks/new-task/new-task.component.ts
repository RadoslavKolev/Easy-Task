import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: false,
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() closeTask = new EventEmitter<void>();

  private readonly tasksService = inject(TasksService);

  formData = {title: '', summary: '', date: ''};

  onCancel() {
    this.closeTask.emit();
  }

  onSubmit() {
    this.tasksService.addTask(this.formData, this.userId);
    this.closeTask.emit();
  }
}
