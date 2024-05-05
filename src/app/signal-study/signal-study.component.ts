import { Component, computed, Input, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-signal-study',
  standalone: true,
  imports: [],
  template: `<div>
    <h1>通知チェック</h1>
    <div>
      <div>name: {{ name() }}</div>
      <div class="td-flex td-gap-1">
        <input #input />
        <button (click)="onSet(input.value)" class="button">onSet</button>
        <button (click)="onUpdate(input.value)" class="button">onUpdate</button>
      </div>
    </div>
  </div>`,
  styleUrl: './signal-study.component.scss',
})
export class SignalStudyComponent {
  name = signal('hoge');

  constructor() {
    computed(() => {
      return console.log('computed', this.name());
    });
  }

  /**
   * Signalの通知のタイミング
   * Signal#set メソッドでセットされた値が、保存されている値と等値でないとき
   * Signal#update メソッドでセットされた値が、保存されている値と等値でないとき
   * Signal#mutate メソッドが呼び出されたあと
   * computed 関数の算出関数が返す値が、保存されている値と等値でないとき
   */
  onSet(value: string) {
    this.name.set(value);
  }

  onUpdate(value: string) {
    this.name.update((value) => value);
  }
}

@Component({
  selector: 'app-child-component',
  standalone: true,
  imports: [],
  template: '',
  styleUrls: [],
})
export class ChildComponent {}

@Component({
  selector: 'app-parent-component',
  standalone: true,
  imports: [],
  template: '',
  styleUrls: [],
})
export class ParentComponent {}
