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
  {
    path: 'sample',
    loadComponent: () =>
      import('./sample/sample.component').then((m) => m.SampleComponent),
  },
  {
    path: 'signal-study',
    loadComponent: () =>
      import('./signal-study/signal-study.component').then(
        (m) => m.SignalStudyComponent,
      ),
  },
];
