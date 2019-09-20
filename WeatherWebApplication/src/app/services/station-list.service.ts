import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { FetchJsonUtilities } from '../common/fetch-json.utilities';
import {Station, StationList} from '../models/station-list.model';

@Injectable()
export class StationListService {
  constructor(private common: FetchJsonUtilities) {
  }

  public FetchStationList() {
    return this.common.fetchJSON(
      'https://weatherstationapi.ddns.net:5001/api/get/stationlist/all')
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
