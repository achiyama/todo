import { Component, Type } from '@angular/core';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { NgComponentOutlet } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

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
  activeItems: ToDoItems[] = [];
  completedItems: ToDoItems[] = [];

  title = new FormControl('');

  onAdd(): void {
    this.activeItems.push({
      component: TodoItemComponent,
      inputs: { title: this.title.value },
    });
  }
}
