import {Component, Input, OnDestroy} from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators';
import {UserActive, UserActivityData} from '../../../@core/data/user-activity';

@Component({
  selector: 'ngx-sensor-location-details',
  styleUrls: ['./sensor-location-details.component.scss'],
  templateUrl: './sensor-location-details.component.html',
})
export class SensorLocationDetailsComponent implements OnDestroy {

  @Input()
  headerName: string = 'Loading...';

  private alive = true;

  userActivity: UserActive[] = [];
  type = 'month';
  types = ['week', 'month', 'year'];
  currentTheme: string;

  constructor(private themeService: NbThemeService,
              private userActivityService: UserActivityData) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.currentTheme = theme.name;
    });

    this.getUserActivity(this.type);
  }

  getUserActivity(period: string) {
    this.userActivityService.getUserActivityData(period)
      .pipe(takeWhile(() => this.alive))
      .subscribe(userActivityData => {
        this.userActivity = userActivityData;
      });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
