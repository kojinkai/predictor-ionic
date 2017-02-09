import { TestBed, inject } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { DBService } from './db.service';
import { mockAngularFireDatabase } from './db.service.mock';
import { FIXTURES } from '../../../fixtures/fixtures.fixture';
import { AngularFire } from 'angularfire2';

describe('Testing DBService', () => {
  beforeEach(() => {

    TestBed.configureTestingModule({
      providers: [
        DBService,
        { provide: AngularFire, useValue: mockAngularFireDatabase },
      ],
    });
  });

  describe('when calling getFixtures', () => {
    it('should return an observable list of fixtures',
      inject([DBService], (dbService: DBService) => {

        const fixtures$ = dbService.getFixtures();

        fixtures$.subscribe(observableFixtures => {
          expect(observableFixtures).toEqual(FIXTURES);
        });
    }));
  });
});
