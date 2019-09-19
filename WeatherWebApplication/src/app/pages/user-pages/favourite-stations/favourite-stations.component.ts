import {Component, OnInit} from '@angular/core';
import {AverageReadingService} from '../../../services/AverageReadingService';
import {AverageReadingEntity} from '../../../models/averagereadings.model';
import {User} from '../../../models/user.model';
import {AuthService} from '../../../auth/auth-service.service';


@Component({
  selector: 'ngx-favourite-stations',
  templateUrl: 'favourite-stations.component.html',
  styleUrls: ['favourite-stations.component.scss'],
})
export class FavouriteStationsComponent implements OnInit {

  statusReadings: AverageReadingEntity[] = [];
  isLoaded: boolean = false;
  // time series selection
  type = 'day';
  types = ['day', 'week', 'month', 'year'];
  user: User;
  useruid: string;
  favStations: Number[] = [];
  constructor(private service: AverageReadingService,  private authService: AuthService) {
    const storageuser: User = JSON.parse(localStorage.getItem('user'));
    this.useruid = storageuser.uid;
  }

  ngOnInit(): void {

    this.authService.GetUserProfileData(this.useruid)
      .subscribe(
        responseData => {
          this.user = responseData;
          this.favStations = this.user.favStations;
          this.getData();
        });
  }

  getData() {
    if (this.favStations.length > 0) {
      this.isLoaded = false;
      let stationString = '';
      for (let i = 0; i < this.favStations.length; i++) {
        stationString += this.favStations[i] + '-';
      }
      stationString = stationString.substr(0, stationString.lastIndexOf('-'));
      this.service.FetchAverageToday(stationString).subscribe(
        data => {
          this.statusReadings = data.avgReadings;
          this.isLoaded = true;
        },
        error => {
        },
      );
    } else {
      this.isLoaded = true;
    }

  }

}
