import { Component } from '@angular/core';
import {NbThemeService} from '@nebular/theme';
import {ActivatedRoute} from '@angular/router';
import {StationDetailService} from '../../../services/station-detail.service';
import {StationDetailReading} from '../../../models/station-detail.model';
import * as moment from 'moment-timezone';

@Component({
  selector: 'ngx-station-detail',
  templateUrl: 'station-detail.component.html',
  styleUrls: ['station-detail.component.scss'],
})
export class StationDetailComponent {

  // time zone for header
  timezone;

  // loader
  isMainLoaded: boolean = true;
  isContentLoaded: boolean = false;

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

  // need for REST request
  stationid;

  constructor(private route: ActivatedRoute,
              private theme: NbThemeService,
              private service: StationDetailService) {

    // station id
    this.stationid = this.route.snapshot.params.stationid;

    // time zone header
    this.timezone = moment.tz.guess(true);

    this.getGraphJson(this.time);
  }

  getGraphJson(time) {
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
      const zone = moment.tz.guess(true);
      const time = moment(this.json[i].readingTime + '+00:00').tz(zone);
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
    }
  }

  updateGraphs() {
    // graphs details
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const chartjs: any = config.variables.chartjs;

      this.airgraphdata = {
        labels: this.labels,
        datasets: [{
          label: 'Air Average',
          data: this.airdataavg,
          borderColor: colors.primary,
          backgroundColor: colors.primary,
          fill: false,

          pointRadius: 4,
          pointHoverRadius: 10,
        },
          {
            label: 'Air Min',
            data: this.airdatamin,
            borderColor: colors.info,
            backgroundColor: colors.info,
            fill: false,

            pointRadius: 4,
            pointHoverRadius: 10,
          },
          {
            label: 'Air Max',
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
          label: 'Temp Average',
          data: this.tempdataavg,
          borderColor: colors.primary,
          backgroundColor: colors.primary,
          fill: false,

          pointRadius: 4,
          pointHoverRadius: 10,
        },
          {
            label: 'Temp Min',
            data: this.tempdatamin,
            borderColor: colors.info,
            backgroundColor: colors.info,
            fill: false,

            pointRadius: 4,
            pointHoverRadius: 10,
          },
          {
            label: 'Temp Max',
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
          label: 'Hum Average',
          data: this.humdataavg,
          borderColor: colors.primary,
          backgroundColor: colors.primary,
          fill: false,

          pointRadius: 4,
          pointHoverRadius: 10,
        },
          {
            label: 'Hum Min',
            data: this.humdatamin,
            borderColor: colors.info,
            backgroundColor: colors.info,
            fill: false,

            pointRadius: 4,
            pointHoverRadius: 10,
          },
          {
            label: 'Hum Max',
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
          label: 'Light Average',
          data: this.lightdataavg,
          borderColor: colors.primary,
          backgroundColor: colors.primary,
          fill: false,
          pointRadius: 4,
          pointHoverRadius: 10,
        },
          // {
          //   label: 'Air Min',
          //   data: this.lightdatamin,
          //   borderColor: colors.info,
          //   backgroundColor: colors.info,
          //   fill: false,
          //
          //   pointRadius: 4,
          //   pointHoverRadius: 10,
          // },
          // {
          //   label: 'Air Max',
          //   data: this.lightdatamax,
          //   borderColor: colors.dangerLight,
          //   backgroundColor: colors.dangerLight,
          //   fill: false,
          //
          //   pointRadius: 4,
          //   pointHoverRadius: 10,
          // }
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
}
