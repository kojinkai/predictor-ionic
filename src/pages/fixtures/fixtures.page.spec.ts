import { FixturesPage } from './fixtures.page';
import { TestBed, inject } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
    DBService,
    MockDBService,
    ToastService,
    MockToastService,
    AuthService,
    MockAuthService,
} from '../../providers';

describe('Testing the Fixtures page component', () => {

  this.componentName = 'fixturesPage component';

  beforeEach(() => TestBed.configureTestingModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [
      {provide: DBService, useClass: MockDBService},
      {provide: ToastService, useClass: MockToastService},
      {provide: AuthService, useClass: MockAuthService},
      FixturesPage,
    ],
  }));

  describe(`when boostrapping the ${this.componentName}`, () => {

    it('a fixtures page controller should be defined',
      inject([FixturesPage], (fixturesComponent: FixturesPage) => {
        expect(fixturesComponent).toBeDefined();
      }));
  });
});
