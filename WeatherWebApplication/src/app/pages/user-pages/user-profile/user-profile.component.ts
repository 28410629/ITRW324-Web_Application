import {Component} from '@angular/core';
import {User} from '../../../models/user.model';
import {AuthService} from '../../../auth/auth-service.service';
import {AngularFireStorage} from '@angular/fire/storage';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'ngx-user-profile',
  templateUrl: 'user-profile.component.html',
  styleUrls: ['user-profile.component.scss'],
})
export class UserProfileComponent {

  // Photo upload
  ref;
  task;
  uploadProgress;
  downloadURL;
  photoURL =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv3-pAMsgi3CZrot52SIgT8Ub0hQNpDZ5ZVkT-Pef7usIaGtNXAg';

  cardHeader;
  isLoaded: boolean = false;

  user: User;
  userProfile: User;
  // user inputs
  name;
  email;
  useruid;

  constructor(private authService: AuthService,
              private afStorage: AngularFireStorage) {
    const storageuser: User = JSON.parse(localStorage.getItem('user'));
    this.user = storageuser;
    this.useruid = this.user.uid;
    this.getUserData();
  }

  submitChanges() {
    this.authService.UpdateUserProfile(
      this.useruid,
      this.name,
      this.photoURL);
  }

  uploadPhoto(event) {
    this.ref = this.afStorage.ref('users/' + this.user.uid + '/' + event.target.files[0].name);
    this.task = this.ref.put(event.target.files[0]);

    this.uploadProgress = this.task.percentageChanges();
    this.task.snapshotChanges().pipe(
      finalize(() => {
        this.ref.getDownloadURL().subscribe(downloadURL => {
          this.photoURL = downloadURL;
          this.uploadProgress = 0;
        });
      }),
    ).subscribe();
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
