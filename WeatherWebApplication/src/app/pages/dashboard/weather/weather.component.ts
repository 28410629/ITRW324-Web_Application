import {Component, Input, OnInit} from '@angular/core';
import {AverageReadingService} from '../../../Services/AverageReadingService';

@Component({
  selector: 'ngx-weather',
  styleUrls: ['./weather.component.scss'],
  templateUrl: './weather.component.html',
})

export class WeatherComponent implements OnInit {


  statusReadings;

  constructor(private service: AverageReadingService) {}

  @Input()
  stationId: string;

  ngOnInit() {
    this.service.FetchAverageToday(this.stationId).subscribe(
      data => {
        this.statusReadings = data.avgReadings;
      },
      error => {
      },
    );

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
      temp = +this.statusReadings[1];
      temp = Math.round(temp);
    } catch (e) {
      return '0';
    }
    return temp.toString();
  }

  getAvgHumid() {
    let hum;
    try {
      hum = +this.statusReadings[5];
      hum = Math.round(hum);
    } catch (e) {
      return '0';
    }
    return hum.toString();
  }

  getMaxTemp() {
    let mx;
    try {
      mx = +this.statusReadings[2];
      mx = Math.round(mx);
    } catch (e) {
      return '0';
    }
    return mx.toString();
  }

  getMinTemp() {
    let min;
    try {
      min = +this.statusReadings[3];
      min = Math.round(min);
    } catch (e) {
      return '0';
    }
    return min.toString();
  }

  getLight() {
    let lig;
    try {
      lig = +this.statusReadings[4];
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
      f1 = +this.statusReadings[6];
      f1 = Math.round(f1);
    } catch (e) {
      return '0';
    }
    return f1.toString();
  }

  getForecast2() {
    let f2;
    try {
      f2 = +this.statusReadings[7];
      f2 = Math.round(f2);
    } catch (e) {
      return '0';
    }
    return f2.toString();
  }

  getForecast3() {
    let f3;
    try {
      f3 = +this.statusReadings[8];
      f3 = Math.round(f3);
    } catch (e) {
      return '0';
    }
    return f3.toString();
  }

  getForecast4() {
    let f4;
    try {
      f4 = +this.statusReadings[9];
      f4 = Math.round(f4);
    } catch (e) {
      return '0';
    }
    return f4.toString();
  }

  getStationName() {
    let name;
    try {
       name = this.statusReadings[0];
      if (name === '')
        return 'Unknown';
    } catch (e) {
      return 'Unknown';
    }
    return name;
  }

  isStationOnline() {
    if (this.getAvgTemp() > 0)
      return true;
    else
    return false;
  }

}
