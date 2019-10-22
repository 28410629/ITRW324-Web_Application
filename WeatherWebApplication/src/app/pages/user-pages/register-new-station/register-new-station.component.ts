import {Component, OnInit} from '@angular/core';
import {LocationUtilities} from '../../../common/location.utilities';
import {ToastService} from '../../../services/toast.service';
import {ManageStationsService} from '../../../services/manage-stations.service';
import {AuthService} from '../../../auth/auth-service.service';
import {User} from '../../../models/user.model';

@Component({
  selector: 'ngx-register-new-station',
  templateUrl: 'register-new-station.component.html',
  styleUrls: ['register-new-station.component.scss'],
})
export class RegisterNewStationComponent implements OnInit {
  // location
  countries;
  selectedCountry;
  provinces;
  selectedProvince;
  cities;
  selectedCity;
  // nickname
  nickname;
  // id
  stationid;
  // spinner
  loading: boolean = false;
  // subscription
  userSubscription;
  myStationSubscription;
  myStations: Number[] = [];
  useruid;
  user: User;
  constructor(private locationUtil: LocationUtilities,
              private toastService: ToastService,
              private manageStations: ManageStationsService,
              private authService: AuthService) {
    const storageuser: User = JSON.parse(localStorage.getItem('user'));
    this.useruid = storageuser.uid;
    // get available stations
    this.getLocationList();
  }
  ngOnInit() {
    this.myStationSubscription = this.authService.GetUserProfileData(this.useruid)
      .subscribe(
        responseData => {
          this.user = responseData;
          this.myStationSubscription = this.user.myStations;
        });
  }
  getLocationList() {
    this.countries = this.locationUtil.getCountry();
    this.selectedCountry = this.countries[0];
    this.provinces = this.locationUtil.getProvinceList(this.countries[0]);
    this.selectedProvince = this.provinces[0];
    this.populateCities(this.provinces[0]);
  }
  populateCities(name) {
    this.selectedProvince = name;
    this.cities = this.locationUtil.getCityList(this.countries[0], this.selectedProvince);
    this.selectedCity = this.cities[0];
  }
  saveStation() {
    if (Number.isInteger(parseInt(this.stationid, 10))) {
      if (!this.loading)
        this.toastService.ShowInfoToast('Register New Station', 'Sending data to system, please wait for response.');
      this.loading = true;
      this.userSubscription = this.manageStations
        .CreateStation(this.selectedProvince, this.selectedCity, this.stationid, this.nickname)
        .subscribe(data => {
          if (data.success) {
            this.toastService.ShowSuccessToast('Register New Station', 'Successfully added station to the system.');
            this.addStationToFirebase(parseInt(this.stationid, 10));
          } else {
            this.toastService.ShowFailedToast('Register New Station', 'Failed to add station to system.');
          }
          this.loading = false;
          this.userSubscription.unsubscribe();
        });
    } else {
      this.toastService.ShowFailedToast('Register New Station', 'Please enter a correct station id.');
    }
  }
  addStationToFirebase(newStation: number) {
    this.myStations.push(newStation);
    this.authService.UpdateUserOwnedStations(this.myStations);
  }
}

