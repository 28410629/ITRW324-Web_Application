import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { FetchJsonUtilities } from '../common/fetch-json.utilities';
import { StationDetailModel, StationDetailReading } from '../models/station-detail.model';


@Injectable()
export class StationDetailService {
  constructor(private common: FetchJsonUtilities) {
  }

  public FetchDayStationDetails(stationID: string) {
    return this.common.FetchJsonWithDate(
      'https://weatherstationapi.ddns.net:5001/' +
      'api/get/stationdetail/station/day?StationId=' + stationID)
      .pipe(map(responseData => {
        const data = {} as StationDetailModel;
        const readings: StationDetailReading[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            readings.push(...responseData[key]);
          }
        }
        data.StationDetailReadings = readings;
        return data;
      }));
  }

  public FetchWeekStationDetails(stationID: string) {
    return this.common.FetchJsonWithDate(
      'https://weatherstationapi.ddns.net:5001/' +
      'api/get/stationdetail/station/week?StationId=' + stationID)
      .pipe(map(responseData => {
        const data = {} as StationDetailModel;
        const readings: StationDetailReading[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            readings.push(...responseData[key]);
          }
        }
        data.StationDetailReadings = readings;
        return data;
      }));
  }

  public FetchMonthStationDetails(stationID: string) {
    return this.common.FetchJsonWithDate(
      'https://weatherstationapi.ddns.net:5001/' +
      'api/get/stationdetail/station/month?StationId=' + stationID)
      .pipe(map(responseData => {
        const data = {} as StationDetailModel;
        const readings: StationDetailReading[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            readings.push(...responseData[key]);
          }
        }
        data.StationDetailReadings = readings;
        return data;
      }));
  }

  public FetchYearStationDetails(stationID: string) {
    return this.common.FetchJsonWithDate(
      'https://weatherstationapi.ddns.net:5001/' +
      'api/get/stationdetail/station/year?StationId=' + stationID)
      .pipe(map(responseData => {
        const data = {} as StationDetailModel;
        const readings: StationDetailReading[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            readings.push(...responseData[key]);
          }
        }
        data.StationDetailReadings = readings;
        return data;
      }));
  }
}
