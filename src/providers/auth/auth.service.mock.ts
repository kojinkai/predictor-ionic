import { MockPromise } from '../../../test/mocks';

// Mock for consumers of this service
export class MockAuthService {

  get authenticated(): boolean {
    return true;
  }

  signInWithGoogle() {
    return new MockPromise();
  }

  displayName(): string {
    return 'lewis';
  }

}
