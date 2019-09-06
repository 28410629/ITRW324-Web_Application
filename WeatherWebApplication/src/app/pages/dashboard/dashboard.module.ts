import { NgModule } from '@angular/core';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbTabsetModule,
  NbUserModule,
  NbRadioModule,
  NbSelectModule,
  NbListModule,
  NbIconModule,
  NbPopoverModule,
  NbSearchModule,
  NbAlertModule,
  NbInputModule,
  NbCheckboxModule,
  NbDatepickerModule,
  NbTreeGridModule,
  NbCalendarModule,
  NbCalendarKitModule,
  NbCalendarRangeModule,
  NbChatModule,
  NbProgressBarModule, NbSpinnerModule,
} from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { StatusCardComponent } from './status-card/status-card.component';
import { ContactsComponent } from './contacts/contacts.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomSelectorComponent } from './rooms/room-selector/room-selector.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { TemperatureDraggerComponent } from './temperature/temperature-dragger/temperature-dragger.component';
import { KittenComponent } from './kitten/kitten.component';
import { SecurityCamerasComponent } from './security-cameras/security-cameras.component';
import { ElectricityComponent } from './electricity/electricity.component';
import { ElectricityChartComponent } from './electricity/electricity-chart/electricity-chart.component';
import { WeatherComponent } from './weather/weather.component';
import { SolarComponent } from './solar/solar.component';
import { PlayerComponent } from './rooms/player/player.component';
import { TrafficComponent } from './traffic/traffic.component';
import { TrafficChartComponent } from './traffic/traffic-chart.component';
import { FormsModule } from '@angular/forms';
import { GridComponent } from './grid/grid.component';
import { IconsComponent } from './icons/icons.component';
import { TypographyComponent } from './typography/typography.component';
import { SearchComponent } from './search-fields/search-fields.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { FormInputsComponent } from './form-inputs/form-inputs.component';
import { FormLayoutsComponent } from './form-layouts/form-layouts.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { AgmCoreModule } from '@agm/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { GmapsComponent } from './gmaps/gmaps.component';
import { LeafletComponent } from './leaflet/leaflet.component';
import { BubbleMapComponent } from './bubble/bubble-map.component';
import { SearchMapComponent } from './search-map/search-map.component';
import { MapComponent } from './search-map/map/map.component';
import { SearchForMapComponent } from './search-map/search/search-for-map.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FsIconComponent, TreeGridComponent } from './tree-grid/tree-grid.component';
import { SmartTableComponent } from './smart-table/smart-table.component';
import { AlertComponent } from './alert/alert.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import {
  InteractiveProgressBarComponent,
} from './progress-bar/interactive-progress-bar/interactive-progress-bar.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { SpinnerColorComponent } from './spinner/spinner-color/spinner-color.component';
import { SpinnerSizesComponent } from './spinner/spinner-sizes/spinner-sizes.component';
import { SpinnerInButtonsComponent } from './spinner/spinner-in-buttons/spinner-in-buttons.component';
import { SpinnerInTabsComponent } from './spinner/spinner-in-tabs/spinner-in-tabs.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DayCellComponent } from './calendar/day-cell/day-cell.component';
import { ChatComponent } from './chat/chat.component';
import { NebularFormInputsComponent } from './nebular-form-inputs/nebular-form-inputs.component';
import { NebularSelectComponent } from './nebular-form-inputs/nebular-select/nebular-select.component';
import { CalendarKitFullCalendarShowcaseComponent } from './calendar-kit/calendar-kit.component';
import { CalendarKitMonthCellComponent } from './calendar-kit/month-cell/month-cell.component';
import {ChartjsBarComponent} from './chartjs/chartjs-bar.component';
import {ChartjsLineComponent} from './chartjs/chartjs-line.component';
import {ChartjsPieComponent} from './chartjs/chartjs-pie.component';
import {ChartjsMultipleXaxisComponent} from './chartjs/chartjs-multiple-xaxis.component';
import {ChartjsBarHorizontalComponent} from './chartjs/chartjs-bar-horizontal.component';
import {ChartjsRadarComponent} from './chartjs/chartjs-radar.component';
import {D3BarComponent} from './d3/d3-bar.component';
import {D3LineComponent} from './d3/d3-line.component';
import {D3PieComponent} from './d3/d3-pie.component';
import {D3AreaStackComponent} from './d3/d3-area-stack.component';
import {D3PolarComponent} from './d3/d3-polar.component';
import {D3AdvancedPieComponent} from './d3/d3-advanced-pie.component';
import {EchartsLineComponent} from './echarts/echarts-line.component';
import {EchartsPieComponent} from './echarts/echarts-pie.component';
import {EchartsBarComponent} from './echarts/echarts-bar.component';
import {EchartsMultipleXaxisComponent} from './echarts/echarts-multiple-xaxis.component';
import {EchartsAreaStackComponent} from './echarts/echarts-area-stack.component';
import {EchartsBarAnimationComponent} from './echarts/echarts-bar-animation.component';
import {EchartsRadarComponent} from './echarts/echarts-radar.component';
import {EchartsComponent} from './echarts/echarts.component';
import {D3Component} from './d3/d3.component';
import {ChartjsComponent} from './chartjs/chartjs.component';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {ChartModule} from 'angular2-chartjs';

@NgModule({
  imports: [
    NgxChartsModule,
    ChartModule,
    NbCalendarModule,
    NbCalendarKitModule,
    NbCalendarRangeModule,
    NbChatModule,
    NbProgressBarModule,
    NbSpinnerModule,
    NbTreeGridModule,
    Ng2SmartTableModule,
    FormsModule,
    NbTabsetModule,
    NbListModule,
    NgxEchartsModule,
    NbPopoverModule,
    NbSearchModule,
    NbAlertModule,
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    NbSelectModule,
    NbIconModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCpVhQiwAllg1RAFaxMWSpQruuGARy0Y1k',
      libraries: ['places'],
    }),
    LeafletModule.forRoot(),
  ],
  declarations: [
    DashboardComponent,
    StatusCardComponent,
    TemperatureDraggerComponent,
    ContactsComponent,
    RoomSelectorComponent,
    TemperatureComponent,
    RoomsComponent,
    KittenComponent,
    SecurityCamerasComponent,
    ElectricityComponent,
    ElectricityChartComponent,
    WeatherComponent,
    PlayerComponent,
    SolarComponent,
    TrafficComponent,
    TrafficChartComponent,
    GridComponent,
    IconsComponent,
    TypographyComponent,
    SearchComponent,
    ButtonsComponent,
    FormInputsComponent,
    FormLayoutsComponent,
    DatepickerComponent,
    GmapsComponent,
    LeafletComponent,
    BubbleMapComponent,
    SearchMapComponent,
    MapComponent,
    SearchForMapComponent,
    NotFoundComponent,
    FsIconComponent,
    SmartTableComponent,
    TreeGridComponent,
    AlertComponent,
    ProgressBarComponent,
    InteractiveProgressBarComponent,
    SpinnerComponent,
    SpinnerColorComponent,
    SpinnerSizesComponent,
    SpinnerInButtonsComponent,
    SpinnerInTabsComponent,
    CalendarComponent,
    DayCellComponent,
    ChatComponent,
    NebularFormInputsComponent,
    NebularSelectComponent,
    CalendarKitFullCalendarShowcaseComponent,
    CalendarKitMonthCellComponent,
    ChartjsBarComponent,
    ChartjsLineComponent,
    ChartjsPieComponent,
    ChartjsMultipleXaxisComponent,
    ChartjsBarHorizontalComponent,
    ChartjsRadarComponent,
    D3BarComponent,
    D3LineComponent,
    D3PieComponent,
    D3AreaStackComponent,
    D3PolarComponent,
    D3AdvancedPieComponent,
    EchartsLineComponent,
    EchartsPieComponent,
    EchartsBarComponent,
    EchartsMultipleXaxisComponent,
    EchartsAreaStackComponent,
    EchartsBarAnimationComponent,
    EchartsRadarComponent,
    EchartsComponent,
    D3Component,
    ChartjsComponent,
  ],
})
export class DashboardModule { }
