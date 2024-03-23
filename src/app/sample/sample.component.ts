import { Component, ElementRef, ViewChild } from '@angular/core';
import { SampleStore } from './sample.store';
import { BaseComponent } from './base/base.component';

@Component({
  standalone: true,
  imports: [],
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrl: './sample.component.scss',
})
export class SampleComponent extends BaseComponent<SampleStore> {
  // @ViewChild('myInput') myInput: ElementRef;

  constructor(localStore: SampleStore) {
    super(localStore);
  }

  onClicK($event: MouseEvent) {
    this.localStore.setCount(4);
  }
}
