import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class FetchJsonUtilities {
  constructor(private http: HttpClient) {}

  public fetchJSON(url): Observable<any> {
    const headers = new HttpHeaders().set('Access-Control-Allow-Origin', 'Test');
    const apiURL = url;
    return this.http.get<any>(apiURL, { headers });
  }
}