import { LoginPage } from './login.page';
import { TestBed, inject } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { mockNavController } from 'ionic-angular/util/mock-providers';
import { NavController } from 'ionic-angular';
import { AuthService } from '../../providers/auth/auth.service';
import { MockAuthService } from '../../providers/auth/auth.service.mock';

describe('Login Page:', () => {

  beforeEach(() => TestBed.configureTestingModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [
      {provide: NavController, useClass: mockNavController},
      {provide: AuthService, useClass: MockAuthService},
      LoginPage,
    ],
  }));

  describe('logging in without error', () => {

    it('should bind the logged in user\'s name to the scope',
      inject([LoginPage, AuthService], (loginComponent: LoginPage) => {
        loginComponent.signInWithGoogle();
        const actual = loginComponent.displayName;
        const expected = 'lewis';

        expect(actual).toBe(expected);
      }));
  });

  describe('navigating to the tabs page using the goToTabsPage method,', () => {

    it('should push the tabs page to the top of the navigation stack',
      inject([LoginPage, NavController], (loginComponent: LoginPage, mockNavCtrl: NavController) => {

        spyOn(mockNavCtrl, 'push').and.callThrough();
        loginComponent.goToTabsPage();
        // @Todo @e2e
        // use toHaveBeenCalledWith and pass arg from view?
        // setup protractor
        expect(mockNavCtrl.push).toHaveBeenCalled();
        expect(mockNavCtrl.length()).toBe(1);

      }));
  });
});
