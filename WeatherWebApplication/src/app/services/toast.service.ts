import { Injectable } from '@angular/core';
import {NbToastrService} from '@nebular/theme';

@Injectable()
export class ToastService {
  toastPosition = 'top-right';

  constructor( private toastrService: NbToastrService) {
  }

  public ShowSuccessToast(title, message) {
    this.SuccessToast(this.toastPosition, title, message);
  }

  public ShowFailedToast(title, message) {
    this.FailedToast(this.toastPosition, title, message);
  }

  public ShowInfoToast(title, message) {
    this.InfoToast(this.toastPosition, title, message);
  }

  private SuccessToast(position, title, message) {
    this.toastrService.show(
      message,
      title,
      { position: position, status: 'success' });
  }

  private FailedToast(position, title, message) {
    this.toastrService.show(
      message,
      title,
      { position: position, status: 'warning' });
  }

  private InfoToast(position, title, message) {
    this.toastrService.show(
      message,
      title,
      { position: position, status: 'info' });
  }
}
