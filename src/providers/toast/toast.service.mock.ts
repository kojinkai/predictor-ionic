export const MOCK_TOAST_CONFIG = {
  duration: 3000,
  position: 'bottom',
};

export class MockToastService {
  public displayToast(message: string): string {
    return message;
  }
}

export class MockToastController {

  message: string;

  create(message) {
    this.message = message;
    return this;
  }

  present() {
    return `presenting the toast service with ${this.message}`;
  }
}
