import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FavouriteStationsComponent } from './user-pages/favourite-stations/favourite-stations.component';
import { HomepageComponent } from './user-pages/homepage/homepage.component';
import {
  ManageFavouriteStationsComponent,
} from './user-pages/manage-favourite-stations/manage-favourite-stations.component';
import { StationDetailComponent } from './user-pages/station-detail/station-detail.component';
import { GithubRepositoryInfoComponent } from './user-pages/github-repository-info/github-repository-info.component';
import { UserProfileComponent } from './user-pages/user-profile/user-profile.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'homepage',
      component: HomepageComponent,
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
      path: 'user-profile',
      component: UserProfileComponent,
    },
    {
      path: '404',
      component: NotFoundComponent,
    },
    {
      path: '',
      redirectTo: 'homepage',
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
