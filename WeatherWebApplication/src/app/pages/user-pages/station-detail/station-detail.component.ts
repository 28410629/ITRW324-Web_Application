import { Component } from '@angular/core';
import {NbThemeService} from '@nebular/theme';
import {ActivatedRoute} from '@angular/router';
import {StationDetailService} from '../../../services/station-detail.service';
import {StationDetailReading} from '../../../models/station-detail.model';

@Component({
  selector: 'ngx-station-detail',
  templateUrl: 'station-detail.component.html',
  styleUrls: ['station-detail.component.scss'],
})
export class StationDetailComponent {

  // loader
  isLoaded = false;

  // graph variables
  airgraphdata;
  humgraphdata;
  tempgraphdata;
  lightgraphdata;
  graphoptions;
  themeSubscription: any;

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
  type = 'day';
  types = ['day', 'week', 'month', 'year'];

  // need for REST request
  stationid;

  constructor(private route: ActivatedRoute,
              private theme: NbThemeService,
              private service: StationDetailService) {

    // station id
    this.stationid = this.route.snapshot.params.stationid;

    // get data for graph
    this.service.FetchDayStationDetails(this.stationid)
      .subscribe(data => {
        this.json = data.StationDetailReadings;

        for (let i = 0; i < this.json.length; i++) {
          // label
          this.labels.push(new Date(this.json[i].readingTime).getHours().toString());
          // temperature
          this.tempdataavg.push(Number(this.json[i].temperatureReadingAverage));
          // air
          this.airdataavg.push(Number(this.json[i].airPressureReadingAverage));
          // humidity
          this.humdataavg.push(Number(this.json[i].humiditiyReadingAverage));
          // light
          this.lightdataavg.push(Number(this.json[i].ambientLightReadingAverage));

          this.tempdatamin.push(Number(this.json[i].temperatureReadingMin));
          // air
          this.airdatamin.push(Number(this.json[i].airPressureReadingMin));
          // humidity
          this.humdatamin.push(Number(this.json[i].humiditiyReadingMin));
          // light
          this.lightdatamin.push(Number(this.json[i].ambientLightReadingMin));

          this.tempdatamax.push(Number(this.json[i].temperatureReadingMax));
          // air
          this.airdatamax.push(Number(this.json[i].airPressureReadingMax));
          // humidity
          this.humdatamax.push(Number(this.json[i].humiditiyReadingMax));
          // light
          this.lightdatamax.push(Number(this.json[i].ambientLightReadingMax));
        }

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
          {
            label: 'Air Min',
            data: this.lightdatamin,
            borderColor: colors.info,
            backgroundColor: colors.info,
            fill: false,

            pointRadius: 4,
            pointHoverRadius: 10,
          },
          {
            label: 'Air Max',
            data: this.lightdatamax,
            borderColor: colors.dangerLight,
            backgroundColor: colors.dangerLight,
            fill: false,

            pointRadius: 4,
            pointHoverRadius: 10,
          }],
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
                labelString: this.type,
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
      this.isLoaded = true;
    });
  });
  }

  getUserActivity(period: string) {
    // this.userActivityService.getUserActivityData(period)
    //   .pipe(takeWhile(() => this.alive))
    //   .subscribe(userActivityData => {
    //     this.userActivity = userActivityData;
    //   });
  }
}
