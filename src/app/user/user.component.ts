import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const getRandomUser = () => Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  selectedUser = signal(DUMMY_USERS[getRandomUser()]);
  imagePath = computed(() => `../../assets/users/${this.selectedUser().avatar}`);

  //* Since we now use "Signals" we don't need this getter anymore
  // get imagePath() {
  //   return `../../assets/users/${this.selectedUser.avatar}`;
  // }

  onSelectUser() {
    this.selectedUser.set(DUMMY_USERS[getRandomUser()]);
  }
}
