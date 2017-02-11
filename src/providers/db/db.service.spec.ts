import { TestBed, inject } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { DBService } from './db.service';
import { mockAngularFireDatabase } from './db.service.mock';
import { FIXTURES } from '../../../fixtures/fixtures.fixture';
import { AngularFire } from 'angularfire2';

describe('Testing DBService', () => {

  this.componentName = 'DBService';

  beforeEach(() => {

    TestBed.configureTestingModule({
      providers: [
        DBService,
        { provide: AngularFire, useValue: mockAngularFireDatabase },
      ],
    });
  });

  describe('when getting a list of fixtures', () => {

    const method = `${this.componentName}.getFixtures`;

    it(`calling ${method} should return an observable list of fixtures`,
      inject([DBService], (dbService: DBService) => {

        const fixtures$ = dbService.getFixtures();

        fixtures$.subscribe(observableFixtures => {
          expect(observableFixtures).toEqual(FIXTURES);
        });
    }));
  });
});
