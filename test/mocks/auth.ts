import { AngularFireAuth, FirebaseAuthState } from 'angularfire2';

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
    return new Promise((resolve, reject) => {
      resolve(createMockAuthState(this.userConfig));
      reject('bar');
    });
  }
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
