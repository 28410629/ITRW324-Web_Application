import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent } from './dashboard/not-found/not-found.component';
import { GridComponent } from './dashboard/grid/grid.component';
import {FormInputsComponent} from './dashboard/form-inputs/form-inputs.component';
import {FormLayoutsComponent} from './dashboard/form-layouts/form-layouts.component';
import {ButtonsComponent} from './dashboard/buttons/buttons.component';
import {DatepickerComponent} from './dashboard/datepicker/datepicker.component';
import {GmapsComponent} from './dashboard/gmaps/gmaps.component';
import {LeafletComponent} from './dashboard/leaflet/leaflet.component';
import {BubbleMapComponent} from './dashboard/bubble/bubble-map.component';
import {SearchMapComponent} from './dashboard/search-map/search-map.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'homepage',
      component: ECommerceComponent,
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
      path: 'modal-overlays',
      loadChildren: () => import('./modal-overlays/modal-overlays.module')
        .then(m => m.ModalOverlaysModule),
    },
    {
      path: 'extra-components',
      loadChildren: () => import('./extra-components/extra-components.module')
        .then(m => m.ExtraComponentsModule),
    },
    {
      path: 'charts',
      loadChildren: () => import('./charts/charts.module')
        .then(m => m.ChartsModule),
    },
    {
      path: 'editors',
      loadChildren: () => import('./editors/editors.module')
        .then(m => m.EditorsModule),
    },
    {
      path: 'tables',
      loadChildren: () => import('./tables/tables.module')
        .then(m => m.TablesModule),
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
