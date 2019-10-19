import { Component } from '@angular/core';

@Component({
  selector: 'ngx-build-new-station',
  templateUrl: 'build-new-station.component.html',
  styleUrls: ['build-new-station.component.scss'],
})
export class BuildNewStationComponent {
  hardwareComponents: string[] = [];
  hardwareInstallationStep1: string[] = [];
  hardwareInstallationStep2: string[] = [];
  hardwareInstallationStep2A: string[] = [];
  hardwareInstallationStep2B: string[] = [];

  checked: boolean;

  progressBarValue: number;
  percentageComplete: number;


  constructor() {

    this.hardwareComponents.push('Veraboard', 'NodeMCU ESP8266 E-12', 'BME280 Sensor', 'TEMT6000 Light Sensor',
      '18650 TP4056 Lithium Battery Charger', 'Solar Panel (0.66W, 5.5V, 120mAh)', 'NCR18650A Battery (3.6V, 3100mAh)',
      '8 jumper cables', '2 copper wires', '7 male header pins', 'Soldering Iron & Soldering',
      'Computer thats not completely shyt', 'Working Internet');

    this.hardwareInstallationStep1.push('Solder 4 male header pins to BME Sensor',
      'Solder 3 male header pins to TEMT Light Sensor');

    this.hardwareInstallationStep2.push('Connect 4 jumpers to BME Sensor and 3 to TEMT Light Sensor',
      'Solder 3 male header pins to TEMT Light Sensor');

    this.hardwareInstallationStep2A.push('Connect VIN (VCC) pin on BME Sensor to 3V3 (3.3V) ' +
      'pin on the right side of the NodeMCU',
      'Connect GND pin on BME Sensor to GND pin on the right side of the NodeMCU',
      'Connect SCL pin on BME Sensor to D1 pin on the right side of the NodeMCU',
      'Connect SDA pin on BME Sensor to D2 pin on the right side of the NodeMCU ');

    this.hardwareInstallationStep2B.push('Connect S pin on TEMT Sensor to A000 pin on the left side of the NodeMCU',
      'Connect G pin on TEMT Sensor to GND pin on the right side of the NodeMCU',
      'Connect V pin on TEMT Sensor to 3V3 (3.3V) pin on the right side of the NodeMCU');

    this.progressBarValue = 0;
    this.checked = false;
    this.percentageComplete = 0;
  }
  updateProgressbar() {

  }

  toggle(checked: boolean) {
    this.checked = checked;
    // this._sendDataToParent();
    if (this.checked === true) {
      this.percentageComplete = this.percentageComplete + 1;
    } else {
      this.percentageComplete = this.percentageComplete - 1;
    }
  }


  /*GoToPage(url: string) {
    window.open('www.github.com');
  }*/
}
