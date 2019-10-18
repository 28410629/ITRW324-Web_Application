import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {
  NbAuthComponent,
  // NbLoginComponent,
  NbLogoutComponent,
  // NbRegisterComponent,
  // NbRequestPasswordComponent,
  // NbResetPasswordComponent,
} from '@nebular/auth';

// auth
import {AuthGuard} from './auth/auth-guard.service';
import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';
import {ResetPasswordComponent} from './auth/reset-password/reset-password.component';
import {RequestPasswordComponent} from './auth/request-password/request-password.component';
import {RouteLoaderService} from './loader/route-loader.service';

// @ts-ignore
const routes: Routes = [
  {
    path: 'pages',
    canActivate: [AuthGuard],
    resolve: { message: RouteLoaderService },
    loadChildren: () => import('app/pages/pages.module')
      .then(m => m.PagesModule),
  },
  {
    path: 'auth',
    component: NbAuthComponent,
    children: [
      {
        path: '',
        component: LoginComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'logout',
        component: NbLogoutComponent,
      },
      {
        path: 'request-password',
        component: RequestPasswordComponent,
      },
      {
        path: 'reset-password',
        component: ResetPasswordComponent,
      },
    ],
  },
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages' },
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
