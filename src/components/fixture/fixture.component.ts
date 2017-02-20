import { Component, Input } from '@angular/core';

@Component({
  selector: 'pr-fixture',
  templateUrl: './fixture.component.html',
})

export class FixtureComponent {
  @Input('matchdata') matchdata: any;
}
