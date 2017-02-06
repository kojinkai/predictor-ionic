import { Component } from '@angular/core';
import { AuthService } from '../../providers/auth/auth.service';
import { ToastService } from '../../providers/toast/toast.service';
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

  constructor(private authService: AuthService, private toastService: ToastService) {
    this.isLoggedIn = this.authService.authenticated;
  }

  public showLoginToast(message: string): void {
    this.toastService.displayToast(message);
  }
}
