import { Component, Input } from '@angular/core';

@Component({
  selector: 'pr-navbar',
  templateUrl: './navbar.component.html',
})

export class NavbarComponent {
  @Input() name: string;
}
