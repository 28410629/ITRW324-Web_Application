import { Component } from '@angular/core';
import {LocationUtilities} from '../../../common/location.utilities';
import {ToastService} from '../../../services/toast.service';

@Component({
  selector: 'ngx-register-new-station',
  templateUrl: 'manage-your-stations.component.html',
  styleUrls: ['manage-your-stations.component.scss'],
})
export class ManageYourStationsComponent {
  // location
  countries;
  selectedCountry;
  provinces;
  selectedProvince;
  cities;
  selectedCity;
  success: boolean = false;
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
