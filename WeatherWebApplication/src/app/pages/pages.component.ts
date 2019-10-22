import { Component } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent {

  menu: NbMenuItem[] = [
    {
      title: 'Homepage',
      icon: 'home-outline',
      link: '/pages/homepage',
      home: true,
    },
    {
      title: 'Location Overview',
      icon: 'globe-2-outline',
      link: '/pages/location-overview',
    },
    {
      title: 'Station Details',
      icon: 'activity-outline',
      link: '/pages/station-details',
    },
    {
      title: 'Station Raw Readings',
      icon: 'archive-outline',
      link: '/pages/raw-readings',
    },
    {
      title: 'Favourite Stations',
      icon: 'star-outline',
      link: '/pages/favourite-stations',
    },
    {
      title: 'Manage Favourite Stations',
      icon: 'edit-2-outline',
      link: '/pages/manage-favourite-stations',
    },
    {
      title: 'Register Your Station',
      icon: 'plus-outline',
      link: '/pages/register-new-station',
    },
    {
      title: 'Manage Your Stations',
      icon: 'edit-2-outline',
      link: '/pages/manage-your-stations',
    },
    {
      title: 'Build New Station Guide',
      icon: 'file-text-outline',
      link: '/pages/build-new-station',
    },
    {
      title: 'API Routes',
      icon: 'flip-2-outline',
      link: '/pages/api-documentation',
    },
  ];
}
