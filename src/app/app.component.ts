import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { FixturesPage, GroupsPage } from '../pages';
import { AuthService } from '../providers';

@Component({
  templateUrl: 'app.html',
})

export class MyApp {

  @ViewChild(Nav) nav: Nav;

  pages: Array<{title: string, component: any}>;
  displayName: string;
  photoURL: string;
  isAuthenticated: boolean;
  rootPage = FixturesPage;

  constructor(platform: Platform, private _authService: AuthService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });

    this.pages = [
      { title: 'Fixtures', component: FixturesPage },
      { title: 'Groups', component: GroupsPage },
    ];

    _authService.auth$.subscribe(_ => this.updateBindings());

  }

  public openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  public signInWithGoogle(): void {

    this._authService.signInWithGoogle()
      .then(() => this.onSignInSuccess());
  }

  private onSignInSuccess(): void {
    this.displayName = this._authService.getDisplayName();
    this.updateBindings();
  }

  private updateBindings(): void {

    this.isAuthenticated = this._authService.authenticated;
    this.displayName = this._authService.getDisplayName();
    this.photoURL = this._authService.getUserAvatarUrl();
  }
}
