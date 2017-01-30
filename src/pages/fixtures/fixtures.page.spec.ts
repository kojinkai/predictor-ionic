import { FixturesPage } from './fixtures.page';
import { TestBed, inject } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DBService } from '../../services/db/db.service';
import { MockDBService } from '../../services/db/db.service.mock';

describe('Fixtures Page:', () => {

  beforeEach(() => TestBed.configureTestingModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [
      {provide: DBService, useClass: MockDBService},
      FixturesPage,
    ],
  }));

  describe('when getting a list of fixtures', () => {

    it('should define a fixtures page controller',
      inject([FixturesPage], (fixturesComponent: FixturesPage) => {
        expect(fixturesComponent).toBeDefined();
      }));

  });

});
