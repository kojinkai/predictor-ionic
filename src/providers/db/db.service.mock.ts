import { Observable } from 'rxjs';
import { FIXTURES } from '../../../fixtures/fixtures.fixture';

// Mock for consumers of this service
export class MockDBService {

  public login(): string {
    return 'login service';
  }

  public getLoggedInState(): boolean {
    return true;
  }

  public getFixtures(): Observable<any> {
    const mockFixtures$ = Observable.of(FIXTURES);
    return mockFixtures$;
  }
}

// For mocking Angular Fire in the db.service spec
export const mockAngularFireDatabase = {
  database: {
    list: () => {
      const mockFixtures$ = Observable.of(FIXTURES);
      return mockFixtures$;
    },
  },
};
