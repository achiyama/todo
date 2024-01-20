import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss',
})
export class TodoItemComponent {
  @Output() doneEvent = new EventEmitter<string>();

  @Input() set title(value: string) {
    this._title = value;
  }

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
