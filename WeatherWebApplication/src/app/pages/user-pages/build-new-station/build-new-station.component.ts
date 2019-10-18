import { Component } from '@angular/core';

@Component({
  selector: 'ngx-build-new-station',
  templateUrl: 'build-new-station.component.html',
  styleUrls: ['build-new-station.component.scss'],
})
export class BuildNewStationComponent {
  hardwareComponents: string[] = [];
  constructor() {
    this.hardwareComponents.push('Veraboard', 'NodeMCU ESP8266 E-12', 'BME280 Sensor', 'TEMT6000 Light Sensor',
      '18650 TP4056 Lithium Battery Charger', 'Solar Panel (0.66W, 5.5V, 120mAh)', 'NCR18650A Battery (3.6V, 3100mAh)',
      '8 jumper cables', '2 copper wires', '7 male header pins', 'Soldering Iron & Soldering',
      'Computer thats not completely shyt', 'Working Internet');
  }
  /*GoToPage(url: string) {
    window.open('www.github.com');
  }*/
}
