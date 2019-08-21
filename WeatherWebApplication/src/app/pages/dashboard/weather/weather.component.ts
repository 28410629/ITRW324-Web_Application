import {Component, Input, OnInit} from '@angular/core';
import {AverageReadingService} from '../../../Services/AverageReadingService';



@Component({
  selector: 'ngx-weather',
  styleUrls: ['./weather.component.scss'],
  templateUrl: './weather.component.html',
})

export class WeatherComponent implements OnInit {


  readings: string[] = [];

  constructor(private service: AverageReadingService) {}

  @Input()
  stationId: string;

  ngOnInit() {
    this.service.FetchAverageToday(this.stationId).subscribe(
      data => {
        this.readings = data; // 0=temp, 1=humid
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
      temp = this.readings[0];
      temp = temp.substr(0, temp.indexOf('.'));
    } catch (e) {
      return '0';
    }
    return temp;
  }

  getAvgHumid() {
    let hum;
    try {
      hum = this.readings[1];
      hum = hum.substr(0, hum.indexOf('.'));
    } catch (e) {
      return '0';
    }
    return hum;
  }


}
