import { Injectable } from '@angular/core';
import { AuthProviders, AngularFireAuth, FirebaseAuthState, AuthMethods } from 'angularfire2';

@Injectable()
export class AuthService {
  public avatar: string;
  private authState: FirebaseAuthState;

  constructor(public auth$: AngularFireAuth) {
    this.authState = auth$.getAuth();
    auth$.subscribe((state: FirebaseAuthState) => {
      this.authState = state;
    });
  }

  get authenticated(): boolean {
    return this.authState !== null;
  }

  public signInWithGoogle(): firebase.Promise<FirebaseAuthState> {
    return this.auth$.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup,
    });
  }

  public getDisplayName(): string {
    return this.getPropertyFromAuthState('displayName');
  }

  public getUserAvatarUrl(): string {
    return this.getPropertyFromAuthState('photoURL');
  }

  private getPropertyFromAuthState(prop) {
    if (this.authState != null) {
      return this.authState.google[prop];
    } else {
      return '';
    }
  }
}
