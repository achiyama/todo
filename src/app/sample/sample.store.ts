import { Injectable, signal } from '@angular/core';

export interface SampleStoreState {
  count: number;
}

@Injectable({ providedIn: 'root' })
export class SampleStore {
  constructor() {}

  readonly count = signal(0);

  setCount(value: number) {
    this.count.set(value);
  }
}
