import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService } from '../../providers/auth/auth.service';
import { TabsPage } from '../tabs/tabs.page';

@Component({
  templateUrl: 'login.page.html',
})
export class LoginPage {

  displayName: string;

  constructor(public navCtrl: NavController, private _authService: AuthService) {}

  signInWithGoogle(): void {

    this._authService.signInWithGoogle()
      .then(() => this.onSignInSuccess());
  }

  // @todo - write the test asap
  goToTabsPage() {
    this.navCtrl.push(TabsPage);
  }

  private onSignInSuccess(): void {
    this.displayName = this._authService.displayName();
  }

}
