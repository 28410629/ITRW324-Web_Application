import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { FetchJsonUtilities } from '../common/fetch-json.utilities';
import {LocationOverview, Reading} from '../models/location-overview.model';

@Injectable()
export class LocationService {
  constructor(private common: FetchJsonUtilities) {
  }

  public FetchWeeklyLocationData(province: string, city: string) {
    return this.common.FetchJsonWithDate(
      'https://weatherstationapi.ddns.net:5001' +
      '/api/get/locationreadings/location/week?Province='
      + province + '&City=' + city)
      .pipe(map(responseData => {
        let found;
        const data = {} as LocationOverview;
        const stations: Reading[] = [];
        for (const key in responseData) {
          if (key === 'found') {
            found = responseData[key];
          } else {
            if (responseData.hasOwnProperty(key)) {
              stations.push(...responseData[key]);
            }
          }
        }
        data.found = found;
        data.readings = stations;
        return data;
      }));
  }
  public FetchDailyLocationData(province: string, city: string) {
    return this.common.FetchJsonWithDate(
      'https://weatherstationapi.ddns.net:5001' +
      '/api/get/locationreadings/location/day?Province=' + province + '&City='
      + city)
      .pipe(map(responseData => {
        let found;
        const data = {} as LocationOverview;
        const stations: Reading[] = [];
        for (const key in responseData) {
          if (key === 'found') {
            found = responseData[key];
          } else {
            if (responseData.hasOwnProperty(key)) {
              stations.push(...responseData[key]);
            }
          }
        }
        data.found = found;
        data.readings = stations;
        return data;
      }));
  }

  public FetchMonthlyLocationData(province: string, city: string) {
    return this.common.FetchJsonWithDate(
      'https://weatherstationapi.ddns.net:5001' +
      '/api/get/locationreadings/location/month?Province=' + province +
      '&City=' + city)
      .pipe(map(responseData => {
        let found;
        const data = {} as LocationOverview;
        const stations: Reading[] = [];
        for (const key in responseData) {
          if (key === 'found') {
            found = responseData[key];
          } else {
            if (responseData.hasOwnProperty(key)) {
              stations.push(...responseData[key]);
            }
          }
        }
        data.found = found;
        data.readings = stations;
        return data;
      }));
  }

  public FetchYearlyLocationData(province: string, city: string) {
    return this.common.FetchJsonWithDate(
      'https://weatherstationapi.ddns.net:5001' +
      '/api/get/locationreadings/location/year?Province=' + province +
      '&City=' + city)
      .pipe(map(responseData => {
        let found;
        const data = {} as LocationOverview;
        const stations: Reading[] = [];
        for (const key in responseData) {
          if (key === 'found') {
            found = responseData[key];
          } else {
            if (responseData.hasOwnProperty(key)) {
              stations.push(...responseData[key]);
            }
          }
        }
        data.found = found;
        data.readings = stations;
        return data;
      }));
  }
}
