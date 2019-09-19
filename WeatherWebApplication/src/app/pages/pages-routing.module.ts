import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FavouriteStationsComponent } from './user-pages/favourite-stations/favourite-stations.component';
import { LocationOverviewComponent } from './user-pages/location-overview/location-overview.component';
import {
  ManageFavouriteStationsComponent,
} from './user-pages/manage-favourite-stations/manage-favourite-stations.component';
import { StationDetailComponent } from './user-pages/station-detail/station-detail.component';
import { GithubRepositoryInfoComponent } from './user-pages/github-repository-info/github-repository-info.component';
import { UserProfileComponent } from './user-pages/user-profile/user-profile.component';
import { HomepageComponent } from './user-pages/homepage/homepage.component';
import { RawReadingsComponent } from './user-pages/raw-readings/raw-readings.component';
import {RegisterNewStationComponent} from './user-pages/register-new-station/register-new-station.component';
import {BuildNewStationComponent} from './user-pages/build-new-station/build-new-station.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'location-overview',
      component: LocationOverviewComponent,
    },
    {
      path: 'favourite-stations',
      component: FavouriteStationsComponent,
    },
    {
      path: 'station-details/:stationid',
      component: StationDetailComponent,
    },
    {
      path: 'manage-favourite-stations',
      component: ManageFavouriteStationsComponent,
    },
    {
      path: 'github-repository-info',
      component: GithubRepositoryInfoComponent,
    },
    {
      path: 'register-new-station',
      component: RegisterNewStationComponent,
    },
    {
      path: 'user-profile',
      component: UserProfileComponent,
    },
    {
      path: 'build-new-station',
      component: BuildNewStationComponent,
    },
    {
      path: 'raw-readings',
      component: RawReadingsComponent,
    },
    {
      path: 'homepage',
      component: HomepageComponent,
    },
    {
      path: '404',
      component: NotFoundComponent,
    },
    {
      path: '',
      redirectTo: 'location-overview',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
