import {Component, OnInit} from '@angular/core';
import {StationStatusService} from '../../../services/station-status.service';
import {AverageReadingEntity} from '../../../models/averagereadings.model';
import {AuthService} from '../../../auth/auth-service.service';
import {User} from '../../../models/user.model';
import {StationListService} from '../../../services/station-list.service';
import {Station} from '../../../models/station-list.model';

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
  stationlist: Station[];
  station = '';
  stations = [];
  useruid: string;
  favStations: Number[] = [];
  constructor(private service: StationStatusService,
              private authService: AuthService,
              private stationService: StationListService) {
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
            this.getStationList();
          }
        });
  }
  getStationList() {
    this.isLoaded = false;
    this.stationService.FetchStationList()
      .subscribe(data => {
        this.stationlist = data.stations;
        if (data.stations != null) {
          this.station = this.stationlist[0].stationId.toString();
          this.stationlist.forEach(x => {
            this.stations.push(x.stationId.toString());
          });
          this.getData();
        } else {
          this.getStationList();
        }
      });
  }
  getData() {
    this.isLoaded = false;
    let StationString = '';
    for (let i = 0; i < this.stations.length; i++) {
      StationString = StationString + this.stations[i] + '-';
    }
    StationString = StationString.substr(0, StationString.lastIndexOf('-'));
    this.service.FetchAverageToday(StationString).subscribe( // update this to ALL STATIONS in future
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
