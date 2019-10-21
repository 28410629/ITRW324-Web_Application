import { Component } from '@angular/core';
import {LocationUtilities} from '../../../common/location.utilities';
import {ToastService} from '../../../services/toast.service';

@Component({
  selector: 'ngx-register-new-station',
  templateUrl: 'register-new-station.component.html',
  styleUrls: ['register-new-station.component.scss'],
})
export class RegisterNewStationComponent {
  // location
  countries;
  selectedCountry;
  provinces;
  selectedProvince;
  cities;
  selectedCity;
  // response
  success: boolean = false;
  // spinner
  loading: boolean = false;
  constructor(private locationUtil: LocationUtilities,
              private toastService: ToastService) {
    // get available stations
    this.getLocationList();
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
    if (!this.loading) {
      this.loading = true;
      this.toastService.ShowSuccessToast('Register New Station', 'Successfully added station to the system.');
    }
  }
  onClose() {
    this.success = false;
  }
}
