import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class DBService {

  constructor(private af: AngularFire) {}

  public getFixtures(): FirebaseListObservable<any[]> {
    return this.af.database.list('/fixtures');
  }
}
