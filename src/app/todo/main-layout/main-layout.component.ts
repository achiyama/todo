import { Component } from '@angular/core';
import { SideMenuComponent } from '../../todo/side-menu/side-menu.component';

@Component({
  standalone: true,
  imports: [SideMenuComponent],
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
})
export class MainLayoutComponent {}
