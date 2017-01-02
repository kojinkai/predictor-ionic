export class MockDBService {

  public login(): string {
    return 'login service';
  }

  public getLoggedInState(): boolean {
    return true;
  }
}
