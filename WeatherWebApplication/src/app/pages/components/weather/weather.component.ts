import {Component, EventEmitter, Input, Output} from '@angular/core';
import {AverageReadingEntity} from '../../../models/averagereadings.model';
import {Router} from '@angular/router';

@Component({
  selector: 'ngx-weather',
  styleUrls: ['./weather.component.scss'],
  templateUrl: './weather.component.html',
})

export class WeatherComponent {

  @Input()
  statusReadings: AverageReadingEntity;

  @Input()
  stationid;

  @Input()
  isSelectable = false;
  @Output() updateFavs = new EventEmitter();
  checked;
  @Input()
  listOfFavs = [];

  constructor(public router: Router) {
  }


  private weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  getDayFromNow(daysFromNow: number) {
    const date = new Date();
    const targetDay = new Date(date.getTime() + daysFromNow * 24 * 60 * 60 * 1000);
    return this.weekdays[targetDay.getDay()];
  }
  getToday() {
    const d = new Date();
    return d;
  }

  getAvgTemp() {
    let temp;
    try {
      temp = +this.statusReadings.AverageTemp;
      temp = Math.round(temp);
    } catch (e) {
      return '0';
    }
    return temp.toString();
  }

  getAvgHumid() {
    let hum;
    try {
      hum = +this.statusReadings.Humidity;
      hum = Math.round(hum);
    } catch (e) {
      return '0';
    }
    return hum.toString();
  }

  getMaxTemp() {
    let mx;
    try {
      mx = +this.statusReadings.MaxTemp;
      mx = Math.round(mx);
    } catch (e) {
      return '0';
    }
    return mx.toString();
  }

  getMinTemp() {
    let min;
    try {
      min = +this.statusReadings.MinTemp;
      min = Math.round(min);
    } catch (e) {
      return '0';
    }
    return min.toString();
  }

  getLight() {
    let lig;
    try {
      lig = +this.statusReadings.AmbientLight;
      lig *= 1.0;
      lig = lig / 1024.0 * 100.0;
      lig = Math.round(lig);
    } catch (e) {
      return '0';
    }
    return lig.toString();
  }


  getForecast1() {
    let f1;
    try {
      f1 = +this.statusReadings.ForecastDay1;
      f1 = Math.round(f1);
    } catch (e) {
      return '0';
    }
    return f1.toString();
  }

  getForecast2() {
    let f2;
    try {
      f2 = +this.statusReadings.ForecastDay2;
      f2 = Math.round(f2);
    } catch (e) {
      return '0';
    }
    return f2.toString();
  }

  getForecast3() {
    let f3;
    try {
      f3 = +this.statusReadings.ForecastDay3;
      f3 = Math.round(f3);
    } catch (e) {
      return '0';
    }
    return f3.toString();
  }

  getForecast4() {
    let f4;
    try {
      f4 = +this.statusReadings.ForecastDay4;
      f4 = Math.round(f4);
    } catch (e) {
      return '0';
    }
    return f4.toString();
  }

  getStationName() {
    let name;
    try {
       name = this.statusReadings.StationName;
      if (name === '')
        return 'Station X  - Error';
    } catch (e) {
      return 'Station X  - Error';
    }
    return name;
  }

  isStationOnline() {
    if (this.getAvgTemp() > 0)
      return true;
    else
    return false;
  }

  isDayTime() {
    const hr = (new Date()).getHours();
    if (hr > 7 && hr < 18)
      return true;
    else
      return false;
  }

  openStationDetail() {
    this.router.navigate(['pages/station-details/' + this.stationid + '/']);
  }

  toggle(checked: boolean) {
    this.checked = checked;
    this._sendDataToParent();
  }

  _sendDataToParent() {
    this.updateFavs.emit(this.stationid);
  }
  checkForFav() {
    return this.listOfFavs.includes(Number(this.stationid));
  }
}