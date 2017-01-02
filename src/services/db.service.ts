import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class DBService {

  constructor(private af: AngularFire) {}

  get(url: string): FirebaseListObservable<any[]> {
    return this.af.database.list(url);
  }
}
