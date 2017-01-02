import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DBService } from '../../services/db/db.service';
import { TabsPage } from '../tabs/tabs.page';

@Component({
  templateUrl: 'login.page.html',
})
export class LoginPage {
  constructor(public navCtrl: NavController, public dbService: DBService) {}

  login() {
    this.dbService.login();
  }

  // @todo - write the test asap
  goToTabsPage() {
    this.navCtrl.push(TabsPage);
  }

}
