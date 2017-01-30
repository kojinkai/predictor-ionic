import { ToastService } from './toast.service';
import { MockToastController, MOCK_TOAST_CONFIG } from './toast.service.mock';
import { ToastController } from 'ionic-angular';
import { TestBed, inject } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('Toast Service:', () => {

  beforeEach(() => TestBed.configureTestingModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [
      {provide: ToastController, useClass: MockToastController},
      ToastService,
    ],
  }));

  describe('Bootstrapping the Toast Service', () => {

    it('should define a Toast Service',
      inject([ToastService], (toastService: ToastService) => {
        expect(toastService).toBeDefined();
      }));

    it('should bind a default config to the scope',
      inject([ToastService], (toastService: ToastService) => {
        expect(toastService.config).toEqual(MOCK_TOAST_CONFIG);
      }));

  });

  describe('displaying a toast message', () => {
    it('should call the toastController with a config object containing the user\'s message',
      inject([ToastService, ToastController], (toastService: ToastService, mockToastController: ToastController) => {
        spyOn(mockToastController, 'create').and.callThrough();
        toastService.displayToast('hello toastController');
        const expectedArgument = Object.assign({ message: 'hello toastController' }, MOCK_TOAST_CONFIG);
        expect(mockToastController.create).toHaveBeenCalledWith(expectedArgument);
      }));
  });

});
