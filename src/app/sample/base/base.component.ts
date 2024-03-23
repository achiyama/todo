export abstract class BaseComponent<T> {
  protected _$: T;

  constructor(protected localStore: T) {
    this._$ = localStore;
  }
}
