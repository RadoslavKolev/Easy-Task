import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardComponent } from "../ui/card/card.component";
import { type User } from './user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({ required: true }) user !: User;
  @Input({ required: true }) isSelected !: boolean;
  @Output() userSelect = new EventEmitter<string>();
  @Output() userDelete = new EventEmitter<string>();

  onSelectUser() {
    this.userSelect.emit(this.user.id);
  }

  onDeleteUser(event: MouseEvent) {
    event.stopPropagation(); // prevent triggering onSelectUser
    this.userDelete.emit(this.user.id);
  }
}
