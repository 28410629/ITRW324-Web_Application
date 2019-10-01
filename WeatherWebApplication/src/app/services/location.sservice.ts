import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { FetchJsonUtilities } from '../common/fetch-json.utilities';
import {Station, StationList} from '../models/station-list.model';

@Injectable()
export class LocationSservice {
  constructor(private common: FetchJsonUtilities) {
  }

  public FetchWeeklyLocationData(province: string, city: string, date: Date) {
    return this.common.fetchJSON(
      'https://weatherstationapi.ddns.net:5001' +
      '/api/get/locationreadings/location/week?Province=' + province + '&City=' + city + '&Date=' + date)
      .pipe(map(responseData => {
        const data = {} as StationList;
        const stations: Station[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            stations.push(...responseData[key]);
          }
        }
        data.stations = stations;
        return data;
      }));
  }
  public FetchDailyLocationData(province: string, city: string, date: Date) {
    return this.common.fetchJSON(
      'https://weatherstationapi.ddns.net:5001' +
      '/api/get/locationreadings/location/day?Province=' + province + '&City=' + city + '&Date=' + date)
      .pipe(map(responseData => {
        const data = {} as StationList;
        const stations: Station[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            stations.push(...responseData[key]);
          }
        }
        data.stations = stations;
        return data;
      }));


  }
  public FetchMonthlyLocationData(province: string, city: string, date: Date) {
    return this.common.fetchJSON(
      'https://weatherstationapi.ddns.net:5001' +
      '/api/get/locationreadings/location/month?Province=' + province + '&City=' + city + '&Date=' + date)
      .pipe(map(responseData => {
        const data = {} as StationList;
        const stations: Station[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            stations.push(...responseData[key]);
          }
        }
        data.stations = stations;
        return data;
      }));


  }
  public FetchYearlyLocationData(province: string, city: string, date: Date) {
    return this.common.fetchJSON(
      'https://weatherstationapi.ddns.net:5001' +
      '/api/get/locationreadings/location/year?Province=' + province + '&City=' + city + '&Date=' + date)
      .pipe(map(responseData => {
        const data = {} as StationList;
        const stations: Station[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            stations.push(...responseData[key]);
          }
        }
        data.stations = stations;
        return data;
      }));


  }
}
