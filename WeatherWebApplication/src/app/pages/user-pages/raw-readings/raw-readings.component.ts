import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import {Station} from '../../../models/station-list.model';
import {StationListService} from '../../../services/station-list.service';
import {RawReadingsService} from '../../../services/raw-readings.service';
import {RawReadings} from '../../../models/raw-readings.model';
import * as moment from 'moment-timezone';

@Component({
  selector: 'ngx-raw-readings',
  templateUrl: './raw-readings.component.html',
  styleUrls: ['./raw-readings.component.scss'],
})
export class RawReadingsComponent {

  timezone;

  stationlist: Station[];
  station = '';
  stations = [];

  time = 'day';
  times = ['day', 'week', 'month', 'year'];

  isMainLoaded: boolean = false;
  isContentLoaded: boolean = false;
  loaderContentTag: string = 'Waiting for user selection.';

  settings = {
    actions: false,
    columns: {
      entry: {
        title: 'Entry',
        type: 'number',
      },
      date: {
        title: 'Date',
        type: 'string',
      },
      ambient: {
        title: 'Ambient Light: %',
        type: 'number',
      },
      air: {
        title: 'Air Pressure: Pa',
        type: 'number',
      },
      humidity: {
        title: 'Humidity: %',
        type: 'number',
      },
      temperature: {
        title: 'Temperature: °C',
        type: 'number',
      },
    },
  };

  tablename;
  tabledata;
  source: LocalDataSource = new LocalDataSource();
  tempdate: Date;

  constructor(private stationService: StationListService,
              private rawReadingService: RawReadingsService) {
    this.getStationList();
    this.timezone = moment.tz.guess(true);
  }
    // this.source.load(data);

  getStationList() {
    this.isMainLoaded = false;
    this.stationService.FetchStationList()
      .subscribe(data => {
        this.stationlist = data.stations;
        if (data.stations != null) {
          this.station = this.stationlist[0].stationId.toString();
          this.stationlist.forEach(x => {
            this.stations.push(x.stationId.toString());
          });
          this.isMainLoaded = true;
        } else {
          this.getStationList();
        }
      });
  }

  getStationRawReadings(stationid, timespan) {
    this.isContentLoaded = false;
    this.loaderContentTag = 'Loading content.';
    this.tablename = 'Loading content.';
    switch (timespan) {
      case this.times[0]: {
        this.rawReadingService.FetchDayStationRawReadings(stationid)
          .subscribe(data => {
            if (data.Readings != null) {
              this.processData(data);
            } else {
              this.getStationRawReadings(stationid, timespan);
            }
          });
        break;
      }
      case this.times[1]: {
        this.rawReadingService.FetchWeekStationRawReadings(stationid)
          .subscribe(data => {
            if (data.Readings != null) {
              this.processData(data);
            } else {
              this.getStationRawReadings(stationid, timespan);
            }
          });
        break;
      }
      case this.times[2]: {
        this.rawReadingService.FetchMonthStationRawReadings(stationid)
          .subscribe(data => {
            if (data.Readings != null) {
              this.processData(data);
            } else {
              this.getStationRawReadings(stationid, timespan);
            }
          });
        break;
      }
      case this.times[3]: {
        this.rawReadingService.FetchYearStationRawReadings(stationid)
          .subscribe(data => {
            if (data.Readings != null) {
              this.processData(data);
            } else {
              this.getStationRawReadings(stationid, timespan);
            }
          });
        break;
      }
      default: {
        this.isContentLoaded = false;
        this.loaderContentTag = 'Error occurred, try again.';
        break;
      }
    }
  }

  processData(data: RawReadings) {
    this.tabledata = [];
    let i = 0;
    data.Readings.forEach(x => {
      const time = moment(x.date + '+00:00').tz(this.timezone);
      this.tempdate = new Date(time.format());
      this.tabledata.push(
        {
          entry: ++i,
          date: this.tempdate.toDateString() + ' - ' + this.tempdate.toLocaleTimeString(),
          ambient: (x.ambient_Light / 10.24).toFixed(2),
          air: x.air_Pressure,
          humidity: x.humidity,
          temperature: x.temperature,
        });
    });
    this.source = new LocalDataSource();
    this.source.load(this.tabledata);
    this.tablename = this.getName(this.station, this.time);
    this.isContentLoaded = true;
  }

  getName(stationid, time): string {
    let name = 'Not found.';
    this.stationlist.forEach(x => {
      if (x.stationId.toString() === stationid.toString()) {
        name = 'Station ' + x.stationId + ' (\'' + x.nickName + '\') : last ' + time + ' raw readings.';
      }
    });
    return name;
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
