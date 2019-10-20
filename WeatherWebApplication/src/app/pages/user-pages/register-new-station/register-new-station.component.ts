import { Component } from '@angular/core';
import {LocationUtilities} from '../../../common/location.utilities';

@Component({
  selector: 'ngx-register-new-station',
  templateUrl: 'register-new-station.component.html',
  styleUrls: ['register-new-station.component.scss'],
})
export class RegisterNewStationComponent {
  countries;
  selectedCountry;
  provinces;
  selectedProvince;
  cities;
  selectedCity;
  constructor(private locationUtil: LocationUtilities) {
    // get available stations
    this.getLocationList();
  }
  // this.source.load(data);

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
}
