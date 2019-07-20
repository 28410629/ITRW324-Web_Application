import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ReadingEntity, Readings } from '../models/readings-preview.model';
import { FetchJsonUtilities } from '../common/fetch-json.utilities';

@Injectable()
export class ReadingsPreviewService {
  constructor(private http: HttpClient, private common: FetchJsonUtilities) {}

  public FetchAllReadings() {
    return this.common.fetchJSON('https://weatherstationapi.ddns.net:5001/api/get/readings')
      .pipe(map(responseData => {
          const data = {} as Readings;
          const readings: ReadingEntity[] = [];
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
        })
      );
  }
}
