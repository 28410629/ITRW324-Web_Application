import { Injectable } from '@angular/core';
import {NbToastrService} from '@nebular/theme';

@Injectable()
export class ToastService {
  constructor( private toastrService: NbToastrService) {
  }

  public ShowSuccessToast(title, message) {
    this.SuccessToast('top-right', title, message);
  }

  public ShowFailedToast(title, message) {
    this.FailedToast('top-right', title, message);
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
}
