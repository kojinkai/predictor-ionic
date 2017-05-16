import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'pr-groups-page',
  templateUrl: 'groups.page.html',
})
export class GroupsPage {
  title: string;

  constructor() {
    this.title = 'Groups';
  }

}
