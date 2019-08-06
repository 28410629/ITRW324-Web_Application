import { Component, OnInit } from '@angular/core';
import {ReadingEntity} from '../../models/readings-preview.model';
import {LastDayReadingsService} from '../../services/lastDayReadings.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  readings: ReadingEntity[] = [];
  error;

  constructor(private service: LastDayReadingsService) { }

  ngOnInit() {
    this.service.FetchTodayReadings().subscribe(
      data => {
        this.readings = data.readings;
      },
      error => {
        this.error = error.message;
      }
    );
  }

  calculateLight(AmbientLight: string) {
    const light = parseInt(AmbientLight, 10);
    const value = light / 10.24;
    return value.toFixed(2);
  }
}
