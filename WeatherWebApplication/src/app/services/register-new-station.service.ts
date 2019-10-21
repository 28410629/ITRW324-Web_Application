import { Injectable } from '@angular/core';
import {FetchJsonUtilities} from '../common/fetch-json.utilities';

@Injectable()
export class RegisterNewStationService {
  constructor(private common: FetchJsonUtilities) {
  }
}
