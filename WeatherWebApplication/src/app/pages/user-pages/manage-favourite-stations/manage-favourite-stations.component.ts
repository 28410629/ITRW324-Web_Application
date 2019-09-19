import {Component, OnInit} from '@angular/core';
import {AverageReadingService} from '../../../services/AverageReadingService';
import {AverageReadingEntity} from '../../../models/averagereadings.model';

@Component({
  selector: 'ngx-manage-favourite-stations',
  templateUrl: 'manage-favourite-stations.component.html',
  styleUrls: ['manage-favourite-stations.component.scss'],
})
export class ManageFavouriteStationsComponent implements OnInit {

  statusReadings: AverageReadingEntity[] = [];
  isLoaded: boolean = false;
  // time series selection
  type = 'day';
  types = ['day', 'week', 'month', 'year'];
  constructor(private service: AverageReadingService) {}
  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this.isLoaded = false;
    this.service.FetchAverageToday('2347795-10359807-10359964').subscribe(
      data => {
        this.statusReadings = data.avgReadings;
        this.isLoaded = true;
      },
      error => {
      },
    );
  }
}
