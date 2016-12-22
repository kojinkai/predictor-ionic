import { LoginPage } from './login.page';
import { TestBed, inject } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { mockNavController } from 'ionic-angular/util/mock-providers';
import { NavController } from 'ionic-angular';

describe('Login Page:', () => {

  beforeEach(() => TestBed.configureTestingModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [
    {provide: NavController, useValue: mockNavController},
    LoginPage,
    ],
  }));

  it('should define a groups page controller', inject([LoginPage], (login: LoginPage) => {
    expect(login).toBeDefined();
  }));
});
