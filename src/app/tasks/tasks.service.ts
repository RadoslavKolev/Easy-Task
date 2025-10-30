import { Injectable } from "@angular/core";
import { NewTaskData } from "./task/task.model";
import { DUMMY_TASKS } from "./dummy-tasks";

@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks = DUMMY_TASKS;

  // Load tasks from localStorage if available
  constructor() {
    const storedTasks = localStorage.getItem('tasks');

    // Returned data from localStorage is always a string
    // We need to parse it back to an array of tasks
    if (storedTasks) {
      this.tasks = JSON.parse(storedTasks);
    }
  }

  // Save the tasks array as a string in localStorage
  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  // Get all tasks for a specific user
  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  // Add a new task for a specific user
  addTask(taskData: NewTaskData, userId: string) {
    this.tasks.unshift({
      id: Date.now().toString(),
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
    });

    this.saveTasks();
  }

  // Remove a task by its ID
  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTasks();
  }
}
