import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as moment from 'moment-timezone';

@Injectable()
export class FetchJsonUtilities {
  constructor(private http: HttpClient) {}

  public FetchJson(url): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const apiURL = url;
    return this.http.get<any>(apiURL, { headers });
  }

  public FetchJsonWithDate(url): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const apiURL = url + '&Date=' + this.FetchLocalDateTime();
    return this.http.get<any>(apiURL, { headers });
  }

  private FetchLocalDateTime(): string {
    return moment(new Date()).tz('Atlantic/Azores').format().toString();
    // returns +00:00 time.
  }
}
