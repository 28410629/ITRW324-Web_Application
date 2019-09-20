import { Component } from '@angular/core';
import { NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder } from '@nebular/theme';
import {StationListService} from '../../../services/station-list.service';
import {Station} from '../../../models/station-list.model';
import {RawReadingsService} from '../../../services/raw-readings.service';
import {RawReading} from '../../../models/raw-readings.model';

interface TreeNode<T> {
  data: T;
  children?: TreeNode<T>[];
  expanded?: boolean;
}

interface FSEntry {
  Entry;
  Date;
  Air_Pressure;
  Ambient_Light;
  Humidity;
  Temperature;
}

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

  isMainLoaded: boolean = true;
  isContentLoaded: boolean = true;
  loaderContentTag: string = 'Waiting for user selection.';

  customColumn = 'Entry';
  defaultColumns = [ 'Date', 'Air_Pressure', 'Ambient_Light', 'Humidity', 'Temperature' ];
  allColumns = [ this.customColumn, ...this.defaultColumns ];

  dataSource: NbTreeGridDataSource<FSEntry>;
  private data: TreeNode<FSEntry>[] = [];

  sortColumn: string;
  sortDirection: NbSortDirection = NbSortDirection.NONE;

  constructor(private dataSourceBuilder: NbTreeGridDataSourceBuilder<FSEntry>,
              private stationService: StationListService,
              private rawReadingService: RawReadingsService) {
    this.getStationList();
  }

  updateSort(sortRequest: NbSortRequest): void {
    this.sortColumn = sortRequest.column;
    this.sortDirection = sortRequest.direction;
  }

  getSortDirection(column: string): NbSortDirection {
    if (this.sortColumn === column) {
      return this.sortDirection;
    }
    return NbSortDirection.NONE;
  }

  getShowOn(index: number) {
    const minWithForMultipleColumns = 400;
    const nextColumnStep = 100;
    return minWithForMultipleColumns + (nextColumnStep * index);
  }

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
    switch (timespan) {
      case this.times[0]: {
        this.rawReadingService.FetchDayStationRawReadings(stationid)
          .subscribe(data => {
            if (data.Readings != null) {
              let i = 0;
              data.Readings.forEach(x =>
                this.data.push({
                  data: { Entry: ++i, Date: x.date, Ambient_Light: x.ambient_Light,
                    Air_Pressure: x.air_Pressure, Humidity: x.humidity, Temperature: x.temperature },
                }));
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
              let i = 0;
              data.Readings.forEach(x =>
                this.data.push({
                  data: { Entry: ++i, Date: x.date, Ambient_Light: x.ambient_Light,
                    Air_Pressure: x.air_Pressure, Humidity: x.humidity, Temperature: x.temperature },
                }));
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
              let i = 0;
              data.Readings.forEach(x =>
                this.data.push({
                  data: { Entry: ++i, Date: x.date, Ambient_Light: x.ambient_Light,
                    Air_Pressure: x.air_Pressure, Humidity: x.humidity, Temperature: x.temperature },
                }));
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
              let i = 0;
              data.Readings.forEach(x =>
                this.data.push({
                  data: { Entry: ++i, Date: x.date, Ambient_Light: x.ambient_Light,
                    Air_Pressure: x.air_Pressure, Humidity: x.humidity, Temperature: x.temperature },
                }));
            } else {
              this.getStationRawReadings(stationid, timespan);
            }
          });
        break;
      }
      default: {
        break;
      }
    }
    this.dataSource = this.dataSourceBuilder.create(this.data);
    this.isContentLoaded = true;
  }
}
