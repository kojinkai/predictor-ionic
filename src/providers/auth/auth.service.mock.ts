import { Observable, Subscription } from 'rxjs';
import { AngularFireAuth, FirebaseAuthState } from 'angularfire2';

// Mock for this service
export class MockAngularFireAuth {

  static getAuth() {
    return createMockAuthState('fakeUID', 'foo@bar.com', 'lewis', 3);
  }

  static subscribe(state: Function): void {
    state(createMockAuthState('fakeUID', 'foo@bar.com', 'lewis', 3));
  }

  static login(): Promise<FirebaseAuthState> {
    return new Promise((resolve, reject) => {
      resolve(createMockAuthState('fakeUID', 'foo@bar.com', 'lewis', 3));
      reject('bar');
    });
  }
}

export class MockFirebaseUser implements firebase.User {
  displayName: string;
  email: string;
  photoURL: string;
  providerId: string;
  uid: string;
  emailVerified: boolean;
  isAnonymous: boolean;
  providerData: (firebase.UserInfo)[];
  refreshToken: string;

  delete() { return null; }
  getToken() { return null; }
  link()  { return null; }
  linkWithPopup() { return null; }
  linkWithRedirect()  { return null; }
  reauthenticate() { return null; }
  reload() { return null; }
  sendEmailVerification() { return null; }
  unlink() { return null; }
  updateEmail() { return null; }
  updatePassword() { return null; }
  updateProfile() { return null; }
}

export function createMockAuthState(uid, email, displayName, provider) {
  return {
    uid,
    provider,
    auth: createUser(uid, email, displayName),
    displayName,
    email,
    photoURL: `http://my.photo.com/${email}.jpg`,
    providerId: 'some.provider',
  };
}

export function createUser(uid, email, displayName) {
  let user = new MockFirebaseUser();
  user.displayName = displayName;
  user.email = email;
  user.uid = uid;
  user.photoURL = `http://my.photo.com/${email}.jpg`;
  user.providerId = 'some.provider';
  return user;
}

// Mock for consumers of this service
export class FakePromise {

  then(callback: Function) {
    callback();
    return this;
  }

  catch(callback: Function) {
    callback();
  }
}

export class MockAuthService {

  get authenticated(): boolean {
    return true;
  }

  signInWithGoogle() {
    return new FakePromise();
  }

  displayName(): string {
    return 'lewis';
  }

}
