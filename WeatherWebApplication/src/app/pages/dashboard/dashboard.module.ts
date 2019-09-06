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

@NgModule({
  imports: [
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
  ],
})
export class DashboardModule { }
