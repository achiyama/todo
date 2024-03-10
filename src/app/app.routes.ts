import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./todo/todo-list').then((m) => m.TodoListComponent),
  },
  {
    path: 'canvas',
    loadComponent: () =>
      import('./canvas/canvas.component').then((m) => m.CanvasComponent),
  },
];
