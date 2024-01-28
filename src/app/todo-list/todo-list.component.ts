import {
  Component,
  ElementRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { NgComponentOutlet } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

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
