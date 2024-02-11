import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircle as faRegularCircle } from '@fortawesome/free-regular-svg-icons';
import { faTrash as faSolidTrash } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle as faRegularCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { faCheckCircle as faSolidCheckCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
})
export class TodoItemComponent {
  @Output() doneEvent = new EventEmitter<string>();
  @Output() deleteEvent = new EventEmitter<string>();

  @Input({ required: true }) set taskName(value: string) {
    this._taskName = value;
  }

  icons = {
    active: faRegularCircle,
    hover: faRegularCheckCircle,
    done: faSolidCheckCircle,
    delete: faSolidTrash,
  };

  get taskName(): string {
    return this._taskName;
  }

  done = false;

  private _taskName!: string;

  onToggle(): void {
    this.done = !this.done;

    if (this.done) {
      this.doneEvent.emit(this.taskName);
    }
  }

  onDelete(): void {
    this.deleteEvent.emit(this.taskName);
  }

  onRightClick(event: MouseEvent): void {
    console.log('Right click', event);
  }

  @HostListener('contextmenu', ['$event'])
  preventContextMenu(event: MouseEvent): boolean {
    return false;
  }
}
