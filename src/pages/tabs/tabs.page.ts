import { Component } from '@angular/core';

import { FixturesPage } from '../fixtures/fixtures.page';
import { GroupsPage } from '../groups/groups.page';

@Component({
  templateUrl: 'tabs.page.html',
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = FixturesPage;
  tab2Root: any = GroupsPage;

  constructor() {

  }
}
