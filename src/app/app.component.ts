import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users: { id: string; name: string }[] = [];
  selectedUserId?: string;
  newUserName = '';

  // Load tasks from localStorage if available
  constructor() {
    const storedUsers = localStorage.getItem('users');

    // Returned data from localStorage is always a string
    // We need to parse it back to an array of tasks
    if (storedUsers) {
      this.users = JSON.parse(storedUsers);
    }
  }

  // Save the tasks array as a string in localStorage
  private saveUsers() {
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  // Added getter to retrieve the selected user based on selectedUserId
  // The exclamation mark asserts that the result will not be undefined
  get selectedUser() {
    return this.users.find(user => user.id === this.selectedUserId);
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }

  addUser() {
    const name = this.newUserName.trim();
    if (!name) return;

    const newUser = {
      id: Math.random().toString(),
      name,
    };

    this.users.push(newUser);
    this.newUserName = '';
    this.saveUsers();
  }

  onDeleteUser(id: string) {
    this.users = this.users.filter(user => user.id !== id);

    if (this.selectedUserId === id) {
      this.selectedUserId = undefined; // clear selection if deleted
    }

    this.saveUsers();
  }
}
