import { TestBed, inject } from '@angular/core/testing';
import { AngularFireAuth } from 'angularfire2';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { MockAngularFireAuth } from './auth.service.mock';

describe('Testing the AuthService', () => {
  beforeEach(() => {

    TestBed.configureTestingModule({
      providers: [
        AuthService,
        { provide: AngularFireAuth, useValue: MockAngularFireAuth },
      ],
    });
  });

  describe('getting the authenticated state', () => {

    it('should return true if the user is authenticated',
      inject([AuthService],
        (authService: AuthService) => {
          const actual = authService.authenticated;
          expect(actual).toBeTruthy();
    }));
  });

  describe('when signing in with google', () => {

    it('should call the auth provider when logging in',
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

  describe('when getting the user\'s display name', () => {

    it('should return the user\'s name if one is available from the scope',
      inject([AuthService],
        (authService: AuthService) => {
          const actual = authService.displayName();
          const expected = 'Lewis Nixon';
          expect(actual).toEqual(expected);
    }));
  });
});
