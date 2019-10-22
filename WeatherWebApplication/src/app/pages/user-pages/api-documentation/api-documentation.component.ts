import { Component } from '@angular/core';
import {LocationUtilities} from '../../../common/location.utilities';
import {ToastService} from '../../../services/toast.service';
import {LocalDataSource} from 'ng2-smart-table';

@Component({
  selector: 'ngx-register-new-station',
  templateUrl: 'api-documentation.component.html',
  styleUrls: ['api-documentation.component.scss'],
})
export class ApiDocumentationComponent {
  // table
  source: LocalDataSource = new LocalDataSource();
  settings = {
    actions: false,
    columns: {
      entry: {
        title: 'Entry',
        type: 'number',
      },
      route: {
        title: 'Route',
        type: 'string',
      },
      verb: {
        title: 'HTTP Verb',
        type: 'string',
      },
      purpose: {
        title: 'Purpose',
        type: 'string',
      },
      variables: {
        title: 'Variables',
        type: 'string',
      },
    },
  };
  constructor(private toastService: ToastService) {
    // get available stations
    this.toastService.ShowSuccessToast('API Routes', 'We like tinkers and developers, this is for you!')
    this.loadTableData();
  }
  loadTableData() {
    const tabledata = [];
    let i = 0;
    tabledata.push({
      entry: ++i,
      route: 'api/get/readings',
      verb: 'GET',
      purpose: 'Get all readings from all stations.',
      variables: 'None',
    });
    tabledata.push({
      entry: ++i,
      route: 'api/get/locationreadings/location/day',
      verb: 'GET',
      purpose: 'Get aggregated readings related to a location for the last day.',
      variables: 'Province: string\nCity: string\nDate: timestamp',
    });
    tabledata.push({
      entry: ++i,
      route: 'api/get/locationreadings/location/week',
      verb: 'GET',
      purpose: 'Get aggregated readings related to a location for the last week.',
      variables: 'Province: string\nCity: string\nDate: timestamp',
    });
    tabledata.push({
      entry: ++i,
      route: 'api/get/locationreadings/location/month',
      verb: 'GET',
      purpose: 'Get aggregated readings related to a location for the last month.',
      variables: 'Province: string\nCity: string\nDate: timestamp',
    });
    tabledata.push({
      entry: ++i,
      route: 'api/get/locationreadings/location/year',
      verb: 'GET',
      purpose: 'Get aggregated readings related to a location for the last year.',
      variables: 'Province: string\nCity: string\nDate: timestamp',
    });
    tabledata.push({
      entry: ++i,
      route: 'api/get/rawreadings/station/day',
      verb: 'GET',
      purpose: 'Get raw readings from a station for the last day.',
      variables: 'StationId: int , Date: timestamp',
    });
    tabledata.push({
      entry: ++i,
      route: 'api/get/rawreadings/station/week',
      verb: 'GET',
      purpose: 'Get raw readings from a station for the last week.',
      variables: 'StationId: int , Date: timestamp',
    });
    tabledata.push({
      entry: ++i,
      route: 'api/get/rawreadings/station/month',
      verb: 'GET',
      purpose: 'Get raw readings from a station for the last month.',
      variables: 'StationId: int , Date: timestamp',
    });
    tabledata.push({
      entry: ++i,
      route: 'api/get/rawreadings/station/year',
      verb: 'GET',
      purpose: 'Get raw readings from a station for the last year.',
      variables: 'StationId: int , Date: timestamp',
    });
    tabledata.push({
      entry: ++i,
      route: 'api/get/stationlist/all',
      verb: 'GET',
      purpose: 'Get a list of all the available stations.',
      variables: 'None',
    });
    tabledata.push({
      entry: ++i,
      route: 'api/get/stationstatus/station',
      verb: 'GET',
      purpose: 'Get a status report regarding a station/s.',
      variables: 'StationIds: string (separated by \'-\') , Date: timestamp',
    });
    tabledata.push({
      entry: ++i,
      route: 'api/get/stationdetail/station/day',
      verb: 'GET',
      purpose: 'Get aggregated readings per station for the last day.',
      variables: 'StationId: int , Date: timestamp',
    });
    tabledata.push({
      entry: ++i,
      route: 'api/get/stationdetail/station/week',
      verb: 'GET',
      purpose: 'Get aggregated readings per station for the last week.',
      variables: 'StationId: int , Date: timestamp',
    });
    tabledata.push({
      entry: ++i,
      route: 'api/get/stationdetail/station/month',
      verb: 'GET',
      purpose: 'Get aggregated readings per station for the last month.',
      variables: 'StationId: int , Date: timestamp',
    });
    tabledata.push({
      entry: ++i,
      route: 'api/get/stationdetail/station/year',
      verb: 'GET',
      purpose: 'Get aggregated readings per station for the last year.',
      variables: 'StationId: int , Date: timestamp',
    });
    tabledata.push({
      entry: ++i,
      route: 'api/get/forecast/station/4day',
      verb: 'GET',
      purpose: 'Get forecasted values per station for the next four days.',
      variables: 'StationId: int , Date: timestamp',
    });
    this.source = new LocalDataSource();
    this.source.load(tabledata);
  }
}
