import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home.page';
import { FixturesPage, GroupsPage } from '../pages';
import { DBService, AuthService, ToastService } from '../providers';

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
    HomePage,
    FixturesPage,
    GroupsPage,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
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
