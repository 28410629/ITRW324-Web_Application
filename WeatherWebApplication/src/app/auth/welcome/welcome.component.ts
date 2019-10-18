import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import {getDeepFromObject, NB_AUTH_OPTIONS, NbAuthSocialLink} from '@nebular/auth';

@Component({
  selector: 'ngx-login',
  templateUrl: './welcome.component.html',
})
export class WelcomeComponent {

  loadingMediumGroup: boolean = false;

  redirectDelay: number = 0;

  errors: string[] = [];
  messages: string[] = [];
  user: any = { rememberMe: true };

  showMessages: any = {};
  submitted: boolean = false;
  socialLinks: NbAuthSocialLink[] = [];

  validation = { password: {required: '', minLength: '', maxLength: ''}};

  constructor(@Inject(NB_AUTH_OPTIONS) protected config = {}, protected router: Router) {
  }

  redirectToLogin() {
    this.router.navigate(['auth/login']);
  }

  redirectToRegister() {
    this.router.navigate(['auth/register']);
  }

  getConfigValue(key: string): any {
    return getDeepFromObject(this.config, key, null);
  }
}
