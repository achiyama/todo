import { Component } from '@angular/core';
import { SideMenuItemComponent } from './side-menu-item/side-menu-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  IconDefinition,
  faSun as faSolidSun,
  faCalendarDays as faSolidCalendarDays,
  faInbox as faSolidInbox,
} from '@fortawesome/free-solid-svg-icons';

type SideMenuItem = {
  title: string;
  icon: IconDefinition;
};

@Component({
  standalone: true,
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss',
  imports: [SideMenuItemComponent, FontAwesomeModule],
})
export class SideMenuComponent {
  menuItems: SideMenuItem[] = [
    {
      title: 'Today',
      icon: faSolidSun,
    },
    {
      title: 'Calendar',
      icon: faSolidCalendarDays,
    },
    {
      title: 'All Tasks',
      icon: faSolidInbox,
    },
  ];
}
