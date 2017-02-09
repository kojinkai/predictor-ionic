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

  describe('when signing in with google', () => {

    // it('should call getAuth and subscribe on the auth provider (AngularFireAuth)',
    //   inject([AuthService], (authService: AuthService, mockAngularFireAuth: AngularFireAuth) => {
    //     spyOn(mockAngularFireAuth, 'getAuth').and.return('Foo');
    //     expect(authService.authState).toEqual({ state: 'our logged in state' });
    // }));

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
});
