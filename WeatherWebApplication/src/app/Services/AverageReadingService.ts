import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { FetchJsonUtilities } from '../common/fetch-json.utilities';
import {AverageReadingEntity, Readings} from '../Models/AverageReadingsModel';

@Injectable()
export class AverageReadingService {
  constructor(private http: HttpClient, private common: FetchJsonUtilities) {
  }

  public FetchAverageToday(id: string) {
    return this.common.fetchJSON(
      'https://weatherstationapi.ddns.net:5001/api/get/averagereadings/station/day?stationid=' + id)
      .pipe(map(responseData => {
          const data = {} as Readings;
          const readings: AverageReadingEntity[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              readings.push(...responseData[key]);
            }
          }
          data.readings = readings;
          return data;
        }),
        catchError(errorRes => {
          return throwError(errorRes);
        }),
      );
  }
}
