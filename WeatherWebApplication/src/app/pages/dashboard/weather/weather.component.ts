import {Component, Input, OnInit} from '@angular/core';
import {AverageReadingService} from '../../../Services/AverageReadingService';
import {AverageReading, AverageReadingEntity} from '../../../Models/AverageReadingsModel';


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
      temp = this.statusReadings[1];
      if (temp === '0')
        return '0';
      temp = temp.substr(0, temp.indexOf('.'));
    } catch (e) {
      return '0';
    }
    return temp;
  }

  getAvgHumid() {
    let hum;
    try {
      hum = this.statusReadings[5];
      if (hum === '0')
        return '0';
      hum = hum.substr(0, hum.indexOf('.'));
    } catch (e) {
      return '0';
    }
    return hum;
  }

  getMaxTemp() {
    let mx;
    try {
      mx = this.statusReadings[2];
      if (mx === '0')
        return '0';
      mx = mx.substr(0, mx.indexOf('.'));
    } catch (e) {
      return '0';
    }
    return mx;
  }

  getMinTemp() {
    let min;
    try {
      min = this.statusReadings[3];
      if (min === '0')
        return '0';
      min = min.substr(0, min.indexOf('.'));
    } catch (e) {
      return '0';
    }
    return min;
  }

  getLight() {
    let lig;
    try {
      lig = +this.statusReadings[4];
      lig *= 1.0;
      lig = lig / 1024.0 * 100.0
      lig = Math.round(lig);
    } catch (e) {
      return '0';
    }
    return lig.toString();
  }


  getForecast1() {
    let f1;
    try {
      f1 = this.statusReadings[3];
      if (f1 === '0')
        return '0';
      f1 = f1.substr(0, f1.indexOf('.'));
    } catch (e) {
      return '0';
    }
    return f1;
  }


}
