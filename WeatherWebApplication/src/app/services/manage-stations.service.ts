import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import {LocationOverview, Reading} from '../models/location-overview.model';
import {FetchJsonUtilities} from '../common/fetch-json.utilities';
import {ManageStationsModel} from '../models/manage-stations.model';

@Injectable()
export class ManageStationsService {
  constructor(private common: FetchJsonUtilities) {
  }

  public DeleteStation(province: string, city: string, stationid: string, nickname) {
    return this.common.FetchJson(
      'https://weatherstationapi.ddns.net:5001' +
      '/api/get/managestations/delete?Province='
      + province + '&City=' + city + '&StationId=' + stationid + '&Nickname=' + nickname)
      .pipe(map(responseData => {
        const data = {} as ManageStationsModel;
        for (const key in responseData) {
          if (key === 'success') {
            data.success = responseData[key];
          }
        }
        return data;
      }));
  }
  public EditStation(province: string, city: string, stationid: string, nickname) {
    return this.common.FetchJson(
      'https://weatherstationapi.ddns.net:5001' +
      '/api/get/managestations/edit?Province='
      + province + '&City=' + city + '&StationId=' + stationid + '&Nickname=' + nickname)
      .pipe(map(responseData => {
        const data = {} as ManageStationsModel;
        for (const key in responseData) {
          if (key === 'success') {
            data.success = responseData[key];
          }
        }
        return data;
      }));
  }

  public CreateStation(province: string, city: string, stationid: string, nickname) {
    return this.common.FetchJson(
      'https://weatherstationapi.ddns.net:5001' +
      '/api/get/managestations/create?Province='
      + province + '&City=' + city + '&StationId=' + stationid + '&Nickname=' + nickname)
      .pipe(map(responseData => {
        const data = {} as ManageStationsModel;
        for (const key in responseData) {
          if (key === 'success') {
            data.success = responseData[key];
          }
        }
        return data;
      }));
  }
}
