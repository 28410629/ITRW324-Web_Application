import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LocationUtilities} from '../../../common/location.utilities';
import {ToastService} from '../../../services/toast.service';
import {Station} from '../../../models/station-list.model';

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
  constructor(public router: Router,
              private locationUtil: LocationUtilities,
              private toastService: ToastService) {
    this.getLocationList();
  }

  ngOnInit() {
    this.isLoaded = true;
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
    if (!this.loading) {
      this.loading = true;
      this.toastService.ShowSuccessToast('Register New Station', 'Successfully added station to the system.');
    }
  }
  onClose() {
    this.success = false;
  }

}
