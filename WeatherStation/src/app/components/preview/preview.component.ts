import { Component, OnInit } from '@angular/core';
import {ReadingEntity} from '../../models/readings-preview.model';
import {ReadingsPreviewService} from '../../services/readings-preview.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  readings: ReadingEntity[] = [];
  error;

  constructor(private service: ReadingsPreviewService) { }

  ngOnInit() {
    this.service.FetchAllReadings().subscribe(
      data => {
        this.readings = data.readings;
      },
      error => {
        this.error = error.message;
      }
    );
  }

}
