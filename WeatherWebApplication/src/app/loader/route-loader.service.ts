import { Injectable } from '@angular/core';

import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import {User} from '../models/user.model';
import {AuthService} from '../auth/auth-service.service';

@Injectable()
export class RouteLoaderService implements Resolve<User> {
  constructor(private af: AuthService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<User> {
    const storageuser: User = JSON.parse(localStorage.getItem('user'));
    return new Promise((resolve, reject) => {
      this.af.GetUserProfileData(storageuser.uid).subscribe((data) => {
        localStorage.setItem('userdata', JSON.stringify(data));
        resolve(data);
      }, reject);
    });
  }
}
