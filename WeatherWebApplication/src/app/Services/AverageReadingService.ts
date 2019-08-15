import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { FetchJsonUtilities } from '../common/fetch-json.utilities';
import {AverageReadingEntity, Readings} from '../Models/AverageReadingsModel';

@Injectable()
export class AverageReadingService {
  constructor(private common: FetchJsonUtilities) {
  }

  public FetchAverageToday(stationid: string) {
    return this.common.fetchJSON(
      'https://weatherstationapi.ddns.net:5001/api/get/averagereadings/station/day?stationid=' + stationid)
      .pipe(map(responseData => {
          const readings: AverageReadingEntity[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              readings.push(...responseData[key]);
            }
          }
          const stringData = [readings[0].averageTemperature.toString(), readings[0].averageHumidity.toString()];
          return stringData;
        }),
        catchError(errorRes => {
          return throwError(errorRes);
        }),
      );
  }
}
