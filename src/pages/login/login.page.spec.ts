import { LoginPage } from './login.page';
import { TestBed, inject } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { mockNavController } from 'ionic-angular/util/mock-providers';
import { NavController } from 'ionic-angular';
import { DBService } from '../../services/db/db.service';
import { MockDBService } from '../../services/db/db.service.mock';

describe('Login Page:', () => {

  beforeEach(() => TestBed.configureTestingModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [
      {provide: NavController, useClass: mockNavController},
      {provide: DBService, useClass: MockDBService},
      LoginPage,
    ],
  }));

  describe('logging in', () => {

    it('should define a login page controller',
      inject([LoginPage], (loginComponent: LoginPage) => {
        expect(loginComponent).toBeDefined();
      }));

    it('should login via the DBService when the login method is called',
      inject([LoginPage, DBService], (loginComponent: LoginPage, mockDBService: DBService) => {
        spyOn(mockDBService, 'login');
        loginComponent.login();
        expect(mockDBService.login).toHaveBeenCalled();
      }));
  });

  describe('navigating to the tabs page', () => {

    it('should push the tabs page to the top of the navigation stack when goToTabsPage is called',
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
