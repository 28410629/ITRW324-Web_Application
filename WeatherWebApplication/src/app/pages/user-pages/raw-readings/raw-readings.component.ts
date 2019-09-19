import { Component } from '@angular/core';
import { NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder } from '@nebular/theme';

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
  customColumn = 'Entry';
  defaultColumns = [ 'Date', 'Air_Pressure', 'Ambient_Light', 'Humidity', 'Temperature' ];
  allColumns = [ this.customColumn, ...this.defaultColumns ];

  dataSource: NbTreeGridDataSource<FSEntry>;

  sortColumn: string;
  sortDirection: NbSortDirection = NbSortDirection.NONE;

  constructor(private dataSourceBuilder: NbTreeGridDataSourceBuilder<FSEntry>) {
    this.dataSource = this.dataSourceBuilder.create(this.data);
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
      data: { Entry: 'Projects', Date: '1.8 MB', Ambient_Light: 5,
        Air_Pressure: 'dir', Humidity: true, Temperature: true },
    },
    {
      data: { Entry: 'Projects', Date: '1.8 MB', Ambient_Light: 5,
        Air_Pressure: 'dir', Humidity: true, Temperature: true },
    },
  ];

  getShowOn(index: number) {
    const minWithForMultipleColumns = 400;
    const nextColumnStep = 100;
    return minWithForMultipleColumns + (nextColumnStep * index);
  }
}
