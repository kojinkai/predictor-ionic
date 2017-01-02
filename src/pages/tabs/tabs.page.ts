import { Component } from '@angular/core';
import { DBService } from '../../services/db/db.service';
import { ToastService } from '../../services/toast/toast.service';
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
  // message: string;
  isLoggedIn: boolean;

  constructor(public dbService: DBService, public toastService: ToastService) {
    this.isLoggedIn = this.dbService.getLoggedInState();
  }

  private showLoginToast(message: string): void {
    this.toastService.diplayToast(message);
  }
}
