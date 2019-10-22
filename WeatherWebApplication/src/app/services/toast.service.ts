import { Injectable } from '@angular/core';
import {NbToastrService} from '@nebular/theme';

@Injectable()
export class ToastService {
  toastPosition = 'top-right';

  constructor(private toastService: NbToastrService) {
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
    this.toastService.show(
      message,
      title,
      { position: position, status: 'success', duration: 3500 });
  }

  private FailedToast(position, title, message) {
    this.toastService.show(
      message,
      title,
      { position: position, status: 'warning', duration: 3500});
  }

  private InfoToast(position, title, message) {
    this.toastService.show(
      message,
      title,
      { position: position, status: 'info', duration: 3500 });
  }
}
