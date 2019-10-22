import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'ngx-updatestations',
  styleUrls: ['./updatestation.component.scss'],
  templateUrl: './updatestation.component.html',
})

export class UpdatestationComponent implements OnInit {

  isLoaded = false;

  constructor(public router: Router) {
  }

  ngOnInit() {
    this.isLoaded = true;
  }

}
