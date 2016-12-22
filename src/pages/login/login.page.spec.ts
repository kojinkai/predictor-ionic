import { LoginPage } from './login.page';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { NavController } from 'ionic-angular';

describe('Login Page:', () => {

  let comp: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let de: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [LoginPage],
      providers: [
      {provide: NavController, useValue: NavController},
      ],
    });
    fixture = TestBed.createComponent(LoginPage);
    // #trick
    // If you want to trigger ionViewWillEnter automatically de-comment the following line
    // fixture.componentInstance.ionViewWillEnter();
    fixture.detectChanges();
    comp = fixture.componentInstance;
    de = fixture.debugElement;
  });

});
