import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() cancelTask = new EventEmitter<void>();
  @Output() addTask = new EventEmitter<NewTaskData>();

  formData = {title: '', summary: '', date: ''};

  onCancel() {
    this.cancelTask.emit();
  }

  onSubmit() {
    this.addTask.emit(this.formData);
  }
}
