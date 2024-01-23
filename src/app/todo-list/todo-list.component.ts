import { Component, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { NgComponentOutlet } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

type ToDoItems = {
  component: Type<TodoItemComponent>;
  inputs: Record<string, unknown>;
};

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [TodoItemComponent, NgComponentOutlet, ReactiveFormsModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent {
  @ViewChild('container', { static: true, read: ViewContainerRef })
  container!: ViewContainerRef;

  activeItems: ToDoItems[] = [];
  completedItems: ToDoItems[] = [];

  title = new FormControl('', [Validators.required]);

  constructor() {}

  onAdd(): void {
    if (this.title.valid) {
      const todoItem = this.container.createComponent(TodoItemComponent);
      todoItem.instance.title = this.title.value!;
      this.title.reset();
    }
  }
}
