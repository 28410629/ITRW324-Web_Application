import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { FetchJsonUtilities } from '../common/fetch-json.utilities';
import {AverageReadingEntity, AverageReading} from '../Models/AverageReadingsModel';

@Injectable()
export class AverageReadingService {
  constructor(private common: FetchJsonUtilities) {
  }

  public FetchAverageToday(stationid: string) {

    return this.common.fetchJSON(
      'api/get/stationstatus/station?stationid=' + stationid)
      .pipe(map(responseData => {
          const data = {} as AverageReading;
          const readings: AverageReadingEntity[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              readings.push(responseData[key]);
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
