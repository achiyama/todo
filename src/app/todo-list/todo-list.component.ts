import {
  Component,
  ElementRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { NgComponentOutlet } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { TaskFormComponent } from './task-form/task-form.component';

@Component({
  standalone: true,
  imports: [
    TodoItemComponent,
    NgComponentOutlet,
    ReactiveFormsModule,
    TaskFormComponent,
  ],
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
})
export class TodoListComponent {
  @ViewChild('container', { static: true, read: ViewContainerRef })
  container!: ViewContainerRef;
  @ViewChild('todoInput', { static: true })
  todoInput!: ElementRef<HTMLInputElement>;

  taskName = new FormControl('', [Validators.required]);

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
