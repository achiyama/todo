import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  IconDefinition,
  faSun as faSolidSun,
} from '@fortawesome/free-solid-svg-icons';

type Color = 'blue' | 'green' | 'red';

@Component({
  selector: 'app-side-menu-item',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './side-menu-item.component.html',
  styleUrl: './side-menu-item.component.scss',
})
export class SideMenuItemComponent {
  private _title!: string;

  @Input({ required: true }) set title(value: string) {
    this._title = value;
  }

  @Input() color: Color = 'blue';

  @Input() icon: IconDefinition = faSolidSun;

  get title(): string {
    return this._title;
  }
}
