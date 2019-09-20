import { Component } from '@angular/core';
import { NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder } from '@nebular/theme';
import {StationListService} from '../../../services/station-list.service';
import {Station} from '../../../models/station-list.model';

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

  sortColumn: string;
  sortDirection: NbSortDirection = NbSortDirection.NONE;

  constructor(private dataSourceBuilder: NbTreeGridDataSourceBuilder<FSEntry>,
              private stationService: StationListService) {
    // this.dataSource = this.dataSourceBuilder.create(this.data);
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

  private data: TreeNode<FSEntry>[] = [
    {
      data: { Entry: 'Projects', Date: '1.8 MB', Ambient_Light: 5,
        Air_Pressure: 'dir', Humidity: true, Temperature: true },
    },
    {
      data: { Entry: 'Projects1', Date: '1.8 MB', Ambient_Light: 5,
        Air_Pressure: 'dir', Humidity: true, Temperature: true },
    },
    {
      data: { Entry: 'Projects23', Date: '1.8 MB', Ambient_Light: 5,
        Air_Pressure: 'dir', Humidity: true, Temperature: true },
    },
  ];

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
    this.dataSource = this.dataSourceBuilder.create(this.data);
    this.isContentLoaded = true;
  }
}
