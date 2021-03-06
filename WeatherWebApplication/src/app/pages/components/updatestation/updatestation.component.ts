import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {LocationUtilities} from '../../../common/location.utilities';
import {ToastService} from '../../../services/toast.service';
import {Station} from '../../../models/station-list.model';
import {ManageStationsService} from '../../../services/manage-stations.service';

@Component({
  selector: 'ngx-updatestations',
  styleUrls: ['./updatestation.component.scss'],
  templateUrl: './updatestation.component.html',
})

export class UpdatestationComponent implements OnInit {

  isLoaded = false;
  countries;
  selectedCountry;
  provinces;
  selectedProvince;
  cities;
  selectedCity;
  success: boolean = false;
  loading: boolean = false;
  @Input()
  myStation: Station;
  stationNickname = '';
  userSubscription;
  deleteSubscription;
  @Output() refresh = new EventEmitter();
  constructor(public router: Router,
              private locationUtil: LocationUtilities,
              private toastService: ToastService,
              private manageService: ManageStationsService) {
    this.getLocationList();
  }
  ngOnInit() {
    this.isLoaded = true;
    this.stationNickname = this.myStation.nickName;
    this.selectedProvince = this.myStation.province;
    this.populateCities(this.selectedProvince);
    this.selectedCity = this.myStation.city;
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
  updateStation() {

    if (!this.loading)
      this.toastService.ShowInfoToast('Edit Station', 'Sending data to system, please wait for response.');
    this.loading = true;
    this.userSubscription = this.manageService.EditStation(this.selectedProvince,
      this.selectedCity,
      this.myStation.stationId.toString(),
      this.stationNickname)
      .subscribe(data => {
        if (data.success) {
          this.toastService.ShowSuccessToast('Edit Your Station', 'Successfully edited your station.');
        } else {
          this.toastService.ShowFailedToast('Edit Your Station', 'Failed to edit your station.');
        }
        this.loading = false;
        this.userSubscription.unsubscribe();
      });
    }
    deleteStation() {
      if (!this.loading)
        this.toastService.ShowInfoToast('Delete Station', 'Deleting station...');
      this.loading = true;
      this.deleteSubscription = this.manageService.DeleteStation(this.myStation.stationId.toString())
        .subscribe(data => {
          if (data.success) {
            this.toastService.ShowSuccessToast('Deleted Station Successfully', 'Successfully deleted your station.');
          } else {
            this.toastService.ShowFailedToast('Failed To Delete Station', 'Failed to delete your station.');
          }
          this.loading = false;
          this.deleteSubscription.unsubscribe();
          this.refreshData();
        });
    }
    refreshData() {
      this.refresh.emit(this.myStation.stationId);
    }
 }

