import {Component, OnDestroy} from '@angular/core';
import {FirebaseUser, User} from '../../../models/user.model';
import {AuthService} from '../../../auth/auth-service.service';
import {AngularFireStorage} from '@angular/fire/storage';
import {finalize} from 'rxjs/operators';
import {Subscription} from 'rxjs';

@Component({
  selector: 'ngx-user-profile',
  templateUrl: 'user-profile.component.html',
  styleUrls: ['user-profile.component.scss'],
})
export class UserProfileComponent implements OnDestroy {

  // Photo upload
  otherProgress = false;
  ref;
  task;
  uploadProgress;
  downloadURL;
  photoURL =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv3-pAMsgi3CZrot52SIgT8Ub0hQNpDZ5ZVkT-Pef7usIaGtNXAg';

  cardHeader;
  isLoaded: boolean = false;

  user: FirebaseUser;
  // user inputs
  name;
  email;
  useruid;
  userSubscription: Subscription;

  constructor(private authService: AuthService,
              private afStorage: AngularFireStorage) {
    const storageuser: FirebaseUser = JSON.parse(localStorage.getItem('user'));
    const userdata: User = JSON.parse(localStorage.getItem('userdata'));
    this.user = storageuser;
    this.useruid = this.user.uid;
    this.getUserData();
    this.name = userdata.displayName;
    this.email = userdata.email;
    this.photoURL = userdata.photoURL;
  }

  submitChanges() {
    this.authService.UpdateUserProfile(
      this.useruid,
      this.name,
      this.photoURL);
  }

  uploadPhoto(event) {
    this.otherProgress = true;
    this.ref = this.afStorage.ref('users/' + this.user.uid + '/' + event.target.files[0].name);
    this.task = this.ref.put(event.target.files[0]);

    this.uploadProgress = this.task.percentageChanges();
    this.task.snapshotChanges().pipe(
      finalize(() => {
        this.ref.getDownloadURL().subscribe(downloadURL => {
          this.photoURL = downloadURL;
          this.submitChanges();
          this.otherProgress = false;
        });
      }),
    ).subscribe();
  }

  getUserData() {
    this.userSubscription = this.authService.GetUserProfileData(this.useruid).
    subscribe(x => {
      this.name = x.displayName;
      this.email = x.email;
      this.photoURL = x.photoURL;
    });
    this.isLoaded = true;
  }

  ngOnDestroy(): void {
    if (this.userSubscription != null) {
      this.userSubscription.unsubscribe();
    }
  }
}
