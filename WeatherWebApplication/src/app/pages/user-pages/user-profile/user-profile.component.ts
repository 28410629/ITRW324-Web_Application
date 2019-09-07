import {Component} from '@angular/core';
import {User} from '../../../models/user.model';

@Component({
  selector: 'ngx-user-profile',
  templateUrl: 'user-profile.component.html',
  styleUrls: ['user-profile.component.scss'],
})
export class UserProfileComponent {

  cardHeader;
  isLoaded: boolean = false;
  useruid;

  constructor() {
    const storageuser: User = JSON.parse(localStorage.getItem('user'));
    this.useruid = storageuser.uid;
    this.cardHeader = this.useruid;
    this.isLoaded = true;
  }
}
