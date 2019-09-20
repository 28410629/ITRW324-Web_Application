import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { FetchJsonUtilities } from '../common/fetch-json.utilities';
import {RawReading, RawReadings} from '../models/raw-readings.model';

@Injectable()
export class RawReadingsService {
  constructor(private common: FetchJsonUtilities) {
  }

  public FetchDayStationRawReadings(stationID: string) {
    return this.common.fetchJSON(
      'https://weatherstationapi.ddns.net:5001/' +
      'api/get/rawreadings/station/day?StationId=' + stationID)
      .pipe(map(responseData => {
        const data = {} as RawReadings;
        const readings: RawReading[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            readings.push(...responseData[key]);
          }
        }
        data.Readings = readings;
        return data;
      }));
  }

  public FetchWeekStationRawReadings(stationID: string) {
    return this.common.fetchJSON(
      'https://weatherstationapi.ddns.net:5001/' +
      'api/get/rawreadings/station/week?StationId=' + stationID)
      .pipe(map(responseData => {
        const data = {} as RawReadings;
        const readings: RawReading[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            readings.push(...responseData[key]);
          }
        }
        data.Readings = readings;
        return data;
      }));
  }

  public FetchMonthStationRawReadings(stationID: string) {
    return this.common.fetchJSON(
      'https://weatherstationapi.ddns.net:5001/' +
      'api/get/rawreadings/station/month?StationId=' + stationID)
      .pipe(map(responseData => {
        const data = {} as RawReadings;
        const readings: RawReading[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            readings.push(...responseData[key]);
          }
        }
        data.Readings = readings;
        return data;
      }));
  }

  public FetchYearStationRawReadings(stationID: string) {
    return this.common.fetchJSON(
      'https://weatherstationapi.ddns.net:5001/' +
      'api/get/rawreadings/station/year?StationId=' + stationID)
      .pipe(map(responseData => {
        const data = {} as RawReadings;
        const readings: RawReading[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            readings.push(...responseData[key]);
          }
        }
        data.Readings = readings;
        return data;
      }));
  }
}
