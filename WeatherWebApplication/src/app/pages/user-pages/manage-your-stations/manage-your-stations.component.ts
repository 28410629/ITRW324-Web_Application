import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {AuthService} from '../../../auth/auth-service.service';
import {ToastService} from '../../../services/toast.service';
import {User} from '../../../models/user.model';
import {StationListService} from '../../../services/station-list.service';
import {Station} from '../../../models/station-list.model';

@Component({
  selector: 'ngx-register-new-station',
  templateUrl: 'manage-your-stations.component.html',
  styleUrls: ['manage-your-stations.component.scss'],
})
export class ManageYourStationsComponent implements OnInit, OnDestroy {
  userSubscription: Subscription;
  favSubscription: Subscription;
  user: User;
  myStations: Number[] = [];
  useruid: string;
  stationlist: Station[];
  userOwnedStations: Station[] = [];
  favStations: Number[] = [];
  constructor(private authService: AuthService,
              private toastService: ToastService,
              private stationService: StationListService) {
    const storageuser: User = JSON.parse(localStorage.getItem('user'));
    this.useruid = storageuser.uid;
  }
  ngOnInit(): void {
  this.getData();
  }
  ngOnDestroy() {
    if (this.userSubscription != null)
      this.userSubscription.unsubscribe();
    if (this.favSubscription != null)
      this.favSubscription.unsubscribe();
  }

  getData() {
    this.userSubscription = this.authService.GetUserProfileData(this.useruid)
      .subscribe(
        responseData => {
          this.myStations = responseData.favStations; // change this to owned stations.
          if (responseData.favStations.length > 0) {
            this.getStationList();
          } else {
            this.toastService.ShowFailedToast('Your Stations', 'You have no stations.');
          }
        });
  }
  getStationList() {
    this.stationService.FetchStationList()
      .subscribe(data => {
        this.stationlist = data.stations;
        if (data.stations != null) {
          this.setUserStations();
        } else {
          this.getStationList();
        }
      });
  }
  setUserStations() {
    for (let x = 0; x < this.stationlist.length; x++) {
      if (this.myStations.includes(this.stationlist[x].stationId))
        this.userOwnedStations.push(this.stationlist[x]);
    }
  }
  refreshMyData(event) {
    this.stationlist = [];
    this.myStations = [];
    this.userOwnedStations = [];
    this.userSubscription.unsubscribe();
    this.updateFavStations(event);
    this.getData();
  }
  updateFavStations(newFav: Number) {
    if (this.favSubscription != null)
      this.favSubscription.unsubscribe();
    this.favSubscription = this.authService.GetUserProfileData(this.useruid)
      .subscribe(
        responseData => {
          this.user = responseData;
          this.favStations = this.user.favStations;
          if (this.favStations.includes(newFav)) { // remove station from favourites
            this.favStations.splice(this.favStations.indexOf(newFav), 1);
          }
          this.authService.UpdateUserFavourites(this.favStations);
        });
  }
}
