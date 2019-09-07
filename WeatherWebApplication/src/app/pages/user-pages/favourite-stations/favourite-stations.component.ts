import {Component, OnInit} from '@angular/core';
import {AverageReadingService} from '../../../services/AverageReadingService';
import {AverageReadingEntity} from '../../../models/averagereadings.model';

@Component({
  selector: 'ngx-favourite-stations',
  templateUrl: 'favourite-stations.component.html',
  styleUrls: ['favourite-stations.component.scss'],
})
export class FavouriteStationsComponent implements OnInit {

  statusReadings: AverageReadingEntity[] = [];
  isLoaded: boolean = false;

  constructor(private service: AverageReadingService) {}

  ngOnInit(): void {
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
