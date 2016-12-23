import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'pr-fixtures-page',
  templateUrl: 'fixtures.page.html',
})
export class FixturesPage {

  items: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, af: AngularFire) {
    this.items = af.database.list('/fixtures');
  }

}
