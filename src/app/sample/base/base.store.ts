import { Signal } from '@angular/core';

export type ReadonlyState<T> = T extends object
  ? { [K in keyof T]: ReadonlyState<T[K]> }
  : Signal<T>;
