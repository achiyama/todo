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
  selector: 'app-todo-list',
  standalone: true,
  templateUrl: './todo-list.component.html',
  imports: [
    TodoItemComponent,
    NgComponentOutlet,
    ReactiveFormsModule,
    TaskFormComponent,
  ],
})
export class TodoListComponent {
  @ViewChild('container', { static: true, read: ViewContainerRef })
  container!: ViewContainerRef;
  @ViewChild('todoInput', { static: true })
  todoInput!: ElementRef<HTMLInputElement>;

  title = new FormControl('', [Validators.required]);

  ngOnInit(): void {
    this.todoInput.nativeElement.addEventListener('compositionstart', () => {
      console.log('compositionstart');
    });
  }

  onAdd(): void {
    if (this.title.valid) {
      const todoItem = this.container.createComponent(TodoItemComponent);
      todoItem.instance.title = this.title.value!;
      this.title.reset();
    }
  }
}
