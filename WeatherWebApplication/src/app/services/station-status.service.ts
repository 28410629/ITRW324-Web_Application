import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { FetchJsonUtilities } from '../common/fetch-json.utilities';
import {AverageReadingEntity, AverageReading} from '../models/averagereadings.model';

@Injectable()
export class StationStatusService {
  constructor(private common: FetchJsonUtilities) {
  }

  public FetchAverageToday(stationids: string) {
    return this.common.FetchJsonWithDate(
      'https://weatherstationapi.ddns.net:5001/api/get/stationstatus/station?stationids=' + stationids)
      .pipe(map(responseData => {
          const data = {} as AverageReading;
          const readings: AverageReadingEntity[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              readings.push(...responseData[key]);
            }
          }
          data.avgReadings = readings;
          return data;
        }),
        catchError(errorRes => {
          return throwError(errorRes);
        }),
      );
  }
}
