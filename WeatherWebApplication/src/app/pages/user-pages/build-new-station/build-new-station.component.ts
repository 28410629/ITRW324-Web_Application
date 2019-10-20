import {Component, OnInit, OnDestroy} from '@angular/core';
import {AuthService} from '../../../auth/auth-service.service';
import {Subscription} from 'rxjs';
import {User} from '../../../models/user.model';

@Component({
  selector: 'ngx-build-new-station',
  templateUrl: 'build-new-station.component.html',
  styleUrls: ['build-new-station.component.scss'],
})
export class BuildNewStationComponent implements OnInit, OnDestroy {
  checkBoxArray: boolean[] = [];
  percentageComplete: number;
  userSubscription: Subscription;
  useruid: string;
  user: User;
  constructor(private authService: AuthService) {
    this.percentageComplete = 0;
    const storageuser: User = JSON.parse(localStorage.getItem('user'));
    this.useruid = storageuser.uid;
  }

  ngOnInit(): void {
    this.userSubscription = this.authService.GetUserProfileData(this.useruid)
      .subscribe(
        responseData => {
          this.user = responseData;
          this.checkBoxArray = this.user.checkBoxArray;
          this.updateProgressBar();
        });
  }
  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  saveToFirebase() {
    this.authService.UpdateUserProgress(this.checkBoxArray);
    this.updateProgressBar();
  }

  updateProgressBar() {
    let counter = 0;
    for (let i = 0; i < this.checkBoxArray.length; i++) {
      if (this.checkBoxArray[i] === true) {
        counter += 1;
      }
    }
    this.percentageComplete = ((counter / this.checkBoxArray.length) * 100);
  }

  ResetProgress() {
    for (let i = 0; i < this.checkBoxArray.length; i++) {
      this.checkBoxArray[i] = false;
    }
    this.saveToFirebase();
  }
}
