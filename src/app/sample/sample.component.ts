import { Component } from '@angular/core';
import { SampleStore } from './sample.store';
import { fromEvent } from 'rxjs';

@Component({
  standalone: true,
  imports: [],
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrl: './sample.component.scss',
})
export class SampleComponent {
  // @ViewChild('myInput') myInput: ElementRef;

  click$ = fromEvent(document, 'click');

  count: number = 0;

  constructor(protected localStore: SampleStore) {}

  onClicK($event: MouseEvent) {
    this.localStore.setCount(4);
    this.count++;
  }
}
