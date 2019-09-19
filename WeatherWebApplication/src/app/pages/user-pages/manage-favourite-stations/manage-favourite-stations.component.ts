import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AverageReadingService} from '../../../services/AverageReadingService';
import {AverageReadingEntity} from '../../../models/averagereadings.model';
import {AuthService} from '../../../auth/auth-service.service';
import {User} from '../../../models/user.model';

@Component({
  selector: 'ngx-manage-favourite-stations',
  templateUrl: 'manage-favourite-stations.component.html',
  styleUrls: ['manage-favourite-stations.component.scss'],
})
export class ManageFavouriteStationsComponent implements OnInit {

  statusReadings: AverageReadingEntity[] = [];
  isLoaded: boolean = false;
  firstLoad: boolean = true;
  // time series selection
  type = 'day';
  types = ['day', 'week', 'month', 'year'];
  user: User;
  useruid: string;
  favStations: Number[] = [];
  constructor(private service: AverageReadingService, private authService: AuthService) {
    const storageuser: User = JSON.parse(localStorage.getItem('user'));
    this.useruid = storageuser.uid;
  }
  ngOnInit(): void {
    this.authService.GetUserProfileData(this.useruid)
      .subscribe(
        responseData => {
          this.user = responseData;
          this.favStations = this.user.favStations;
          if (this.firstLoad) {
            this.getData();
          }
        });
  }
  getData() {
    this.isLoaded = false;
    this.service.FetchAverageToday('2347795-10359807-10359964').subscribe( // update this to ALL STATIONS in future
      data => {
        this.statusReadings = data.avgReadings;
        this.isLoaded = true;
        this.firstLoad = false;
      },
      error => {
        this.firstLoad = true;
        this.getData();
      },
    );
  }
  updateFavStations(newFavs: number) {
    if (this.favStations.includes(Number(newFavs))) { // remove station from favourites
      this.favStations.splice(this.favStations.indexOf(Number(newFavs)), 1);
    } else {
      this.favStations.push(Number(newFavs));
    }
    this.authService.UpdateUserFavourites(this.favStations);
  }
}
