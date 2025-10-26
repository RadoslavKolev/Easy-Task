import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  name = input.required<string>();
  avatar = input.required<string>();

  imagePath = computed(() => `assets/users/${this.avatar()}`);

  onSelectUser() {}
}
