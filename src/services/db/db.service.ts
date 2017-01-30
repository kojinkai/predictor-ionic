import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class DBService {

  uid: string;
  constructor(private af: AngularFire) {}

  public login(): string {
    this.uid = this.getLoggedInUID();
    if (!this.uid) {
      this.af.auth.login();
    }

    return this.uid;
  }

  public getFixtures(): FirebaseListObservable<any[]> {
    return this.af.database.list('/fixtures');
  }

  public getLoggedInState(): boolean {
    const authObj = this.af.auth.getAuth();
    // return !!authObj;
    return true;
  }

  private getLoggedInUID(): string {
    if (this.uid) {
      return this.uid;
    } else {
      const authObj = this.af.auth.getAuth();
      return authObj.uid;
    }
  }
}
