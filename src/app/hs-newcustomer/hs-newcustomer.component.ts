import { Component, OnInit } from '@angular/core';
import {Customer} from '../customer';

@Component({
  selector: 'app-hs-newcustomer',
  templateUrl: './hs-newcustomer.component.html',
  styleUrls: ['./hs-newcustomer.component.scss']
})
export class HsNewcustomerComponent implements OnInit {
  public customer: Customer;
  constructor() { }
  ngOnInit() {
    this.customer = new Customer(undefined, undefined, undefined, undefined, undefined, undefined, undefined);
  }
}