import { Component, OnInit, Input } from '@angular/core';
import { Measurement } from '../measurement';

@Component({
  selector: 'app-hs-male-measurement',
  templateUrl: './hs-male-measurement.component.html',
  styleUrls: ['./hs-male-measurement.component.scss']
})
export class HsMaleMeasurementComponent implements OnInit {
  @Input() measurement: Measurement;
  constructor() { }
  ngOnInit() {
    console.log(this.measurement);
  }
}
