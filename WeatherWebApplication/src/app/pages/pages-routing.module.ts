import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './dashboard/not-found/not-found.component';
import { GridComponent } from './dashboard/grid/grid.component';
import { FormInputsComponent } from './dashboard/form-inputs/form-inputs.component';
import { FormLayoutsComponent } from './dashboard/form-layouts/form-layouts.component';
import { ButtonsComponent } from './dashboard/buttons/buttons.component';
import { DatepickerComponent } from './dashboard/datepicker/datepicker.component';
import { GmapsComponent } from './dashboard/gmaps/gmaps.component';
import { LeafletComponent } from './dashboard/leaflet/leaflet.component';
import { BubbleMapComponent } from './dashboard/bubble/bubble-map.component';
import { SearchMapComponent } from './dashboard/search-map/search-map.component';
import { SmartTableComponent } from './dashboard/smart-table/smart-table.component';
import { TreeGridComponent } from './dashboard/tree-grid/tree-grid.component';
import { CalendarComponent } from './dashboard/calendar/calendar.component';
import { ProgressBarComponent } from './dashboard/progress-bar/progress-bar.component';
import { SpinnerComponent } from './dashboard/spinner/spinner.component';
import { AlertComponent } from './dashboard/alert/alert.component';
import { CalendarKitFullCalendarShowcaseComponent } from './dashboard/calendar-kit/calendar-kit.component';
import { ChatComponent } from './dashboard/chat/chat.component';
import { EchartsComponent } from './dashboard/echarts/echarts.component';
import { D3Component } from './dashboard/d3/d3.component';
import { ChartjsComponent } from './dashboard/chartjs/chartjs.component';
import {DialogComponent} from "./dashboard/modal-overlays/dialog/dialog.component";
import {WindowComponent} from "./dashboard/modal-overlays/window/window.component";
import {PopoversComponent} from "./dashboard/modal-overlays/popovers/popovers.component";
import {TooltipComponent} from "./dashboard/modal-overlays/tooltip/tooltip.component";
import {ToastrComponent} from "./dashboard/modal-overlays/toastr/toastr.component";

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'homepage',
      component: SpinnerComponent,
    },
    {
      path: 'my-stations',
      component: DashboardComponent,
    },
    {
      path: 'test',
      component: GridComponent,
    },
    {
      path: 'inputs',
      component: FormInputsComponent,
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
      path: 'layout',
      loadChildren: () => import('./layout/layout.module')
        .then(m => m.LayoutModule),
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
      path: 'tree-grid',
      component: TreeGridComponent,
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
