import { Component, Input } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export type TodoItemCheckIcon = {
  initial: {
    default: IconDefinition;
    hover?: IconDefinition;
  };
  done: {
    default: IconDefinition;
    hover?: IconDefinition;
  };
};

@Component({
  standalone: true,
  imports: [],
  selector: 'app-todo-item-check',
  templateUrl: './todo-item-check-icon.component.html',
})
export class TodoItemCheckIconComponent {
  @Input({ required: true }) icon!: TodoItemCheckIcon;
}
