import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PreviewComponent} from './components/preview/preview.component';

const routes: Routes = [
  { path: '', component: PreviewComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }