import {Component, Input, OnInit} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {AverageReadingEntity} from '../../../Models/AverageReadingsModel';
import {AverageReadingService} from '../../../Services/AverageReadingService';



@Component({
  selector: 'ngx-weather',
  styleUrls: ['./weather.component.scss'],
  templateUrl: './weather.component.html',
})

export class WeatherComponent implements OnInit {


  public readings: AverageReadingEntity[] = [];
  public temp = '0';
  public humid = '0';

  @Input()
  stationId: string;

  ngOnInit() {
    this.getJSONFromAPI();
  }

  constructor(private service: AverageReadingService) {}

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

  getJSONFromAPI() {
    this.service.FetchAverageToday(this.stationId).subscribe(
      data => {
        this.readings = data.readings;
      },
      error => {
      },
    );
    this.SetData();
  }

  SetData() {
    for (const reading in this.readings) {

    }

  }


}
