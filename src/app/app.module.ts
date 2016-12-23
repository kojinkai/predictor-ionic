import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login.page';
import { HomePage } from '../pages/home/home.page';
import { FixturesPage } from '../pages/fixtures/fixtures.page';
import { GroupsPage } from '../pages/groups/groups.page';
import { TabsPage } from '../pages/tabs/tabs.page';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    FixturesPage,
    GroupsPage,
    TabsPage,
  ],
  imports: [
    IonicModule.forRoot(MyApp),
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
  providers: [],
})
export class AppModule {}
