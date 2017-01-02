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

  public get(url: string): FirebaseListObservable<any[]> {
    return this.af.database.list(url);
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
      console.log(authObj);
      return authObj.uid;
    }
  }
}
