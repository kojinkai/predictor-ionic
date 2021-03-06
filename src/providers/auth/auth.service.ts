import { Injectable } from '@angular/core';
import { AuthProviders, AngularFireAuth, FirebaseAuthState, AuthMethods } from 'angularfire2';

@Injectable()
export class AuthService {

  private authState: FirebaseAuthState;

  constructor(public auth$: AngularFireAuth) {
    auth$.subscribe((state: FirebaseAuthState) => {
      this.authState = state;
    });
  }

  get authenticated(): boolean {
    return this.authState !== null;
  }

  // public
  // -------------------------------------------------------------
  public signInWithGoogle(): firebase.Promise<FirebaseAuthState> {
    return this.auth$.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup,
    });
  }

  public logout() {
    return this.auth$.logout();
  }

  public getDisplayName(): string {
    return this.getPropertyFromAuthState('displayName');
  }

  public getUserAvatarUrl(): string {
    return this.getPropertyFromAuthState('photoURL');
  }

  // private
  // -------------------------------------------------------------
  private getPropertyFromAuthState(prop) {
    if (this.authState != null) {
      return this.authState.google[prop];
    } else {
      return '';
    }
  }
}
