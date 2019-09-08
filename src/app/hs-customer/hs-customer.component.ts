import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { Measurement } from '../measurement';

@Component({
  selector: 'app-hs-customer',
  templateUrl: './hs-customer.component.html',
  styleUrls: ['./hs-customer.component.scss']
})
export class HsCustomerComponent implements OnInit {

  editdisabled: boolean= true;

  measurementList: Measurement[] = [
    (new Measurement(undefined,undefined,undefined)).initialiseMaleShirtMeasurment('shirt','fit'),
    (new Measurement(undefined,undefined,undefined)).initialiseMaleTowsorMeasurment('towsor','fit'),
  ]
  
  customer: Customer=new Customer('Harish', '9003369782', 'male', '153 anna nagar', 'kancheepuram', 
  'tamilnadu', '', '', this.measurementList);

  constructor() { }

  ngOnInit() {
  }

}
