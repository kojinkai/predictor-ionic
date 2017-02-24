import { FirebaseAuthState } from 'angularfire2';

// Mock for this service
export class MockAngularFireAuth {

  userConfig: any[];

  constructor(private args: any[]) {
    this.userConfig = args;
  }

  public getAuth() {
    return createMockAuthState(this.userConfig);
  }

  public subscribe(onChangeCallback: Function): void {
    onChangeCallback(createMockAuthState(this.userConfig));
  }

  public login(): Promise<FirebaseAuthState> {
    return new Promise((resolve: Function, reject: Function): void => {
      resolve(createMockAuthState(this.userConfig));
      reject('bar');
    });
  }

  // So according to the docs the logout method of AngularFire Auth
  // returns Promise<void> but the compiler is complaining that it's not
  // returning a thenable object so I am mocking what I think is the correct interface here.
  // Something is awry but we are being logged out ok we just can't pass any callbacks to the action
  // for now.
  // https://github.com/angular/angularfire2/blob/master/docs/api-reference.md
  //
  public logout(): void {}

}

class MockFirebaseUser implements firebase.User {
  displayName: string;
  email: string;
  photoURL: string;
  providerId: string;
  uid: string;
  emailVerified: boolean;
  isAnonymous: boolean;
  providerData: (firebase.UserInfo)[];
  refreshToken: string;
  toJSON: Function;

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

function createMockAuthState(config: any[]): any {
  const [ uid, email, displayName, provider ] = config;
  if (uid !== null) {
    return {
      uid,
      provider,
      auth: createUser(uid, email, displayName),
      displayName,
      email,
      photoURL: `http://my.photo.com/${email}.jpg`,
      providerId: 'some.provider',
      google: {
        displayName: 'Lewis Nixon',
        photoURL: `http://my.photo.com/${email}.jpg`,
      },
    };
  }

  return null;
}

function createUser(uid, email, displayName) {
  let user = new MockFirebaseUser();
  user.displayName = displayName;
  user.email = email;
  user.uid = uid;
  user.photoURL = `http://my.photo.com/${email}.jpg`;
  user.providerId = 'some.provider';
  return user;
}
