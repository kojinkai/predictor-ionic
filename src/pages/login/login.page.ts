import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService } from '../../providers';
import { FixturesPage } from '../';

@Component({
  templateUrl: 'login.page.html',
})
export class LoginPage {

  displayName: string;

  constructor(public navCtrl: NavController, private _authService: AuthService) {}

  public signInWithGoogle(): void {

    this._authService.signInWithGoogle()
      .then(() => this.onSignInSuccess());
  }

  public goToFixturesPage() {
    this.navCtrl.push(FixturesPage);
  }

  private onSignInSuccess(): void {
    this.displayName = this._authService.getDisplayName();
  }

}
