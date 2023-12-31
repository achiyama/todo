import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./todo-list').then((m) => m.TodoListComponent),
  },
];
