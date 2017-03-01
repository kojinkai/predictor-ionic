import { TestBed, inject } from '@angular/core/testing';
import { AngularFireAuth } from 'angularfire2';
import { AuthService } from './auth.service';
import { MockAngularFireAuth } from '../../../test/mocks';

describe('Testing the AuthService when successfully logged in', () => {

  this.componentName = 'authService';
  const mockAfAuth = new MockAngularFireAuth(['fakeUID', 'foo@bar.com', 'lewis', 3]);

  beforeEach(() => {

    TestBed.configureTestingModule({
      providers: [
        AuthService,
        { provide: AngularFireAuth, useValue: mockAfAuth },
      ],
    });
  });

  describe('when getting authService.authenticated', () => {

    const method = `${this.componentName}.authenticated`;

    it(`asserting against ${method} should return true`,
      inject([AuthService],
        (authService: AuthService) => {
          const actual = authService.authenticated;
          expect(actual).toBeTruthy();
    }));
  });

  describe('when signing in with google', () => {

    const method = `${this.componentName}.signInWithGoogle`;

    it(`calling ${method} should call through to auth provider`,
      inject([AuthService, AngularFireAuth],
        (authService: AuthService, mockAngularFireAuth: AngularFireAuth) => {
        authService.signInWithGoogle().then(authState => {
          // yes, we're effectively spying on getAuth here...
          const actual = authState;
          const expected = mockAngularFireAuth.getAuth();
          expect(actual).toEqual(expected);
        });
    }));
  });

  describe('when logging out', () => {

    const method = `${this.componentName}.logout`;

    it(`calling ${method} should call through to auth provider`,
      inject([AuthService, AngularFireAuth],
        (authService: AuthService, mockAngularFireAuth: AngularFireAuth) => {
        spyOn(mockAngularFireAuth, 'logout');
        authService.logout();
        expect(mockAngularFireAuth.logout).toHaveBeenCalled();
    }));
  });

  describe('when getting the user\'s display name', () => {

    const method = `${this.componentName}.getDisplayName`;

    it(`calling ${method} should return the user\'s name`,
      inject([AuthService],
        (authService: AuthService) => {
          const actual = authService.getDisplayName();
          const expected = 'Lewis Nixon';
          expect(actual).toEqual(expected);
    }));
  });

  describe('when getting the user\'s avatar', () => {

    const method = `${this.componentName}.getUserAvatarUrl`;

    it(`calling ${method} should return the url`,
      inject([AuthService],
        (authService: AuthService) => {
          const actual = authService.getUserAvatarUrl();
          const expected = 'http://my.photo.com/foo@bar.com.jpg';
          expect(actual).toEqual(expected);
    }));
  });
});

describe('Testing the AuthService when auth state is null', () => {

  const mockAfAuth = new MockAngularFireAuth([null]);

  beforeEach(() => {

    TestBed.configureTestingModule({
      providers: [
        AuthService,
        { provide: AngularFireAuth, useValue: mockAfAuth },
      ],
    });
  });

  describe('when getting the user\'s display name', () => {

    const method = `${this.componentName}.getDisplayName`;

    it(`calling ${method} should return an empty string`,
      inject([AuthService],
        (authService: AuthService) => {
          const actual = authService.getDisplayName();
          const expected = '';
          expect(actual).toEqual(expected);
    }));
  });
});
