import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as moment from 'moment-timezone';

@Injectable()
export class FetchJsonUtilities {
  constructor(private http: HttpClient) {}

  public fetchJSON(url): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const apiURL = url;
    return this.http.get<any>(apiURL, { headers });
  }

  public fetchLocalDateTime(): string {
    return moment(new Date()).tz('Atlantic/Azores').format().toString();
    // return moment(new Date()).format().toString();
  }
}
