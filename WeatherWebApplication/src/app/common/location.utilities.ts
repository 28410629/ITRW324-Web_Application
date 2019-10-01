import { Injectable } from '@angular/core';
import {Countries, Country} from '../models/location.model';

@Injectable()
export class FetchJsonUtilities {

  countryZA: Country = {country: 'South Africa', province: [
      {
        province: 'Northern Cape',
        cities: [
          {
            city: 'Barkly West',
          },
          {
            city: 'Aggeneys',
          },
        ],
      },
      {
        province: 'Eastern Cape',
        cities: [
          {
            city: '',
          },
        ],
      },
      {
        province: 'Free State',
        cities: [
          {
            city: '',
          },
        ],
      },
      {
        province: 'Western Cape',
        cities: [
          {
            city: '',
          },
        ],
      },
      {
        province: 'Limpopo',
        cities: [
          {
            city: '',
          },
        ],
      },
      {
        province: 'North West',
        cities: [
          {
            city: 'Rustenburg',
          },
          {
            city: 'Potchefstroom',
          },
        ],
      },
      {
        province: 'KwaZulu-Natal',
        cities: [
          {
            city: '',
          },
        ],
      },
      {
        province: 'Mpumalanga',
        cities: [
          {
            city: '',
          },
        ],
      },
      {
        province: 'Gauteng',
        cities: [
          {
            city: '',
          },
        ],
      },
    ]};
  countries: Countries = {Countries: [this.countryZA]};
  constructor() {}


  public getCountry(): string[] {
    const arr: string[] = [];
    this.countries.Countries.forEach(x => {
      arr.push(x.country);
    });
    return arr;
  }

  public getProvinceList(selectedCountry): string[] {
    const arr: string[] = [];
    this.countries.Countries.forEach(x => {
      if (x.country === selectedCountry) {
        x.province.forEach(y => {
          arr.push(y.province);
        });
      }
    });
    return arr;
  }

  public getCityList(selectedCountry, selectedProvince): string[] {
    const arr: string[] = [];
    this.countries.Countries.forEach(x => {
      if (x.country === selectedCountry) {
        x.province.forEach(y => {
          if (y.province === selectedProvince) {
            y.cities.forEach(z => {
              arr.push(z.city);
            });
          }
        });
      }
    });
    return arr;
  }
}
