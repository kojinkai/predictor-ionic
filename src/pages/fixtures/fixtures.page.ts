import { Component } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';
import { DBService } from '../../services/db.service';

@Component({
  selector: 'pr-fixtures-page',
  templateUrl: 'fixtures.page.html',
})
export class FixturesPage {

  items: FirebaseListObservable<any[]>;

  constructor(dbService: DBService) {
    this.items = dbService.get('/fixtures');
  }

}
