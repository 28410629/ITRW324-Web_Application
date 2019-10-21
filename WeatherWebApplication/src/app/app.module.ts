/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {
  NbButtonModule,
  NbCheckboxModule,
  NbDatepickerModule,
  NbDialogModule, NbIconModule,
  NbMenuModule,
  NbSidebarModule,
  NbSpinnerModule,
  NbToastrModule,
  NbWindowModule,
} from '@nebular/theme';

// firebase
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule} from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';

// auth
import { AuthGuard } from './auth/auth-guard.service';
import { AuthService } from './auth/auth-service.service';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { RequestPasswordComponent } from './auth/request-password/request-password.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { FormsModule } from '@angular/forms';

// services
import { StationStatusService } from './services/station-status.service';

// common
import { FetchJsonUtilities } from './common/fetch-json.utilities';
import {StationDetailService} from './services/station-detail.service';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {StationListService} from './services/station-list.service';
import {RawReadingsService} from './services/raw-readings.service';
import {LocationUtilities} from './common/location.utilities';
import {LocationService} from './services/location.service';
import {RouteLoaderService} from './loader/route-loader.service';
import {WelcomeComponent} from './auth/welcome/welcome.component';
import {ToastService} from './services/toast.service';
import {RegisterNewStationService} from './services/register-new-station.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    RequestPasswordComponent,
    ResetPasswordComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ThemeModule.forRoot(),
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    CoreModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    FormsModule,
    NbCheckboxModule,
    NbButtonModule,
    NbSpinnerModule,
    NbIconModule,
  ],
  providers: [
    FetchJsonUtilities,
    LocationUtilities,
    StationStatusService,
    AuthGuard,
    AuthService,
    StationDetailService,
    StationListService,
    RawReadingsService,
    LocationService,
    RouteLoaderService,
    ToastService,
    RegisterNewStationService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
