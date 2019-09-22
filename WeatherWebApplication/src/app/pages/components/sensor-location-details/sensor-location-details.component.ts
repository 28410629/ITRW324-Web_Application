import {Component, Input, OnDestroy} from '@angular/core';

@Component({
  selector: 'ngx-sensor-location-details',
  styleUrls: ['./sensor-location-details.component.scss'],
  templateUrl: './sensor-location-details.component.html',
})
export class SensorLocationDetailsComponent implements OnDestroy {

  @Input()
  headerName: string = 'Loading...';

  @Input()
  data = [{ data: '', average: '', min: '', max: ''}];

  constructor() {
  }

  ngOnDestroy() {
  }
}
