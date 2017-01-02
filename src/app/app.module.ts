import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule } from 'ionic-angular';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login.page';
import { HomePage } from '../pages/home/home.page';
import { FixturesPage } from '../pages/fixtures/fixtures.page';
import { GroupsPage } from '../pages/groups/groups.page';
import { TabsPage } from '../pages/tabs/tabs.page';
import { DBService } from '../services/db/db.service';
import { ToastService } from '../services/toast/toast.service';

export const firebaseConfig = {
  apiKey: 'AIzaSyDmh7z_6Zi05soNYtJ7t0WvwcGrQ57oCQM',
  authDomain: 'ionic-predictor.firebaseapp.com',
  databaseURL: 'https://ionic-predictor.firebaseio.com',
  storageBucket: 'ionic-predictor.appspot.com',
  messagingSenderId: '995551138829',
};

const firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect,
};

@NgModule({
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
  ],
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    FixturesPage,
    GroupsPage,
    TabsPage,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    FixturesPage,
    GroupsPage,
    TabsPage,
  ],
  providers: [
    DBService,
    ToastService,
  ],
})
export class AppModule {}
