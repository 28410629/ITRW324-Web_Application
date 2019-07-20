import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { PreviewComponent } from './components/preview/preview.component';
import { FetchJsonUtilities } from './common/fetch-json.utilities';
import { ReadingsPreviewService } from './services/readings-preview.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [FetchJsonUtilities, ReadingsPreviewService],
  bootstrap: [AppComponent]
})
export class AppModule { }
