import { Component, OnInit, Input } from '@angular/core';
import { Measurement } from '../measurement';

@Component({
  selector: 'app-hs-female-measurement',
  templateUrl: './hs-female-measurement.component.html',
  styleUrls: ['./hs-female-measurement.component.scss']
})
export class HsFemaleMeasurementComponent implements OnInit {
  @Input() measurement: Measurement;
  constructor() { }

  ngOnInit() {
  }

}
