import { NgModule } from '@angular/core';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbTabsetModule,
  NbUserModule,
  NbRadioModule,
  NbSelectModule,
  NbListModule,
  NbIconModule,
  NbPopoverModule,
  NbSearchModule,
  NbAlertModule,
  NbInputModule,
  NbCheckboxModule,
  NbDatepickerModule,
  NbTreeGridModule,
  NbCalendarModule,
  NbCalendarKitModule,
  NbCalendarRangeModule,
  NbChatModule,
  NbProgressBarModule,
  NbSpinnerModule,
  NbDialogModule,
  NbWindowModule,
  NbTooltipModule,
  NbRouteTabsetModule,
  NbStepperModule,
  NbAccordionModule,
} from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';
import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { WeatherComponent } from './weather/weather.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { NotFoundComponent } from './not-found/not-found.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {ChartjsBarComponent} from './chartjs/chartjs-bar.component';
import {ChartjsLineComponent} from './chartjs/chartjs-line.component';
import {ChartjsPieComponent} from './chartjs/chartjs-pie.component';
import {ChartjsMultipleXaxisComponent} from './chartjs/chartjs-multiple-xaxis.component';
import {ChartjsBarHorizontalComponent} from './chartjs/chartjs-bar-horizontal.component';
import {ChartjsRadarComponent} from './chartjs/chartjs-radar.component';
import {ChartjsComponent} from './chartjs/chartjs.component';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {ChartModule} from 'angular2-chartjs';
import {SensorLocationDetailsComponent} from './sensor-location-details/sensor-location-details.component';

// User pages
import {FavouriteStationsComponent} from '../user-pages/favourite-stations/favourite-stations.component';
import {LocationOverviewComponent} from '../user-pages/location-overview/location-overview.component';
import {
  ManageFavouriteStationsComponent,
} from '../user-pages/manage-favourite-stations/manage-favourite-stations.component';
import { StationDetailComponent } from '../user-pages/station-detail/station-detail.component';
import { GithubRepositoryInfoComponent } from '../user-pages/github-repository-info/github-repository-info.component';
import { UserProfileComponent } from '../user-pages/user-profile/user-profile.component';
import { RawReadingsComponent } from '../user-pages/raw-readings/raw-readings.component';
import { HomepageComponent } from '../user-pages/homepage/homepage.component';
import { RegisterNewStationComponent } from '../user-pages/register-new-station/register-new-station.component';
import { BuildNewStationComponent } from '../user-pages/build-new-station/build-new-station.component';
import { StationsDetailComponent } from '../user-pages/stations-detail/stations-detail.component';
import { ManageYourStationsComponent } from '../user-pages/manage-your-stations/manage-your-stations.component';


@NgModule({
  imports: [
    NbDialogModule.forChild(),
    NbWindowModule.forChild(),
    NbSelectModule,
    NbTooltipModule,
    NgxChartsModule,
    ChartModule,
    NbCalendarModule,
    NbCalendarKitModule,
    NbCalendarRangeModule,
    NbChatModule,
    NbProgressBarModule,
    NbSpinnerModule,
    NbTreeGridModule,
    Ng2SmartTableModule,
    FormsModule,
    NbTabsetModule,
    NgxEchartsModule,
    NbPopoverModule,
    NbSearchModule,
    NbAlertModule,
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    NbIconModule,
    ReactiveFormsModule,
    NbRouteTabsetModule,
    NbStepperModule,
    NbListModule,
    NbAccordionModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCpVhQiwAllg1RAFaxMWSpQruuGARy0Y1k',
      libraries: ['places'],
    }),
    LeafletModule.forRoot(),
  ],
  declarations: [
    DashboardComponent,
    WeatherComponent,
    NotFoundComponent,
    ChartjsBarComponent,
    ChartjsLineComponent,
    ChartjsPieComponent,
    ChartjsMultipleXaxisComponent,
    ChartjsBarHorizontalComponent,
    ChartjsRadarComponent,
    ChartjsComponent,
    FavouriteStationsComponent,
    LocationOverviewComponent,
    ManageFavouriteStationsComponent,
    StationDetailComponent,
    GithubRepositoryInfoComponent,
    UserProfileComponent,
    RawReadingsComponent,
    SensorLocationDetailsComponent,
    HomepageComponent,
    RegisterNewStationComponent,
    BuildNewStationComponent,
    StationsDetailComponent,
    ManageYourStationsComponent,
  ],
  entryComponents: [
    UserProfileComponent,
  ],
  providers: [ ],
})
export class DashboardModule { }
