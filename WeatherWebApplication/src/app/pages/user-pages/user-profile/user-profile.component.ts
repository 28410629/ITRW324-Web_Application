import {Component} from '@angular/core';
import {User} from '../../../models/user.model';
import {AuthService} from '../../../auth/auth-service.service';

@Component({
  selector: 'ngx-user-profile',
  templateUrl: 'user-profile.component.html',
  styleUrls: ['user-profile.component.scss'],
})
export class UserProfileComponent {

  cardHeader;
  isLoaded: boolean = false;

  user: User;
  userProfile: User;
  // user inputs
  name;
  email;
  useruid;

  constructor(private authService: AuthService) {
    const storageuser: User = JSON.parse(localStorage.getItem('user'));
    this.user = storageuser;
    this.useruid = this.user.uid;
    this.getUserData();
  }

  getUserData() {
    this.authService.GetUserProfileData(this.useruid).
    subscribe(x => {
      this.name = x.displayName;
      this.email = x.email;
    });
    this.isLoaded = true;
  }
}
