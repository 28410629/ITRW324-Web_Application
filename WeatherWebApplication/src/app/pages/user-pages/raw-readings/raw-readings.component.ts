import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import {Station} from '../../../models/station-list.model';
import {StationListService} from '../../../services/station-list.service';
import {RawReadingsService} from '../../../services/raw-readings.service';

@Component({
  selector: 'ngx-raw-readings',
  templateUrl: './raw-readings.component.html',
  styleUrls: ['./raw-readings.component.scss'],
})
export class RawReadingsComponent {

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
        type: 'daterange',
      },
      ambient: {
        title: 'Ambient Light',
        type: 'number',
      },
      air: {
        title: 'Air Pressure',
        type: 'number',
      },
      humidity: {
        title: 'Humidity',
        type: 'number',
      },
      temperature: {
        title: 'Temperature',
        type: 'number',
      },
    },
  };

  tabledata;
  source: LocalDataSource = new LocalDataSource();

  constructor(private stationService: StationListService,
              private rawReadingService: RawReadingsService) {
    this.getStationList();
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
    switch (timespan) {
      case this.times[0]: {
        this.rawReadingService.FetchDayStationRawReadings(stationid)
          .subscribe(data => {
            if (data.Readings != null) {
              this.tabledata = [];
              let i = 0;
              data.Readings.forEach(x => {
                this.tabledata.push(
                  {
                    entry: ++i,
                    date: x.date,
                    ambient: x.ambient_Light,
                    air: x.air_Pressure,
                    humidity: x.humidity,
                    temperature: x.temperature,
                  });
              });
              this.source = new LocalDataSource();
              this.source.load(this.tabledata);
              this.isContentLoaded = true;
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
              this.tabledata = [];
              let i = 0;
              data.Readings.forEach(x => {
                this.tabledata.push(
                  {
                    entry: ++i,
                    date: x.date,
                    ambient: x.ambient_Light,
                    air: x.air_Pressure,
                    humidity: x.humidity,
                    temperature: x.temperature,
                  });
              });
              this.isContentLoaded = true;
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
              this.tabledata = [];
              let i = 0;
              data.Readings.forEach(x => {
                this.tabledata.push(
                  {
                    entry: ++i,
                    date: x.date,
                    ambient: x.ambient_Light,
                    air: x.air_Pressure,
                    humidity: x.humidity,
                    temperature: x.temperature,
                  });
              });
              this.source = new LocalDataSource();
              this.source.load(this.tabledata);
              this.isContentLoaded = true;
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
              this.tabledata = [];
              let i = 0;
              data.Readings.forEach(x => {
                this.tabledata.push(
                  {
                    entry: ++i,
                    date: x.date,
                    ambient: x.ambient_Light,
                    air: x.air_Pressure,
                    humidity: x.humidity,
                    temperature: x.temperature,
                  });
              });
              this.source = new LocalDataSource();
              this.source.load(this.tabledata);
              this.isContentLoaded = true;
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

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
