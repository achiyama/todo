import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircle as regularFarCircle } from '@fortawesome/free-regular-svg-icons';
import { faCheckCircle as solidFarCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './todo-item.component.html',
})
export class TodoItemComponent {
  @Output() doneEvent = new EventEmitter<string>();

  @Input({ required: true }) set title(value: string) {
    this._title = value;
  }

  icons = {
    active: regularFarCircle,
    done: solidFarCircle,
  };

  get title(): string {
    return this._title;
  }

  done = false;

  private _title!: string;

  onToggle(): void {
    this.done = !this.done;

    if (this.done) {
      this.doneEvent.emit(this.title);
    }
  }

  onRightClick(event: MouseEvent): void {
    console.log('Right click', event);
  }

  @HostListener('contextmenu', ['$event'])
  preventContextMenu(event: MouseEvent): boolean {
    return false;
  }
}
