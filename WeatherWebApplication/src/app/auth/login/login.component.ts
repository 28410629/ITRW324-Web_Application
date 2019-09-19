import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth-service.service';
import {getDeepFromObject, NB_AUTH_OPTIONS, NbAuthSocialLink} from '@nebular/auth';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {

  redirectDelay: number = 0;

  errors: string[] = [];
  messages: string[] = [];
  user: any = { rememberMe: true };

  showMessages: any = {};
  submitted: boolean = false;
  socialLinks: NbAuthSocialLink[] = [];

  validation = { password: {required: '', minLength: '', maxLength: ''}};

  constructor(protected auth: AuthService, @Inject(NB_AUTH_OPTIONS) protected config = {}, protected router: Router) {
    this.redirectDelay = this.getConfigValue('forms.login.redirectDelay');
    this.showMessages = this.getConfigValue('forms.login.showMessages');
    this.socialLinks = this.getConfigValue('forms.login.socialLinks');
    this.validation = this.getConfigValue('forms.validation');
  }

  loginEmail() {
    this.errors = this.messages = [];
    this.submitted = true;

    this.auth.signInWithEmail(this.user.email, this.user.password)
      .then((res) => {
        this.submitted = false;
        // this.messages = [res];

        this.redirectToDashboard();
      })
      .catch((err) => {
        this.submitted = false;
        this.errors = [err];
      });
  }

  redirectToDashboard() {
    setTimeout(() => {
      this.router.navigate(['/pages/homepage']);
    }, this.redirectDelay);
  }

  getConfigValue(key: string): any {
    return getDeepFromObject(this.config, key, null);
  }
}
