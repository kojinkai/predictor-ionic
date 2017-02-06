import { Observable } from 'rxjs';
import { FIXTURES } from '../../../fixtures/fixtures.fixture';

// Mock for consumers of this service
export class FakePromise {
  then(callback: Function): void {
    callback();
  }
}
export class MockAuthService {

  get authenticated(): boolean {
    return true;
  }

  signInWithGoogle() {
    return new FakePromise();
  }

  displayName(): string {
    return 'lewis';
  }

}
