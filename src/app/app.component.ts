import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { FixturesPage, GroupsPage, LoginPage } from '../pages';

@Component({
  templateUrl: 'app.html',
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  pages: Array<{title: string, component: any}>;

  rootPage = FixturesPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });

    this.pages = [
      { title: 'Fixtures', component: FixturesPage },
      { title: 'Groups', component: GroupsPage },
      { title: 'Login', component: LoginPage },
    ];
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
