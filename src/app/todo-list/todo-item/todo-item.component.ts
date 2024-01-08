import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss',
})
export class TodoItemComponent {
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
  }
}
