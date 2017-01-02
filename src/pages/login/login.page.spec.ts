import { LoginPage } from './login.page';
import { TestBed, inject } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { mockNavController } from 'ionic-angular/util/mock-providers';
import { NavController } from 'ionic-angular';
import { DBService } from '../../services/db/db.service';
import { MockDBService } from '../../services/db/db.service.mock';

describe('Login Page:', () => {

  const mockDBServiceInstance = new(MockDBService);

  beforeEach(() => TestBed.configureTestingModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    declarations: [
      LoginPage,
    ],
    providers: [
      {provide: NavController, useValue: mockNavController},
      {provide: DBService, useValue: mockDBServiceInstance},
      LoginPage,
    ],
  }));

  it('should define a login page controller',
    inject([LoginPage], (loginComponent: LoginPage) => {
      expect(loginComponent).toBeDefined();
    }));

  it('should call the login method on the DBService',

    inject([LoginPage, DBService], (loginComponent: LoginPage, mockDBService: DBService) => {
      spyOn(mockDBService, 'login');
      loginComponent.login();
      expect(mockDBService.login).toHaveBeenCalled();
    }));
});
