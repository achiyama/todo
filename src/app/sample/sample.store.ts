import { Injectable, signal, WritableSignal } from '@angular/core';
import { ReadonlyState } from './base/base.store';

export interface SampleStoreState {
  name: string;
  while: {
    loading: boolean;
  };
}

@Injectable({ providedIn: 'root' })
export class SampleStore {
  constructor() {}

  readonly count = signal(0);

  setCount(value: number) {
    this.count.set(value);
  }
}
