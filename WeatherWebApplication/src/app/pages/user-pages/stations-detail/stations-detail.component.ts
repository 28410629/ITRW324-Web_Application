import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import {Station} from '../../../models/station-list.model';
import {StationListService} from '../../../services/station-list.service';
import * as moment from 'moment-timezone';
import {NbThemeService} from '@nebular/theme';
import {StationDetailService} from '../../../services/station-detail.service';
import {StationDetailReading} from '../../../models/station-detail.model';

@Component({
  selector: 'ngx-raw-readings',
  templateUrl: './stations-detail.component.html',
  styleUrls: ['./stations-detail.component.scss'],
})
export class StationsDetailComponent {

  // side information
  tempSide = [];
  humSide = [];
  lightSide = [];
  pressSide = [];

  // graph variables
  airgraphdata;
  humgraphdata;
  tempgraphdata;
  lightgraphdata;
  graphoptions;
  themeSubscription: any;
  graphlabel;
  monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];

  // raw data
  json: StationDetailReading[];
  labels: string[] = [];
  tempdataavg: number[] = [];
  airdataavg: number[] = [];
  humdataavg: number[] = [];
  lightdataavg: number[] = [];
  tempdatamin: number[] = [];
  airdatamin: number[] = [];
  humdatamin: number[] = [];
  lightdatamin: number[] = [];
  tempdatamax: number[] = [];
  airdatamax: number[] = [];
  humdatamax: number[] = [];
  lightdatamax: number[] = [];

  // time series selection
  time = 'day';
  times = ['day', 'week', 'month', 'year'];

  timezone;

  stationlist: Station[];
  stationid = '';
  stations = [];

  isMainLoaded: boolean = false;
  isContentLoaded: boolean = false;
  loaderContentTag: string = 'Waiting for user selection.';

  settings = {
    actions: false,
    columns: {
      entry: {
        title: 'Entry',
        type: 'number',
      },
      date: {
        title: 'Date',
        type: 'string',
      },
      ambient: {
        title: 'Ambient Light: %',
        type: 'number',
      },
      air: {
        title: 'Air Pressure: Pa',
        type: 'number',
      },
      humidity: {
        title: 'Humidity: %',
        type: 'number',
      },
      temperature: {
        title: 'Temperature: °C',
        type: 'number',
      },
    },
  };

  tablename;
  tabledata;
  source: LocalDataSource = new LocalDataSource();
  tempdate: Date;

  constructor(private stationService: StationListService,
              private theme: NbThemeService,
              private service: StationDetailService) {
    // get available stations
    this.getStationList();

    // time zone header
    this.timezone = moment.tz.guess(true);
  }
    // this.source.load(data);

  getStationList() {
    this.isMainLoaded = false;
    this.stationService.FetchStationList()
      .subscribe(data => {
        this.stationlist = data.stations;
        if (data.stations != null) {
          this.stationid = this.stationlist[0].stationId.toString();
          this.stationlist.forEach(x => {
            this.stations.push(x.stationId.toString());
          });
          this.isMainLoaded = true;
        } else {
          this.getStationList();
        }
      });
  }

  getGraphJson(time) {
    this.loaderContentTag = 'Loading content.';
    this.isContentLoaded = false;
    // get data for graph
    switch (time) {
      case this.times[0]: {
        this.service.FetchDayStationDetails(this.stationid)
          .subscribe(data => {
            this.json = data.StationDetailReadings;
            this.resetArray();
            this.processJson();
            this.updateGraphs();
          });
        break;
      }
      case this.times[1]: {
        this.service.FetchWeekStationDetails(this.stationid)
          .subscribe(data => {
            this.json = data.StationDetailReadings;
            this.resetArray();
            this.processJson();
            this.updateGraphs();
          });
        break;
      }
      case this.times[2]: {
        this.service.FetchMonthStationDetails(this.stationid)
          .subscribe(data => {
            this.json = data.StationDetailReadings;
            this.resetArray();
            this.processJson();
            this.updateGraphs();
          });
        break;
      }
      case this.times[3]: {
        this.service.FetchYearStationDetails(this.stationid)
          .subscribe(data => {
            this.json = data.StationDetailReadings;
            this.resetArray();
            this.processJson();
            this.updateGraphs();
          });
        break;
      }
      default: {
        this.isContentLoaded = false;
        // this.loaderContentTag = 'Error occurred, try again.';
        break;
      }
    }
  }

  processJson() {
    for (let i = 0; i < this.json.length; i++) {
      const time = moment(this.json[i].readingTime + '+00:00').tz(this.timezone);
      const date = new Date(time.format());
      // label
      switch (this.time) {
        case this.times[0]: {
          this.labels.push(time.format('HH:mm'));
          this.graphlabel = 'Hourly readings for today.';
          break;
        }
        case this.times[1]: {
          this.labels.push(date.toLocaleDateString());
          this.graphlabel = 'Daily readings for last week.';
          break;
        }
        case this.times[2]: {
          this.labels.push(date.toLocaleDateString());
          this.graphlabel = 'Daily readings for last month.';
          break;
        }
        case this.times[3]: {
          this.labels.push(this.monthNames[date.getMonth()] + ' ' + date.getFullYear());
          this.graphlabel = 'Monthly readings for last year.';
          break;
        }
        default: {
          this.labels.push('e');
          break;
        }
      }

      // temperature
      this.tempdataavg.push(Number(this.json[i].temperatureReadingAverage));
      // air
      this.airdataavg.push(Number(this.json[i].airPressureReadingAverage));
      // humidity
      this.humdataavg.push(Number(this.json[i].humiditiyReadingAverage));
      // light
      this.lightdataavg.push(Number(this.json[i].ambientLightReadingAverage) / 10.24);

      this.tempdatamin.push(Number(this.json[i].temperatureReadingMin));
      // air
      this.airdatamin.push(Number(this.json[i].airPressureReadingMin));
      // humidity
      this.humdatamin.push(Number(this.json[i].humiditiyReadingMin));
      // light
      this.lightdatamin.push(Number(this.json[i].ambientLightReadingMin) / 10.24);

      this.tempdatamax.push(Number(this.json[i].temperatureReadingMax));
      // air
      this.airdatamax.push(Number(this.json[i].airPressureReadingMax));
      // humidity
      this.humdatamax.push(Number(this.json[i].humiditiyReadingMax));
      // light
      this.lightdatamax.push(Number(this.json[i].ambientLightReadingMax) / 10.24);

      // label
      let sidedate;

      switch (this.time) {
        case this.times[0]: {
          sidedate = date.toLocaleTimeString();
          break;
        }
        case this.times[1]: {
          sidedate = date.toDateString();
          break;
        }
        case this.times[2]: {
          sidedate = date.toDateString();
          break;
        }
        case this.times[3]: {
          sidedate = this.monthNames[date.getMonth()] + ' ' + date.getFullYear();
          break;
        }
        default: {
          sidedate = 'e';
          break;
        }
      }

      // temp side
      this.tempSide.push({
        data: sidedate,
        average: Number(this.json[i].temperatureReadingAverage).toFixed(2),
        min: Number(this.json[i].temperatureReadingMin).toFixed(2),
        max: Number(this.json[i].temperatureReadingMax).toFixed(2),
      });
      // light side
      this.lightSide.push({
        data: sidedate,
        average: (Number(this.json[i].ambientLightReadingAverage) / 10.24).toFixed(2),
        min: (Number(this.json[i].ambientLightReadingMin) / 10.24).toFixed(2),
        max: (Number(this.json[i].ambientLightReadingMax) / 10.24).toFixed(2),
      });
      // hum side
      this.humSide.push({
        data: sidedate,
        average: Number(this.json[i].humiditiyReadingAverage).toFixed(2),
        min: Number(this.json[i].humiditiyReadingMin).toFixed(2),
        max: Number(this.json[i].humiditiyReadingMax).toFixed(2),
      });
      // press side
      this.pressSide.push({
        data: sidedate,
        average: Number(this.json[i].airPressureReadingAverage).toFixed(2),
        min: Number(this.json[i].airPressureReadingMin).toFixed(2),
        max: Number(this.json[i].airPressureReadingMax).toFixed(2),
      });
    } // end of for loop
  }

  updateGraphs() {
    // graphs details
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const chartjs: any = config.variables.chartjs;

      this.airgraphdata = {
        labels: this.labels,
        datasets: [{
          label: 'Air Pressure Average',
          data: this.airdataavg,
          borderColor: colors.primary,
          backgroundColor: colors.primary,
          fill: false,

          pointRadius: 4,
          pointHoverRadius: 10,
        },
          {
            label: 'Air Pressure Min',
            data: this.airdatamin,
            borderColor: colors.info,
            backgroundColor: colors.info,
            fill: false,

            pointRadius: 4,
            pointHoverRadius: 10,
          },
          {
            label: 'Air Pressure Max',
            data: this.airdatamax,
            borderColor: colors.dangerLight,
            backgroundColor: colors.dangerLight,
            fill: false,

            pointRadius: 4,
            pointHoverRadius: 10,
          }],
      };

      this.tempgraphdata = {
        labels: this.labels,
        datasets: [{
          label: 'Temperature Average',
          data: this.tempdataavg,
          borderColor: colors.primary,
          backgroundColor: colors.primary,
          fill: false,

          pointRadius: 4,
          pointHoverRadius: 10,
        },
          {
            label: 'Temperature Min',
            data: this.tempdatamin,
            borderColor: colors.info,
            backgroundColor: colors.info,
            fill: false,

            pointRadius: 4,
            pointHoverRadius: 10,
          },
          {
            label: 'Temperature Max',
            data: this.tempdatamax,
            borderColor: colors.dangerLight,
            backgroundColor: colors.dangerLight,
            fill: false,

            pointRadius: 4,
            pointHoverRadius: 10,
          }],
      };

      this.humgraphdata = {
        labels: this.labels,
        datasets: [{
          label: 'Humidity Average',
          data: this.humdataavg,
          borderColor: colors.primary,
          backgroundColor: colors.primary,
          fill: false,

          pointRadius: 4,
          pointHoverRadius: 10,
        },
          {
            label: 'Humidity Min',
            data: this.humdatamin,
            borderColor: colors.info,
            backgroundColor: colors.info,
            fill: false,

            pointRadius: 4,
            pointHoverRadius: 10,
          },
          {
            label: 'Humidity Max',
            data: this.humdatamax,
            borderColor: colors.dangerLight,
            backgroundColor: colors.dangerLight,
            fill: false,

            pointRadius: 4,
            pointHoverRadius: 10,
          }],
      };

      this.lightgraphdata = {
        labels: this.labels,
        datasets: [{
          label: 'Ambient Light Average',
          data: this.lightdataavg,
          borderColor: colors.primary,
          backgroundColor: colors.primary,
          fill: false,
          pointRadius: 4,
          pointHoverRadius: 10,
        },
          {
            label: 'Ambient Light  Min',
            data: this.lightdatamin,
            borderColor: colors.info,
            backgroundColor: colors.info,
            fill: false,
            pointRadius: 4,
            pointHoverRadius: 10,
          },
          {
            label: 'Ambient Light  Max',
            data: this.lightdatamax,
            borderColor: colors.dangerLight,
            backgroundColor: colors.dangerLight,
            fill: false,
            pointRadius: 4,
            pointHoverRadius: 10,
          },
        ],
      };

      this.graphoptions = {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          position: 'bottom',
          labels: {
            fontColor: chartjs.textColor,
          },
        },
        hover: {
          mode: 'index',
        },
        scales: {
          xAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: this.graphlabel,
              },
              gridLines: {
                display: true,
                color: chartjs.axisLineColor,
              },
              ticks: {
                fontColor: chartjs.textColor,
              },
            },
          ],
          yAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Value',
              },
              gridLines: {
                display: true,
                color: chartjs.axisLineColor,
              },
              ticks: {
                fontColor: chartjs.textColor,
              },
            },
          ],
        },
      };
      this.isContentLoaded = true;
    });
  }

  resetArray() {
    this.labels = [];
    this.tempdataavg = [];
    this.airdataavg = [];
    this.humdataavg = [];
    this.lightdataavg = [];
    this.tempdatamin = [];
    this.airdatamin = [];
    this.humdatamin = [];
    this.lightdatamin = [];
    this.tempdatamax = [];
    this.airdatamax = [];
    this.humdatamax = [];
    this.lightdatamax = [];
    this.tempSide = [];
    this.humSide = [];
    this.lightSide = [];
    this.pressSide = [];
  }

  getName(stationid, time): string {
    let name = 'Not found.';
    this.stationlist.forEach(x => {
      if (x.stationId.toString() === stationid.toString()) {
        name = 'Station ' + x.stationId + ' (\'' + x.nickName + '\') : last ' + time + ' raw readings.';
      }
    });
    return name;
  }
}
