import { Component, Input, output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({ required: true}) id !: string;
  @Input({ required: true}) name !: string;
  @Input({ required: true}) avatar !: string;
  userSelect = output<string>();

  get imagePath() {
    return `assets/users/${this.avatar}`;
  }

  onSelectUser() {
    this.userSelect.emit(this.id);
  }
}
