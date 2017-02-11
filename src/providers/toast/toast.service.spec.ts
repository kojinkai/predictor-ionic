import { ToastService } from './toast.service';
import { MockToastController, MOCK_TOAST_CONFIG } from './toast.service.mock';
import { ToastController } from 'ionic-angular';
import { TestBed, inject } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('Testing the Toast Service:', () => {

  this.componentName = 'toastService';

  beforeEach(() => TestBed.configureTestingModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [
      {provide: ToastController, useClass: MockToastController},
      ToastService,
    ],
  }));

  describe('when bootstrapping the Toast Service', () => {

    it(`the ${this.componentName} should bind a default config to the scope`,
      inject([ToastService], (toastService: ToastService) => {
        expect(toastService.config).toEqual(MOCK_TOAST_CONFIG);
      }));

  });

  describe('when displaying a toast message', () => {

    const method = `${this.componentName}.displayToast`;

    it(`calling ${method} should call the toastController with a valid config object`,
      inject([ToastService, ToastController], (toastService: ToastService, mockToastController: ToastController) => {
        spyOn(mockToastController, 'create').and.callThrough();
        toastService.displayToast('hello toastController');
        const expectedArgument = Object.assign({ message: 'hello toastController' }, MOCK_TOAST_CONFIG);
        expect(mockToastController.create).toHaveBeenCalledWith(expectedArgument);
      }));
  });

});
