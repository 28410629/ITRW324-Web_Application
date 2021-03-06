import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth-service.service';
import {getDeepFromObject, NB_AUTH_OPTIONS } from '@nebular/auth';

@Component({
  selector: 'ngx-request-password',
  styleUrls: ['./request-password.component.scss'],
  templateUrl: './request-password.component.html',
})
export class RequestPasswordComponent {

  loadingMediumGroup: boolean = false;

  redirectDelay: number = 0;
  showMessages: any = {};

  submitted = false;
  errors: string[] = [];
  messages: string[] = [];
  user: any = {};

  // validation = {};
  validation = { fullName: {required: '', minLength: '', maxLength: ''},
    email: {required: '', minLength: '', maxLength: ''},
    password: {required: '', minLength: '', maxLength: ''}};

  constructor(protected auth: AuthService,
              @Inject(NB_AUTH_OPTIONS) protected config = {},
              protected router: Router) {

    this.redirectDelay = this.getConfigValue('forms.requestPassword.redirectDelay');
    this.showMessages = this.getConfigValue('forms.requestPassword.showMessages');

    this.validation = this.getConfigValue('forms.validation');
  }

  requestPass() {
    this.loadingMediumGroup = true;
    this.errors = this.messages = [];
    this.submitted = true;

    this.auth.requestPass(this.user.email).then(
      (res) => {
      this.submitted = false;
      // this.messages = [res];

      this.redirectToDashboard();
    })
    .catch((err) => {
      this.loadingMediumGroup = false;
      this.submitted = false;
      this.errors = [err];
    });
  }

  redirectToDashboard() {
    setTimeout(() => {
      this.router.navigate(['/pages/components']);
    }, this.redirectDelay);
  }

  getConfigValue(key: string): any {
    return getDeepFromObject(this.config, key, null);
  }
}
