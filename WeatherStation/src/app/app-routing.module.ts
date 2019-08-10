import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PreviewComponent} from './components/preview/preview.component';
import {LoginScreenComponent} from './components/login-screen/login-screen.component';
import {AboutComponent} from './components/about/about.component';
import {HomeComponent} from './components/home/home.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';

const routes: Routes = [
  { path: 'preview', component: PreviewComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'login', component: LoginScreenComponent},
  { path: 'about', component: AboutComponent},
  { path: '', component: HomeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
