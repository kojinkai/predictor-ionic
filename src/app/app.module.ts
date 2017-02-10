import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login.page';
import { HomePage } from '../pages/home/home.page';
import { FixturesPage } from '../pages/fixtures/fixtures.page';
import { GroupsPage } from '../pages/groups/groups.page';
import { DBService } from '../providers/db/db.service';
import { AuthService } from '../providers/auth/auth.service';
import { ToastService } from '../providers/toast/toast.service';

export const firebaseConfig = {
  apiKey: 'AIzaSyDmh7z_6Zi05soNYtJ7t0WvwcGrQ57oCQM',
  authDomain: 'ionic-predictor.firebaseapp.com',
  databaseURL: 'https://ionic-predictor.firebaseio.com',
  storageBucket: 'ionic-predictor.appspot.com',
  messagingSenderId: '995551138829',
};

@NgModule({
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    FixturesPage,
    GroupsPage,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    FixturesPage,
    GroupsPage,
  ],
  providers: [
    DBService,
    AuthService,
    ToastService,
  ],
})
export class AppModule {}
