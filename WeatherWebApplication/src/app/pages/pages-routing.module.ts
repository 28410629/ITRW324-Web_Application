import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FormLayoutsComponent } from './components/form-layouts/form-layouts.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { GmapsComponent } from './components/gmaps/gmaps.component';
import { LeafletComponent } from './components/leaflet/leaflet.component';
import { BubbleMapComponent } from './components/bubble/bubble-map.component';
import { SearchMapComponent } from './components/search-map/search-map.component';
import { SmartTableComponent } from './components/smart-table/smart-table.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { AlertComponent } from './components/alert/alert.component';
import { CalendarKitFullCalendarShowcaseComponent } from './components/calendar-kit/calendar-kit.component';
import { ChatComponent } from './components/chat/chat.component';
import { EchartsComponent } from './components/echarts/echarts.component';
import { D3Component } from './components/d3/d3.component';
import { ChartjsComponent } from './components/chartjs/chartjs.component';
import { DialogComponent } from './components/modal-overlays/dialog/dialog.component';
import { WindowComponent } from './components/modal-overlays/window/window.component';
import { PopoversComponent } from './components/modal-overlays/popovers/popovers.component';
import { TooltipComponent } from './components/modal-overlays/tooltip/tooltip.component';
import { ToastrComponent } from './components/modal-overlays/toastr/toastr.component';
import { StepperComponent } from './components/layout/stepper/stepper.component';
import { ListComponent } from './components/layout/list/list.component';
import { InfiniteListComponent } from './components/layout/infinite-list/infinite-list.component';
import { AccordionComponent } from './components/layout/accordion/accordion.component';
import { Tab1Component, Tab2Component, TabsComponent } from './components/layout/tabs/tabs.component';
import { FavouriteStationsComponent } from './user-pages/favourite-stations/favourite-stations.component';
import { HomepageComponent } from './user-pages/homepage/homepage.component';
import {
  ManageFavouriteStationsComponent,
} from './user-pages/manage-favourite-stations/manage-favourite-stations.component';
import { StationDetailComponent } from './user-pages/station-detail/station-detail.component';
import { GithubRepositoryInfoComponent } from './user-pages/github-repository-info/github-repository-info.component';
import {UserProfileComponent} from './user-pages/user-profile/user-profile.component';

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
      path: 'station-details',
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
      path: 'layouts',
      component: FormLayoutsComponent,
    },
    {
      path: 'buttons',
      component: ButtonsComponent,
    },
    {
      path: 'datepicker',
      component: DatepickerComponent,
    },
    {
      path: 'gmaps',
      component: GmapsComponent,
    },
    {
      path: 'leaflet',
      component: LeafletComponent,
    }, {
      path: 'bubble',
      component: BubbleMapComponent,
    }, {
      path: 'searchmap',
      component: SearchMapComponent,
    },
    {
      path: 'stepper',
      component: StepperComponent,
    },
    {
      path: 'list',
      component: ListComponent,
    },
    {
      path: 'infinite-list',
      component: InfiniteListComponent,
    },
    {
      path: 'accordion',
      component: AccordionComponent,
    },
    {
      path: 'tabs',
      component: TabsComponent,
      children: [
        {
          path: '',
          redirectTo: 'tab1',
          pathMatch: 'full',
        },
        {
          path: 'tab1',
          component: Tab1Component,
        },
        {
          path: 'tab2',
          component: Tab2Component,
        },
      ],
    },
    {
      path: 'dialog',
      component: DialogComponent,
    },
    {
      path: 'window',
      component: WindowComponent,
    },
    {
      path: 'popover',
      component: PopoversComponent,
    },
    {
      path: 'tooltip',
      component: TooltipComponent,
    },
    {
      path: 'toastr',
      component: ToastrComponent,
    },
    {
      path: 'calendar',
      component: CalendarComponent,
    },
    {
      path: 'progress-bar',
      component: ProgressBarComponent,
    },
    {
      path: 'spinner',
      component: SpinnerComponent,
    },
    {
      path: 'alert',
      component: AlertComponent,
    },
    {
      path: 'calendar-kit',
      component: CalendarKitFullCalendarShowcaseComponent,
    },
    {
      path: 'chat',
      component: ChatComponent,
    },
    {
      path: 'echarts',
      component: EchartsComponent,
    }, {
      path: 'd3',
      component: D3Component,
    }, {
      path: 'chartjs',
      component: ChartjsComponent,
    },
    {
      path: 'smart-table',
      component: SmartTableComponent,
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
