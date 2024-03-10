import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './todo.routes';

export const todoConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],
};
