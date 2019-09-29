import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth-service.service';
import {getDeepFromObject, NB_AUTH_OPTIONS, NbAuthSocialLink} from '@nebular/auth';

@Component({
  selector: 'ngx-register',
  styleUrls: ['./register.component.scss'],
  templateUrl: './register.component.html',
})
export class RegisterComponent {

  loadingMediumGroup: boolean = false;

  redirectDelay: number = 0;
  showMessages: any = {};

  submitted = false;
  errors: string[] = [];
  messages: string[] = [];
  user: any = {};
  socialLinks: NbAuthSocialLink[] = [];
  // validation = {};
  validation = { fullName: {required: '', minLength: '', maxLength: ''},
    email: {required: '', minLength: '', maxLength: ''},
    password: {required: '', minLength: '', maxLength: ''}};

  constructor(protected auth: AuthService,
    @Inject(NB_AUTH_OPTIONS) protected config = {},
    protected router: Router) {

    this.redirectDelay = this.getConfigValue('forms.register.redirectDelay');
    this.showMessages = this.getConfigValue('forms.register.showMessages');
    this.socialLinks = this.getConfigValue('forms.register.socialLinks');
    this.validation = this.getConfigValue('forms.validation');
  }

  register(): void {
    this.loadingMediumGroup = true;
    this.errors = this.messages = [];
    this.submitted = true;

    this.auth.register(this.user.email, this.user.password, this.user.fullName)
      .then(() => {
          this.submitted = false;
          this.messages = [];
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
      this.router.navigate(['/pages/homepage']);
    }, this.redirectDelay);
  }

  getConfigValue(key: string): any {
    return getDeepFromObject(this.config, key, null);
  }
}
