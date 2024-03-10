import {
  Component,
  ElementRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { CommonModule, NgComponentOutlet } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { TaskFormComponent } from './task-form/task-form.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlus as faSolidPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  standalone: true,
  imports: [
    TodoItemComponent,
    NgComponentOutlet,
    ReactiveFormsModule,
    TaskFormComponent,
    FontAwesomeModule,
    CommonModule,
  ],
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
})
export class TodoListComponent {
  @ViewChild('container', { read: ViewContainerRef, static: true })
  container!: ViewContainerRef;
  @ViewChild('todoInput', { static: true })
  todoInput!: ElementRef<HTMLInputElement>;

  taskName = new FormControl('', [Validators.required]);

  icons = {
    plus: faSolidPlus,
  };

  ngOnInit(): void {
    this.todoInput.nativeElement.addEventListener('compositionstart', () => {
      console.log('compositionstart');
    });
  }

  onAdd(): void {
    if (this.taskName.valid) {
      const todoItem = this.container.createComponent(TodoItemComponent);
      todoItem.instance.taskName = this.taskName.value!;
      this.taskName.reset();
    }
  }
}
