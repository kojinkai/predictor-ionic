import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

@Injectable()
export class ToastService {

  config = {
    duration: 3000,
    position: 'bottom',
  };

  constructor(private toastCtrl: ToastController) {};

  public displayToast(message) {
    const options = Object.assign({ message: message }, this.config);
    const toast = this.toastCtrl.create(options);
    toast.present();
  }
}
